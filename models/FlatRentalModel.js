import mongoose from 'mongoose';


const FlatRentalPacakgeSchema = new mongoose.Schema({
   
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
        default : 'car',
        trim : true,
    },
    hotel_type : {
        type : String,
        required : true,
        default : 'single',
    },
    description : {
        type : String,
        required : true,
        trim : true,
    },
    number_of_room : {
        type : Number,
        required : true,
        trim : true,
    },
    number_of_bathroom: {
        type : Number,
        required : true,
        trim : true,
    },
    number_of_floors: {
        type : Number,
        required : true,
        trim : true,
    },
    area_of_flat: {
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

const flatRentalPacakage = mongoose.models.flatRentalPacakage || mongoose.model('flatRentalPacakage', FlatRentalPacakgeSchema);

export default flatRentalPacakage;