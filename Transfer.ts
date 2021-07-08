import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Transfer {
    type:number;
    personID:number;
    seasonID:number;
    transportID: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Transfer>({
    type: { type: Schema.Types.Number, ref: 'Type', required:true },
    personID: { type: Schema.Types.Number, ref: 'Person', required:true },
    seasonID: { type: Schema.Types.Number, ref: 'Season', required:true },
    transportID:{ type: Schema.Types.Number, ref: 'Transport', required:true },
});

// 3. Create and export Model.
const TransferModel = model<Transfer>('Transfer', schema);
module.exports = TransferModel;