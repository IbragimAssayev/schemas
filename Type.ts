// import { Schema, model } from 'mongoose';
//
// // 1. Create an interface representing a document in MongoDB.
// enum type {
//     econom = 1,
//     standart,
//     business
// }
//
// interface Type {
//     id:number;
//     type: type;
// }
//
// // 2. Create a Schema corresponding to the document interface.
// const schema = new Schema<Type>({
//     id:{type:Number, required:true},
//     type: { type: String, required: true },
// });
//
// // 3. Create and export Model.
// const TypeModel = model<Type>('Type', schema);
// module.exports = TypeModel;