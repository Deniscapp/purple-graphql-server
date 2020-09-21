import axios from 'axios';
import { ApolloError, UserInputError } from 'apollo-server';

import currencies from './currencies';
import { QueryResolvers, MutationResolvers } from './gen-types';

const apiKey = process.env.CURRENCY_API_KEY;

interface IResolvers {
    Query: QueryResolvers;
    Mutation: MutationResolvers;
}

const resolvers: IResolvers = {
    Query: {
        async currentStats(_, __, { ConversionModel }) {
            let mostPolularCurrencies;
            try {
                mostPolularCurrencies = await ConversionModel.aggregate([
                    {
                        $group: {
                            _id: {
                                targetCurrency: '$targetCurrency',
                                name: '$name',
                            },
                            count: {
                                $sum: 1,
                            },
                        },
                    },
                    {
                        $sort: {
                            count: -1,
                        },
                    },
                ]).exec();
            } catch (err) {
                return new ApolloError(err.stack, '500');
            }

            let totalConversions;
            try {
                totalConversions = await ConversionModel.countDocuments({}).exec();
            } catch (err) {
                return new ApolloError(err.stack, '500');
            }

            let conversions;
            try {
                conversions = await ConversionModel.aggregate([
                    {
                        $group: {
                            _id: null,
                            totalConverted: {
                                $sum: '$resultInUSD',
                            },
                        },
                    },
                ]).exec();
            } catch (err) {
                return new ApolloError(err.stack, '500');
            }

            return {
                mostPolularCurrency: mostPolularCurrencies[0]._id.targetCurrency,
                totalConverted: conversions[0].totalConverted,
                totalConversions,
            };
        },
        async conversions(_, __, { ConversionModel }) {
            let allConversions;
            try {
                allConversions = await ConversionModel.find({}).exec();
            } catch (err) {
                throw err;
            }

            return allConversions.map(({ _id, value, originCurrency, targetCurrency, resultInUSD, result }) => ({
                _id,
                value,
                originCurrency,
                targetCurrency,
                resultInUSD,
                result,
            }));
        },
        currencies() {
            return currencies;
        },
    },
    Mutation: {
        async newConversion(_, { input }, { ConversionModel }) {
            if (typeof input.value === 'number') {
                let rate;
                const apiUrl = (chosenCurrencies: string) =>
                    `https://free.currconv.com/api/v7/convert?q=${chosenCurrencies}&compact=ultra&apiKey=${apiKey}`;
                try {
                    rate = await axios.get(apiUrl(`${input.originCurrency}_${input.targetCurrency}`));
                } catch (err) {
                    return new ApolloError(
                        err?.response.data?.error ?? `Conversion rate to ${input.targetCurrency} not available!`,
                        err?.response.data?.code ?? 502,
                        err,
                    );
                }

                const result = rate?.data[`${input.originCurrency}_${input.targetCurrency}`] * input.value;

                try {
                    rate = await axios.get(apiUrl(`${input.originCurrency}_USD`));
                } catch (err) {
                    return new ApolloError(
                        err?.response.data?.error ?? `Conversion rate to USD not available!`,
                        err?.response.data?.code ?? 502,
                        err,
                    );
                }

                const resultInUSD = rate?.data[`${input.originCurrency}_USD`] * input.value;
                const newConversion = new ConversionModel({ ...input, resultInUSD, result });

                const { _id } = await newConversion.save();

                return {
                    ...input,
                    result,
                    resultInUSD,
                    _id,
                };
            }

            return new UserInputError('Wrong input!');
        },
    },
};

export default resolvers;
