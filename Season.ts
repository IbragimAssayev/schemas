import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Season {
    title: string;
    month_start: string;
    month_end: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Season>({
    title: { type: String, required: true },
    month_start: { type: String, required: true },
    month_end: { type: String, required: true }
});

// 3. Create and export Model.
const SeasonModel = model<Season>('Season', schema);
module.exports = SeasonModel;