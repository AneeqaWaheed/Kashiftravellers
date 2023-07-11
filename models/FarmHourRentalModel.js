import mongoose from 'mongoose';


const farmRentalPacakgeSchema = new mongoose.Schema({
    
    service_type : [{
        type : String,
        required : false,
        trim : true,
    }],
    essentials_type : [{
        type : String,
        required : true,
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
    farm_name : {
        type : String,
        required : true,
        trim : true,
    },
    farm_location : {
        type : String,
        required : true,
        trim : true,
    },
    area : {
        type : Number,
        required : true,
        trim : true,
    },
    width : {
        type : Number,
        required : false,
        trim : true,
    },
    length : {
        type : Number,
        required : false,
        trim : true,
    },
    description : {
        type : String,
        required : true,
        trim : true,
    },
    number_of_bed_rooms : {
        type : Number,
        required : true,
        trim : true,
    },
    number_of_other_rooms : {
        type : Number,
        required : true,
        trim : true,
    },
    number_of_kitchens: {
        type : Number,
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

    

});

const farmhourseRentalPacakage = mongoose.models.farmhourseRentalPacakage || mongoose.model('farmhourseRentalPacakage', farmRentalPacakgeSchema);

export default farmhourseRentalPacakage;