import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IConversion extends mongoose.Document {
    originCurrency: string;
    targetCurrency: string;
    value: number;
    result: number;
    resultInUSD: number;
}

const conversionSchema = new Schema({
    originCurrency: String,
    targetCurrency: String,
    value: Number,
    result: Number,
    resultInUSD: Number,
});

const ConversionModel = mongoose.model<IConversion>('conversion', conversionSchema);

export default ConversionModel;
