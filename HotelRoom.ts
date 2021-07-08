import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
enum type {
    econom = "econom",
    standard = "standard",
    business = "business"
}

interface HotelRoom {
    hotelRoomID: number;
    hotelType:type;
    roomType:type;
    peopleInRoom:number;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<HotelRoom>({
    hotelRoomID:{ type: Schema.Types.Number, ref: 'Hotel', required:true },
    hotelType: { type: type, required:true },
    roomType: { type: type, required:true },
    peopleInRoom: { type: Number, required: true }
});

// 3. Create and export Model.
const HotelRoomModel = model<HotelRoom>('HotelRoom', schema);
module.exports = HotelRoomModel;