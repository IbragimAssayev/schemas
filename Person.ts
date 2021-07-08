import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

interface Person {
    quantity: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Person>({
    quantity: { type: Number, required: true },
});

// 3. Create and export Model.
const PersonModel = model<Person>('Person', schema);
module.exports = PersonModel;