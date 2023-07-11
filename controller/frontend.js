import TripPackage from "../models/TripPacakges.js";
import RentalCarPacakges from "../models/RentalDetails.js";
import hotelRentalPacakage from "../models/HotelRentalModel.js";
import flatRentalPacakage from "../models/FlatRentalModel.js";
import farmhourseRentalPacakage from "../models/FarmHourRentalModel.js";
import User from "../models/User.js";
import CarRental_Booking from "../models/CarRentalBookingModel.js";
import Hotel_Booking from "../models/HotelBookingModel.js";
import Flat_Booking from "../models/FlatBookingModel.js";
import FarmHouse_Booking from "../models/FarmHouseBookinModel.js";
import Family_Booking from "../models/FamilyBookingModel.js";
import Group_Booking from "../models/GroupBookingModel.js";
import HoneyMoon_Booking from "../models/HoneyMoonBookingModel.js";
import mongoose from "mongoose";
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

//  Gat Dashboard Page
export const homePage = async (req, res) => {

    try{
        res.render('frontend/index');

    }
    catch(error){
        console.log(error.message);
    }
   
}

// Family Pacakages
export const FamilyPackages = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        const getFamilyData = getData.filter((data) => data.category === 'Family')
        return res.render('frontend/FamilyPackages', { getFamilyData});

    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
    
}

export const FamilyPackageView = async (req, res) => {
    
    try {
        const getData = await TripPackage.find({});
        const package1 = await TripPackage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/F_P_View', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
  }

export const FamilyPackageBooking = async (req, res) => {
    const package1 = await TripPackage.findById(req.params.id);
    res.render('frontend/F_B_F',{
        message: '',
        package1
    });
 
    
}

// Group Pacakages
export const GroupPackages = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        const getGroupData = getData.filter((data) => data.category === 'Group')
        return res.render('frontend/GroupPacakegs', { getGroupData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const GroupPackageView = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        const package1 = await TripPackage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/G_P_View', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
    
}
export const GroupPackageBooking = async (req, res) => {
    try {
    const package1 = await TripPackage.findById(req.params.id);
    res.render('frontend/G_B_F',{
        message: '',
        package1
    });
  }
  catch(error){
    console.error(error.message);
  }
   
   
}

// Honeymoon Pacakages
export const Honeymoon = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        const getHoneyMoonData = getData.filter((data) => data.category === 'Honymoon')
        return res.render('frontend/Honeymoon', { getHoneyMoonData });
    } catch (error) { 
        console.log('error in getting packages data  => ', error.message)
    }
}
export const HoneymoonPackageView = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        const package1 = await TripPackage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/HM_P_View', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
    
}
export const HoneymoonPackageBooking = async (req, res) => {
    const package1 = await TripPackage.findById(req.params.id);
    res.render('frontend/HM_B_F',{
        message: '',
        package1
    });
   
}

// Car Rental
export const CarRental = async (req, res) => {

    try {
        const getData = await RentalCarPacakges.find({});
        return res.render('frontend/CarRental', { getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}


export const CarRentalView = async (req, res) => {
    try {
        const getData = await RentalCarPacakges.find({});
        const package1 = await RentalCarPacakges.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/CR_View', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const CarRentalBooking = async (req, res) => {
    const package1 = await RentalCarPacakges.findById(req.params.id);
    res.render('frontend/C_R_Form',{
        message: '',
        package1
    });
 
}

// Hotel Booking
export const Hotel = async (req, res) => {

    try {
        const getData = await hotelRentalPacakage.find({});
        return res.render('frontend/Hotels', { getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const HotelView = async (req, res) => {
    try {
        const getData = await hotelRentalPacakage.find({});
        const package1 = await hotelRentalPacakage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/Hotel_View', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
}
export const HotelBooking = async (req, res) => {
    const package1 = await hotelRentalPacakage.findById(req.params.id);
    res.render('frontend/H_B_Form',{
        message: '',
        package1
    });
}


// Flats Booking
export const Flats = async (req, res) => {
    try {
        const getData = await flatRentalPacakage.find({});
        return res.render('frontend/Flats', { getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const FlatsView = async (req, res) => {
    try {
        const getData = await flatRentalPacakage.find({});
        const package1 = await flatRentalPacakage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/FlatsView', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
}
export const FlatsBooking = async (req, res) => {
    const package1 = await flatRentalPacakage.findById(req.params.id);
    res.render('frontend/Flats_B_F',{
        message: '',
        package1
    });
   
}

// Flats Booking
export const FarmHouse = async (req, res) => {
    try {
        const getData = await farmhourseRentalPacakage.find({});
        return res.render('frontend/FarmHouse', { getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const FarmHouseView = async (req, res) => {
    try {
        const getData = await farmhourseRentalPacakage.find({});
        const package1 = await farmhourseRentalPacakage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('frontend/FarmHouseV', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
    
}
export const FarmHouseBooking = async (req, res) => {
    const package1 = await farmhourseRentalPacakage.findById(req.params.id);
    res.render('frontend/FarmHouse_B_F',{
        message: '',
        package1
    });
}

// Contact Us
export const ContactUs = async (req, res) => {
    res.render('frontend/ContactUs');
}

// Login and registration
export const Login = async (req, res) => {
    res.render('frontend/Login', { message: '' });
}

export const Registration = async (req, res) => {
    res.render('frontend/Reg', {
        message: ''
    });
}




const loginValidationSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required().email(),
});

export const LoggedIn = async (req, res) => {
    const data = req.body;
    const { email, password } = data;
    const { error } = loginValidationSchema.validate({ email, password });
    if (error) return res.render('frontend/Login', {
        success: false, message: error.details[0].message.replace(/['"]+/g, '')
    }
    )
    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) return res.render('frontend/Login', {
            success: false, message: "Account not found"
        }
        )

        const isMatch = await bcrypt.compare(password, checkUser.password);
        if (!isMatch) return res.render('frontend/Login', {
            success: false, message: "Incorrect password "
        }
        )
        

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email }, process.env.JWT_SECREAT, { expiresIn: '1d' });
        const finalData = { token, user: checkUser }


        if (checkUser.role === "Admin") return res.redirect( '/')
        else
            return res.redirect(  '/home')

    } catch (error) {
        console.log('Error in register (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }



}



const registerValidationSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    email: Joi.string().required().email(),
});


export const Registered = async (req, res) => {
    const data = req.body;
    const { firstname, lastname, email, password, confirmPassword } = data;
    const { error } = registerValidationSchema.validate({ firstname, lastname, email, password, confirmPassword });



    if (error) return res.render('frontend/Reg', {
        success: false, message: error.details[0].message.replace(/['"]+/g, '')
    }
    )

    try {
        const ifExist = await User.findOne({ email });

        if (ifExist) return res.render('frontend/Reg', {
            success: false, message: "Email Already exists"
        }
        )

        if (password !== confirmPassword) return res.render('frontend/Reg', {
            success: false, message: "Password and confirm Password Doesn't match"
        }
        )

        else {
            const hashedPassword = await bcrypt.hash(password, 12)
            const createUser = await User.create({ email, firstname, lastname, confirmPassword, password: hashedPassword });
            return res.render('frontend/Login', {
                success: false, message: "Account Created Successfully Please login"
            }
            )

        }
    } catch (error) {
        console.log('Error in register (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }

}





const carRentalBookingValidationSchema = Joi.object({
    carRental_id:Joi.string().trim().required(),
    firstName: Joi.string().trim(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_no: Joi.number().required(),
    date: Joi.date().required(),
    rent_out_days: Joi.number().required(),
    driver: Joi.string().trim(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    adress: Joi.string().trim().required(),
      
});

export const car_Booking = async (req, res) => {
   
    const data = req.body;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_no, date, rent_out_days, driver, city, postal_code, adress
    } = data;
    const { error } = carRentalBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_no,
            date,
            rent_out_days,
            city,
            postal_code,
            adress,
        }
        );
        try {
            
            const carRentalId = req.body.carRental_id;
            const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
            const packageDoc = await RentalCarPacakges.find({});
            const package1 = { _id: packageDoc._id };
            const saveData = await CarRental_Booking.create(data);
            // const savedBooking = await saveData.save();
        //     if(carRentalId === package1._id ){
        //         saveData(req.body);
        
        // }
        
        return res.render('frontend/C_R_Form', {
            success: true, message: "Data Saved Successfully",
            package1
            
        });
        
    } catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}
const hotelBookingValidationSchema = Joi.object({
   
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_No: Joi.number().required(),
    date: Joi.date().required(),
    days_to_book: Joi.string().trim().required(),
    rooms_to_book: Joi.string().trim().required(),
    room_type: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    address: Joi.string().trim().required(),
      
});

export const hotel_Booking = async (req, res) => {

    const data = req.body;
    // const carRentalId = req.params.id;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_No, date, days_to_book, rooms_to_book,room_type, city, postal_code, address
    } = data;
    const { error } = hotelBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_No,
            date,
            days_to_book,
            rooms_to_book,
            room_type,
            city,
            postal_code,
            address,
        }
    );

    try {
            
        const carRentalId = req.body.carRental_id;
        const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
        const packageDoc = await hotelRentalPacakage.find({});
        const package1 = { _id: packageDoc._id };
        const saveData = await Hotel_Booking.create(data);

    return res.render('frontend/H_B_Form', {
        success: true, message: "Data Saved Successfully",
        package1
        
    });
    
}
   catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}
const flatBookingValidationSchema = Joi.object({
   
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_no: Joi.number().required(),
    date: Joi.date().required(),
    days_to_book: Joi.string().required(),
    rooms_to_book: Joi.string().required(),
    room_type: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    address: Joi.string().trim().required(),
      
});

export const flat_Booking = async (req, res) => {

    const data = req.body;
    // const carRentalId = req.params.id;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_no, date, days_to_book, rooms_to_book,room_type, city, postal_code, address
    } = data;
    const { error } = flatBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_no,
            date,
            days_to_book,
            rooms_to_book,
            room_type,
            city,
            postal_code,
            address,
        }
    );
    try {
            
        const carRentalId = req.body.carRental_id;
        const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
        const packageDoc = await flatRentalPacakage.find({});
        const package1 = { _id: packageDoc._id };
        const saveData = await Flat_Booking.create(data);
        // const savedBooking = await saveData.save();
    //     if(carRentalId === package1._id ){
    //         saveData(req.body);
    
    // }
    
    return res.render('frontend/Flats_B_F', {
        success: true, message: "Data Saved Successfully",
        package1
        
    });
    
} 
   catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}
const farmHouseBookingValidationSchema = Joi.object({
   
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_no: Joi.number().required(),
    date: Joi.date().required(),
    days_to_book: Joi.string().required(),
    rooms_to_book: Joi.string().required(),
    room_type: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    address: Joi.string().trim().required(),
      
});

export const farmHouse_Booking = async (req, res) => {

    const data = req.body;
    // const carRentalId = req.params.id;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_no, date, days_to_book, rooms_to_book,room_type, city, postal_code, address
    } = data;
    const { error } = farmHouseBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_no,
            date,
            days_to_book,
            rooms_to_book,
            room_type,
            city,
            postal_code,
            address,
        }
    );
    try {
            
        const carRentalId = req.body.carRental_id;
        const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
        const packageDoc = await farmhourseRentalPacakage.find({});
        const package1 = { _id: packageDoc._id };
        const saveData = await FarmHouse_Booking.create(data);
    return res.render('frontend/FarmHouse_B_F', {
        success: true, message: "Data Saved Successfully",
        package1
        
    });
    
}
   catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}
const familyBookingValidationSchema = Joi.object({
   
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_no: Joi.number().required(),
    date: Joi.date().required(),
    members: Joi.number().required(),
    rooms_to_book: Joi.string().required(),
    car_type: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    address: Joi.string().trim().required(),
      
});

export const family_Booking = async (req, res) => {

    const data = req.body;
    // const carRentalId = req.params.id;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_no, date, members, rooms_to_book,car_type, city, postal_code, address
    } = data;
    const { error } = familyBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_no,
            date,
            members,
            rooms_to_book,
            car_type,
            city,
            postal_code,
            address,
        }
    );
    try {
        
        const carRentalId = req.body.carRental_id;
        const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
        const getData = await TripPackage.find({});
        const packageDoc = getData.filter((data) => data.category === 'Family');
        const package1 = { _id: packageDoc._id };
        const saveData = await Family_Booking.create(data);
    return res.render('frontend/F_B_F', {
        success: true, message: "Data Saved Successfully",
        package1
        
    });
    
}
   catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}
const groupBookingValidationSchema = Joi.object({
   
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_no: Joi.number().required(),
    date: Joi.date().required(),
    members: Joi.number().required(),
    rooms_to_book: Joi.string().required(),
    car_type: Joi.string().trim().required(),
    vehical: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    address: Joi.string().trim().required(),
      
});

export const group_Booking = async (req, res) => {

    const data = req.body;
    // const carRentalId = req.params.id;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_no, date, members, rooms_to_book,car_type,vehical, city, postal_code, address
    } = data;
    const { error } = groupBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_no,
            date,
            members,
            rooms_to_book,
            car_type,
            vehical,
            city,
            postal_code,
            address,
        }
    );
    try {
        
        const carRentalId = req.body.carRental_id;
        const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
        const getData = await TripPackage.find({});
        const packageDoc = getData.filter((data) => data.category === 'Group');
        const package1 = { _id: packageDoc._id };
        const saveData = await Group_Booking.create(data);
    return res.render('frontend/G_B_F', {
        success: true, message: "Data Saved Successfully",
        package1
        
    });
    
} catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}
const honeyMoonBookingValidationSchema = Joi.object({
   
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    cnic_no: Joi.number().required(),
    mobile_no: Joi.number().required(),
    date: Joi.date().required(),
    city: Joi.string().trim().required(),
    postal_code: Joi.number().required(),
    address: Joi.string().trim().required(),
      
});

export const honeymoon_Booking = async (req, res) => {

    const data = req.body;
    // const carRentalId = req.params.id;
    console.log(data);
    const {
        carRental_id,firstName, lastName, cnic_no, mobile_no, date, city, postal_code, address
    } = data;
    const { error } = honeyMoonBookingValidationSchema.validate(
        {
            firstName,
            lastName,
            cnic_no,
            mobile_no,
            date,
            city,
            postal_code,
            address,
        }
    );
    try {
        
        const carRentalId = req.body.carRental_id;
        const packageObjectId = new mongoose.Types.ObjectId(carRentalId);
        const getData = await TripPackage.find({});
        const packageDoc = getData.filter((data) => data.category === 'Honymoon');
        const package1 = { _id: packageDoc._id };
        const saveData = await HoneyMoon_Booking.create(data);
    return res.render('frontend/HM_B_F', {
        success: true, message: "Data Saved Successfully",
        package1
        
    });
    
}catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}