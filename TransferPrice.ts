import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface TransferPrice {
    type:number;
    personID:number;
    seasonID:number;
    transportID: string;
    price:number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<TransferPrice>({
    type: { type: Schema.Types.Number, ref: 'Type', required:true },
    personID: { type: Schema.Types.Number, ref: 'Person', required:true },
    seasonID: { type: Schema.Types.Number, ref: 'Season', required:true },
    transportID:{ type: Schema.Types.Number, ref: 'Transport', required:true },
    price: { type:Number, required:true }
});

// 3. Create and export Model.
const TransferPriceModel = model<TransferPrice>('TransferPrice', schema);
module.exports = TransferPriceModel;