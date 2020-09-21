import { GraphQLResolveInfo } from 'graphql';
import { IContext } from './server';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
    { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export enum CurrencyType {
    Aed = 'AED',
    Afn = 'AFN',
    All = 'ALL',
    Amd = 'AMD',
    Ang = 'ANG',
    Aoa = 'AOA',
    Ars = 'ARS',
    Aud = 'AUD',
    Awg = 'AWG',
    Azn = 'AZN',
    Bam = 'BAM',
    Bbd = 'BBD',
    Bdt = 'BDT',
    Bgn = 'BGN',
    Bhd = 'BHD',
    Bif = 'BIF',
    Bmd = 'BMD',
    Bnd = 'BND',
    Bob = 'BOB',
    Brl = 'BRL',
    Bsd = 'BSD',
    Btc = 'BTC',
    Btn = 'BTN',
    Bwp = 'BWP',
    Byn = 'BYN',
    Bzd = 'BZD',
    Cad = 'CAD',
    Cdf = 'CDF',
    Chf = 'CHF',
    Clf = 'CLF',
    Clp = 'CLP',
    Cnh = 'CNH',
    Cny = 'CNY',
    Cop = 'COP',
    Crc = 'CRC',
    Cuc = 'CUC',
    Cup = 'CUP',
    Cve = 'CVE',
    Czk = 'CZK',
    Djf = 'DJF',
    Dkk = 'DKK',
    Dop = 'DOP',
    Dzd = 'DZD',
    Egp = 'EGP',
    Ern = 'ERN',
    Etb = 'ETB',
    Eur = 'EUR',
    Fjd = 'FJD',
    Fkp = 'FKP',
    Gbp = 'GBP',
    Gel = 'GEL',
    Ggp = 'GGP',
    Ghs = 'GHS',
    Gip = 'GIP',
    Gmd = 'GMD',
    Gnf = 'GNF',
    Gtq = 'GTQ',
    Gyd = 'GYD',
    Hkd = 'HKD',
    Hnl = 'HNL',
    Hrk = 'HRK',
    Htg = 'HTG',
    Huf = 'HUF',
    Idr = 'IDR',
    Ils = 'ILS',
    Imp = 'IMP',
    Inr = 'INR',
    Iqd = 'IQD',
    Irr = 'IRR',
    Isk = 'ISK',
    Jep = 'JEP',
    Jmd = 'JMD',
    Jod = 'JOD',
    Jpy = 'JPY',
    Kes = 'KES',
    Kgs = 'KGS',
    Khr = 'KHR',
    Kmf = 'KMF',
    Kpw = 'KPW',
    Krw = 'KRW',
    Kwd = 'KWD',
    Kyd = 'KYD',
    Kzt = 'KZT',
    Lak = 'LAK',
    Lbp = 'LBP',
    Lkr = 'LKR',
    Lrd = 'LRD',
    Lsl = 'LSL',
    Lyd = 'LYD',
    Mad = 'MAD',
    Mdl = 'MDL',
    Mga = 'MGA',
    Mkd = 'MKD',
    Mmk = 'MMK',
    Mnt = 'MNT',
    Mop = 'MOP',
    Mro = 'MRO',
    Mru = 'MRU',
    Mur = 'MUR',
    Mvr = 'MVR',
    Mwk = 'MWK',
    Mxn = 'MXN',
    Myr = 'MYR',
    Mzn = 'MZN',
    Nad = 'NAD',
    Ngn = 'NGN',
    Nio = 'NIO',
    Nok = 'NOK',
    Npr = 'NPR',
    Nzd = 'NZD',
    Omr = 'OMR',
    Pab = 'PAB',
    Pen = 'PEN',
    Pgk = 'PGK',
    Php = 'PHP',
    Pkr = 'PKR',
    Pln = 'PLN',
    Pyg = 'PYG',
    Qar = 'QAR',
    Ron = 'RON',
    Rsd = 'RSD',
    Rub = 'RUB',
    Rwf = 'RWF',
    Sar = 'SAR',
    Sbd = 'SBD',
    Scr = 'SCR',
    Sdg = 'SDG',
    Sek = 'SEK',
    Sgd = 'SGD',
    Shp = 'SHP',
    Sll = 'SLL',
    Sos = 'SOS',
    Srd = 'SRD',
    Ssp = 'SSP',
    Std = 'STD',
    Stn = 'STN',
    Svc = 'SVC',
    Syp = 'SYP',
    Szl = 'SZL',
    Thb = 'THB',
    Tjs = 'TJS',
    Tmt = 'TMT',
    Tnd = 'TND',
    Top = 'TOP',
    Try = 'TRY',
    Ttd = 'TTD',
    Twd = 'TWD',
    Tzs = 'TZS',
    Uah = 'UAH',
    Ugx = 'UGX',
    Usd = 'USD',
    Uyu = 'UYU',
    Uzs = 'UZS',
    Vef = 'VEF',
    Ves = 'VES',
    Vnd = 'VND',
    Vuv = 'VUV',
    Wst = 'WST',
    Xaf = 'XAF',
    Xag = 'XAG',
    Xau = 'XAU',
    Xcd = 'XCD',
    Xdr = 'XDR',
    Xof = 'XOF',
    Xpd = 'XPD',
    Xpf = 'XPF',
    Xpt = 'XPT',
    Yer = 'YER',
    Zar = 'ZAR',
    Zmw = 'ZMW',
    Zwl = 'ZWL',
}

export type ConversionStats = {
    __typename?: 'ConversionStats';
    mostPolularCurrency?: Maybe<Scalars['String']>;
    totalConverted?: Maybe<Scalars['Float']>;
    totalConversions?: Maybe<Scalars['Int']>;
};

export type Query = {
    __typename?: 'Query';
    currentStats: ConversionStats;
    conversions: Array<Maybe<Conversion>>;
    currencies?: Maybe<Array<Maybe<CurrencyType>>>;
};

export type Conversion = {
    __typename?: 'Conversion';
    _id: Scalars['ID'];
    value: Scalars['Float'];
    originCurrency: CurrencyType;
    targetCurrency: CurrencyType;
    result: Scalars['Float'];
    createdAt: Scalars['String'];
};

export type NewConversionInput = {
    value: Scalars['Float'];
    originCurrency: CurrencyType;
    targetCurrency: CurrencyType;
};

export type Mutation = {
    __typename?: 'Mutation';
    newConversion: Conversion;
};

export type MutationNewConversionArgs = {
    input: NewConversionInput;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    CurrencyType: ResolverTypeWrapper<any>;
    ConversionStats: ResolverTypeWrapper<any>;
    String: ResolverTypeWrapper<any>;
    Float: ResolverTypeWrapper<any>;
    Int: ResolverTypeWrapper<any>;
    Query: ResolverTypeWrapper<{}>;
    Conversion: ResolverTypeWrapper<any>;
    ID: ResolverTypeWrapper<any>;
    NewConversionInput: ResolverTypeWrapper<any>;
    Mutation: ResolverTypeWrapper<{}>;
    Boolean: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    ConversionStats: any;
    String: any;
    Float: any;
    Int: any;
    Query: {};
    Conversion: any;
    ID: any;
    NewConversionInput: any;
    Mutation: {};
    Boolean: any;
};

export type ConversionStatsResolvers<
    ContextType = IContext,
    ParentType extends ResolversParentTypes['ConversionStats'] = ResolversParentTypes['ConversionStats']
> = {
    mostPolularCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    totalConverted?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    totalConversions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<
    ContextType = IContext,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    currentStats?: Resolver<ResolversTypes['ConversionStats'], ParentType, ContextType>;
    conversions?: Resolver<Array<Maybe<ResolversTypes['Conversion']>>, ParentType, ContextType>;
    currencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['CurrencyType']>>>, ParentType, ContextType>;
};

export type ConversionResolvers<
    ContextType = IContext,
    ParentType extends ResolversParentTypes['Conversion'] = ResolversParentTypes['Conversion']
> = {
    _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    originCurrency?: Resolver<ResolversTypes['CurrencyType'], ParentType, ContextType>;
    targetCurrency?: Resolver<ResolversTypes['CurrencyType'], ParentType, ContextType>;
    result?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
    createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<
    ContextType = IContext,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
    newConversion?: Resolver<
        ResolversTypes['Conversion'],
        ParentType,
        ContextType,
        RequireFields<MutationNewConversionArgs, 'input'>
    >;
};

export type Resolvers<ContextType = IContext> = {
    ConversionStats?: ConversionStatsResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Conversion?: ConversionResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;
