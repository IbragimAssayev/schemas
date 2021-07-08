import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
enum type {
    baby = "baby",
    child = "child",
    adult = "adult",
    tourLeader = "tourLeader",
    guide = "guide"
}

interface PersonType {
    personType:type
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<PersonType>({
    personType:{ type:type, required:true}
});

// 3. Create and export Model.
const PersonTypeModel = model<PersonType>('PersonType', schema);
module.exports = PersonTypeModel;