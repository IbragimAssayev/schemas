import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
enum type {
    econom = "econom",
    standard = "standard",
    business = "business"
}

interface MealPrice {
    personType:string;
    seasonType:string;
    type:number;
    mealType:type;
    price:number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<MealPrice>({
    personType: { type: Schema.Types.String, ref: 'PersonType', required:true },
    seasonType: { type: Schema.Types.String, ref: 'Season', required:true },
    type: { type: Schema.Types.String, ref: 'Type', required:true },
    mealType:{ type: type, required:true },
    price: { type:Number, required:true }
});

// 3. Create and export Model.
const MealPriceModel = model<MealPrice>('MealPrice', schema);
module.exports = MealPriceModel;