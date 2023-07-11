import mongoose from 'mongoose';


const HoneyMoonBookingSchema = new mongoose.Schema({
   
    carRental_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TripPackage', // foreign key to the "users" collection
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
  
    mobile_no : {
        type : Number,
        required : true,
        trim : true,
    },
    date : {
        type : Date,
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
        trim : true,
    },
   
});

const HoneyMoon_Booking = mongoose.models.HoneyMoon_Booking || mongoose.model('HoneyMoon_Booking', HoneyMoonBookingSchema);

export default HoneyMoon_Booking;