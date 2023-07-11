import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    role : {
        type : String, 
        default : "User"
    }
},{timestamps: true});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;