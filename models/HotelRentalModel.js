import mongoose from 'mongoose';


const HotalRentalPacakgeSchema = new mongoose.Schema({
   
    service_type : [{
        type : String,
        required : false,
        trim : true,
    }],
    rules : {
        type : String,
        required : false,
        trim : true,
    },
    image : {
        type : String,
        required : true, 
        trim : true,
    },
    hotel_name : {
        type : String,
        required : true,
        trim : true,
    },
    hotal_location : {
        type : String,
        required : true,
        trim : true,
    },
    hotel_type : {
        type : String,
        required : true,
        
    },
    description : {
        type : String,
        required : true,
        trim : true,
    },
    menu : {
        type : String,
        required : true,
        trim : true,
    },
    price : {
        type : Number,
        required : true,
        trim : true,
    },
    discount : {
        type : Number,
        required : false,
        trim : true,
    },
  
    newRule: {
        type: String,
        required: false,
        default: null
      },
    newService: {
        type: String,
        required: false,
        default: null
      },

});

const hotelRentalPacakage = mongoose.models.hotelRentalPacakage || mongoose.model('hotelRentalPacakage', HotalRentalPacakgeSchema);

export default hotelRentalPacakage;