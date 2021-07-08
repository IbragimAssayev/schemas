import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Transport {
    title: string;
    description?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Transport>({
    title: { type: String, required: true },
    description: { type: String }
});

// 3. Create and export Model.
const TransportModel = model<Transport>('Transport', schema);
module.exports = TransportModel;