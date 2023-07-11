import mongoose from 'mongoose';


const hotelBookingSchema = new mongoose.Schema({
   
    carRental_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotelRentalPacakage', // foreign key to the "users" collection
      },
      firstName : {
        type : String,
        required : true,
        trim : true,
    },
    lastName : { 
        type : String,
        required : true,
        trim : true,
    },
    cnic_no : {
        type : Number,
        required : true,
        trim : true,
    },
  
    mobile_No : {
        type : Number,
        required : true,
        trim : true,
    },
    date : {
        type : Date,
        required : true,
        trim : true,
    },
    days_to_book : {
        type : String,
        required : true,
        default: null
    },
    rooms_to_book : {
        type : String,
        required : true,
        trim : true,
    },
    room_type : {
        type : String,
        required : true,
        trim : true,
    },
    city : {
        type : String,
        required : true,
        trim : true,
    },
    postal_code : {
        type : Number,
        required : true,
        trim : true,
    },
    address : {
        type : String,
        required : true,
    },
   
});

const Hotel_Booking = mongoose.models.Hotel_Booking || mongoose.model('Hotel_Booking', hotelBookingSchema);

export default Hotel_Booking; 