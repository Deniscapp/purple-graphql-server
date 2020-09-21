import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IConversion extends mongoose.Document {
    originCurrency: string;
    targetCurrency: string;
    value: number;
    result: number;
    resultInUSD: number;
    createdAt: Date;
}

const conversionSchema = new Schema({
    originCurrency: String,
    targetCurrency: String,
    value: Number,
    result: Number,
    resultInUSD: Number,
    createdAt: { type: Date, default: Date.now },
});

const ConversionModel = mongoose.model<IConversion>('conversion', conversionSchema);

export default ConversionModel;
