import mongoose from 'mongoose';


const RentalCarPacakgeSchema = new mongoose.Schema({
    
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
    range_of_people : {
        type : Number,
        required : true,
        trim : true,
    },
    car_name : {
        type : String,
        required : true,
        trim : true,
    },
    car_type : {
        type : String,
        required : true,
        trim : true,
    },
    description : {
        type : String,
        required : true,
        trim : true,
    },
    from : {
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
});

const RentalCarPacakges = mongoose.models.RentalCarPacakges || mongoose.model('RentalCarPacakges', RentalCarPacakgeSchema);

export default RentalCarPacakges; 