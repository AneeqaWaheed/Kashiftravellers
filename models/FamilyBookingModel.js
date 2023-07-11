import mongoose from 'mongoose';


const familyBookingSchema = new mongoose.Schema({
    
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
    members : {
        type : Number,
        required : true,
        default: null
    },
    rooms_to_book : {
        type : String,
        required : true,
        trim : true,
    },
    car_type : {
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
        trim : true,
    },
   
});

const Family_Booking = mongoose.models.Family_Booking || mongoose.model('Family_Booking', familyBookingSchema);

export default Family_Booking;