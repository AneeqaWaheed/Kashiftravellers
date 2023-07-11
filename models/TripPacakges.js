import mongoose from 'mongoose';


const tripPackageSchema = new mongoose.Schema({
    
    title : {
        type : String,
        required : true,
        trim : true,
    },
    description : { 
        type : String,
        required : true,
        trim : true,
    },
    category : {
        type : String,
        required : true,
        trim : true,
    },
  
    car_type : {
        type : String,
        required : true,
        trim : true,
    },
    number_days : {
        type : Number,
        required : true,
        trim : true,
    },
    number_nights : {
        type : Number,
        required : true,
        default: null
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
    image : {
        type : String,
        required : true,
        trim : true,
    },
   
    tour_include : {
        type :[String],
        required : false,
        default: null
    },
 
    tour_exclude : {
        type : [String],
        required : false,
        default: null
    },
    accomadation : {
        type : [String],
        required : false,
        default: null
    },
    rules : {
        type : String,
        required : false,
        default: null
    },
    newRule: {
        type: String,
        required: false,
        default: null
      },

});

const TripPackage = mongoose.models.TripPackage || mongoose.model('TripPackage', tripPackageSchema);

export default TripPackage;