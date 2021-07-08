import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Meal {
    personType:String;
    mealPrice:number;
    personTypeNumber:number;
    discount?:number;
    price:number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Meal>({
    personType: { type: Schema.Types.Number, ref: 'PersonType', required:true },
    mealPrice: { type: Schema.Types.Number, ref: 'MealPrice', required:true },
    personTypeNumber: { type:Number, required:true },
    discount: { type:Number },
    price: { type:Number, required: true }
});

// 3. Create and export Model.
const MealModel = model<Meal>('Meal', schema);
module.exports = MealModel;