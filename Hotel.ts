import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Hotel {
    hotelRoomID: number;
    type:number;
    seasonID: number;
    price: number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Hotel>({
    hotelRoomID: { type: Number, required: true },
    type: { type: Schema.Types.Number, ref: 'Type', required:true },
    seasonID: { type: Schema.Types.Number, ref: 'Season', required:true },
    price: { type: Number, required: true }
});

// 3. Create and export Model.
const HotelModel = model<Hotel>('Hotel', schema);
module.exports = HotelModel;