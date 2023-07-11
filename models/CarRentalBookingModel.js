import mongoose from 'mongoose';


const carRentalBookingSchema = new mongoose.Schema({
   
    carRental_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RentalCarPacakges', // foreign key to the "users" collection
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
    rent_out_days : {
        type : Number,
        required : true,
        default: null
    },
    driver : {
        type : String,
        required : false,
        trim : true,
    },
    city : {
        type : String,
        required : false,
        trim : true,
    },
    postal_code : {
        type : Number,
        required : true,
        trim : true,
    },
    adress : {
        type : String,
        required : false,
    },
   
});

const CarRental_Booking = mongoose.models.CarRental_Booking || mongoose.model('CarRental_Booking', carRentalBookingSchema);

export default CarRental_Booking;