import TripPackage from "../models/TripPacakges.js";
import Joi from 'joi';
import RentalCarPacakges from "../models/RentalDetails.js";
import hotelRentalPacakage from "../models/HotelRentalModel.js";
import flatRentalPacakage from "../models/FlatRentalModel.js";
import farmhourseRentalPacakage from "../models/FarmHourRentalModel.js";
import CarRental_Booking from "../models/CarRentalBookingModel.js";
import Hotel_Booking from "../models/HotelBookingModel.js";
import Flat_Booking from "../models/FlatBookingModel.js";
import FarmHouse_Booking from "../models/FarmHouseBookinModel.js";
import Family_Booking from "../models/FamilyBookingModel.js";
import Group_Booking from "../models/GroupBookingModel.js";
import HoneyMoon_Booking from "../models/HoneyMoonBookingModel.js";
import mongoose from "mongoose";
//  Gat Dashboard Page
export const DashboardPage = async (req, res) => {
    try {
        const dataOFTrip = await TripPackage.find({});
        const dataOfFarmHourse = await farmhourseRentalPacakage.find({});
        const dataOfFlat = await flatRentalPacakage.find({});
        const dataOfHotel = await hotelRentalPacakage.find({});
        const dataOfCar = await RentalCarPacakges.find({});
        const getData = {dataOFTrip , dataOfFarmHourse , dataOfFlat , dataOfHotel , dataOfCar}
        console.log(getData)
        return res.render('admin/dashBoard', { getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}

// Gat Packages Page
export const PacakgesPage = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        return res.render('admin/packages', { getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const PackageDetails = async (req, res) => {
    try {
        const getData = await TripPackage.find({});
        const package1 = await TripPackage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/package_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
//rental record
export const records = async (req, res) => {
    try {
        const getData = await RentalCarPacakges.find({});
        
        return res.render('admin/Records', { getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const RentalPage = async (req, res) => {
    try {
        const getData = await RentalCarPacakges.find({});
        
        return res.render('admin/Rental_booking', { getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const RentalDetails = async (req, res) => {
    try {
        const getData = await RentalCarPacakges.find({});
        const package1 = await RentalCarPacakges.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/Rental_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const HotelPage = async (req, res) => {
    try {
        const getData = await hotelRentalPacakage.find({});
        return res.render('admin/Hotel_booking', { getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const HotelDetails = async (req, res) => {
    try {
        const getData = await hotelRentalPacakage.find({});
        const package1 = await hotelRentalPacakage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/Hotel_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const FlatPage = async (req, res) => {
    try {
        const getData = await flatRentalPacakage.find({});
        return res.render('admin/Flat_booking', { getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const FlatDetails = async (req, res) => {
    try {
        const getData = await flatRentalPacakage.find({});
        const package1 = await flatRentalPacakage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/Flat_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const FarmHousePage = async (req, res) => {
    try {
        const getData = await farmhourseRentalPacakage.find({});
        return res.render('admin/FarmHouse_booking', { getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const FarmHouseDetails = async (req, res) => {
    try {
        const getData = await farmhourseRentalPacakage.find({});
        const package1 = await farmhourseRentalPacakage.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/FarmHouse_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}

// get record page
export const recordPage = async (req, res) => {
    try {
        const dataOFTrip = await TripPackage.find({});
        const dataOfFarmHourse = await farmhourseRentalPacakage.find({});
        const dataOfFlat = await flatRentalPacakage.find({});
        const dataOfHotel = await hotelRentalPacakage.find({});
        const dataOfCar = await RentalCarPacakges.find({});
        const getData = {dataOFTrip , dataOfFarmHourse , dataOfFlat , dataOfHotel , dataOfCar}
        console.log(getData)
        return res.render('admin/Records', { getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}

// get review page
export const family_record_page = async (req, res) => {
    try {
        const getData = await Family_Booking.find({});
        const users = await Family_Booking.find().populate('carRental_id');
        return res.render('admin/family_booking', { users });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const family_booking_details = async (req, res) => {
    try {
        const getData = await Family_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await Family_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/family_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const group_record_page = async (req, res) => {
    try {
        const getData = await Group_Booking.find({});
        const users = await Group_Booking.find().populate('carRental_id');
        return res.render('admin/group_booking', { users,getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const group_booking_details = async (req, res) => {
    try {
        const getData = await Group_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await Group_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/group_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const honeymoon_record_page = async (req, res) => {
    try {
        const getData = await HoneyMoon_Booking.find({});
        const users = await HoneyMoon_Booking.find().populate('carRental_id');
        return res.render('admin/honeymoon_booking', { users,getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const honeymoon_booking_details = async (req, res) => {
    try {
        const getData = await HoneyMoon_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await HoneyMoon_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/honeymoon_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}

export const car_rental_record_page = async (req, res) => {
    try {
        const getData = await CarRental_Booking.find({});
        const users = await CarRental_Booking.find().populate('carRental_id');
        return res.render('admin/Reviews', { users,getData});
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}

export const car_rental_booking_details = async (req, res) => {
    try {
        const getData = await CarRental_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await CarRental_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/car_rental_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const hotel_rental_record_page = async (req, res) => {
    try {
        const getData = await Hotel_Booking.find({});
        const users = await Hotel_Booking.find().populate('carRental_id');
        return res.render('admin/hotel_records', { users,getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const hotel_booking_details = async (req, res) => {
    try {
        const getData = await Hotel_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await Hotel_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/hotel_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const flat_rental_record_page = async (req, res) => {
    try {
        const getData = await Flat_Booking.find({});
        const users = await Flat_Booking.find().populate('carRental_id');
        return res.render('admin/flat_records', { users,getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const flat_booking_details = async (req, res) => {
    try {
        const getData = await Flat_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await Flat_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/flat_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}
export const farmHouse_rental_record_page = async (req, res) => {
    try {
        const getData = await FarmHouse_Booking.find({});
        const users = await FarmHouse_Booking.find().populate('carRental_id');
        return res.render('admin/farmHouse_records', { users,getData });
    } catch (error) {
        console.log('error in getting packages data  => ', error.message)
    }
}
export const farmhouse_booking_details = async (req, res) => {
    try {
        const getData = await FarmHouse_Booking.findById(req.params.id).populate('carRental_id');
        const package1 = await FarmHouse_Booking.findById(req.params.id);
        if (!package1) {
          res.status(404).send('Package not found');
          return;
        }
        res.render('admin/farmhouse_booking_details', { package1,getData });
      } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred while retrieving the package data');
      }
   
}

// get booking page
export const bookingPage = async (req, res) => {
    res.render('admin/bookings');
}

// get new pacakges page
export const newPacakges = async (req, res) => {
    res.render('admin/form', {
        message: ""
    });
}

// get car rental details page
export const carRentalDetails = async (req, res) => {
    res.render('admin/car_rentals', {
        message: ""
    });
}

// get car rental details page
export const hotelDetails = async (req, res) => {
    res.render('admin/hotels', {
        message: ""
    });
}

// get car rental details page
export const farmHouse = async (req, res) => {
    res.render('admin/farmHouse', {
        message: ""
    });
}



// get car rental details page
export const flatDetails = async (req, res) => {
    res.render('admin/flat', {
        message: ""
    });
}


// -----------------------------------------------------------------------------------------------------------------------------------------------

// get car rental details page



const tripPackageValidationSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().trim().required(),
    car_type: Joi.string().required(),
    number_days: Joi.number().integer().required(),
    number_nights: Joi.number().integer().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
    tour_include: Joi.string(),
    tour_exclude: Joi.string(),
    accomadation: Joi.string(),
   
    
    rules: Joi.string(),

});


export const submitNewPacakge = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;
    
    
  

    const { title, description,category, image , car_type, number_days, number_nights, price, discount,  rules,newRule,tour_include, tour_exclude,accomadation } = data;
    const { error } = tripPackageValidationSchema.validate({ title,description,image,category,car_type,number_days,number_nights,price });
    console.log(data)
    console.log(error)
    // if (error) return res.render('admin/form', {
    //     success: false, message: error.details[0].message.replace(/['"]+/g, '')
    // }
    // )
    
    try {
       
        const saveData = await TripPackage.create(data);
        newRule: req.body.newRule;
       if (newRule === 'true') {
        req.body.push(newRule);
      }
      console.log("data saved");
        return res.render('admin/form', {
             
            success: true, message: "Data Saved Successfully"
        })
    } catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}

const rentalPackageValidationSchema = Joi.object({
    service_type: Joi.array().items(Joi.string()),
    rules: Joi.string().trim(),
    image: Joi.string().trim().required(),
    range_of_people: Joi.number().required(),
    car_name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    from: Joi.string().trim().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
    start_date: Joi.date(),
    end_date: Joi.date()   
});

  
export const submitCarRentPackages = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;
    console.log(data)
    const {
        service_type,
        rules,
        image,
        range_of_people,
        car_name,
        description,
        from,
        price,
        discount,
        start_date,
        end_date,
        newRule
    } = data;
    const { error } = rentalPackageValidationSchema.validate(
        {
            
          
            image,
            range_of_people,
            car_name,
            description,
            from,
            price,
           
        }
    );



    // if (error) return res.render('admin/car_rentals', {
    //     success: false, message: error.details[0].message.replace(/['"]+/g, '')
    // }
    // )

    try {
        const saveData = await RentalCarPacakges.create(data);
        newRule: req.body.newRule;
        if (newRule === 'true') {
         req.body.push(newRule);
       }
       
        return res.render('admin/car_rentals', {
            success: true, message: "Data Saved Successfully"
        })
    } catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}


const hotalRentalPacakgeValidationSchema = Joi.object({
    service_type: Joi.array().items(Joi.string()),
    rules: Joi.string(),
    image: Joi.string().required(),
    hotel_name: Joi.string().required(),
    hotal_location: Joi.string().required(),
    hotel_type: Joi.string().required(),
    description: Joi.string().required(),
    menu: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
   
});

export const submitHotelRentPackages = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;
    const {
        service_type,
        rules,
        image,
        hotel_name,
        hotal_location,
        hotel_type,
        description,
        menu,
        price,
        discount,
        newRule,
        newService
    } = data;
    const { error } = hotalRentalPacakgeValidationSchema.validate(
        {
            
            image,
            hotel_name,
            hotal_location,
            hotel_type,
            description,
            menu,
            price,
          
        }
    );



    // if (error) return res.render('admin/hotels', {
    //     success: false, message: error.details[0].message.replace(/['"]+/g, '')
    // }
    // )


    try {
        const saveData = await hotelRentalPacakage.create(data);
        newRule: req.body.newRule;
        newService: req.body.newService;
        if (newRule === 'true') {
         req.body.push(newRule);
       } 
        if (newService === 'true') {
         req.body.push(newService);
       }
        return res.render('admin/hotels', {
            success: true, message: "Data Saved Successfully"
        })
    } catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}



const FlatRentalPackageValidation = Joi.object({
    service_type: Joi.array().items(Joi.string()),
    rules: Joi.string().trim(),
    image: Joi.string().required(),
    hotel_name: Joi.string().required().trim(),
    hotal_location: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    number_of_room: Joi.number().required(),
    number_of_bathroom: Joi.number().required(),
    number_of_floors: Joi.number().required(),
    area_of_flat: Joi.string().required().trim(),
    price: Joi.number().required(),
    discount: Joi.number(),
    newService: Joi.number(),
    newRule: Joi.number(),
    
})

export const submitFlatRentPackages = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;

    console.log(data)
    const {
        service_type,
        rules,
        image,
        hotel_name,
        hotal_location,
        description,
        number_of_room,
        number_of_bathroom,
        number_of_floors,
        area_of_flat,
        price,
        discount,
        newRule,
        newService,
        
    } = data;

    const { error } = FlatRentalPackageValidation.validate(
        {
           
            image,
            hotel_name,
            hotal_location,
            description,
            number_of_room,
            number_of_bathroom,
            number_of_floors,
            area_of_flat,
            price,   
        }
    );



    // if (error) return res.render('admin/flat', {
    //     success: false, message: error.details[0].message.replace(/['"]+/g, '')
    // }
    // )

    try {
        const saveData = await flatRentalPacakage.create(data);
        newRule: req.body.newRule;
        if (newRule === 'true') {
         req.body.push(newRule);
       }
        newService: req.body.newService;
        if (newService === 'true') {
         req.body.push(newService);
       }
        return res.render('admin/flat', {
            success: true, message: "Data Saved Successfully"
        })
    } catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}




const farmRentalPackageValidationSchema = Joi.object({
    service_type: Joi.array().items(Joi.string()),
    essentials_type: Joi.array().items(Joi.string().trim().required()).required(),
    rules: Joi.string().trim(),
    image: Joi.string().trim().required(),
    multiple_images : Joi.array().items(Joi.string()),
    farm_name: Joi.string().trim().required(),
    farm_location: Joi.string().trim().required(),
    area: Joi.string().trim().required(),
    width: Joi.string().trim(),
    length: Joi.string().trim(),
    description: Joi.string().trim().required(),
    number_of_bed_rooms: Joi.number().required(),
    number_of_other_rooms: Joi.number().required(),
    number_of_kitchens: Joi.number().required(),
    price: Joi.number().required(),
    newService: Joi.number(),
    newRule: Joi.number(),
    newService: Joi.number(),
    discount: Joi.number(),
    new_essentials: Joi.number(),
});


export const submitFarmHourseRentPackages = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;

    console.log(data)
    const {
        service_type,
        essentials_type,
        rules,
        image,
        farm_name,
        farm_location,
        area,
        width,
        length,
        description,
        number_of_bed_rooms,
        number_of_kitchens,
        number_of_other_rooms,
        price,
        discount,
        multiple_images,
        new_essentials,
        newRule,
        newService,
      
      
    } = data;


    const { error } = farmRentalPackageValidationSchema.validate(
        {
            service_type,
            essentials_type,
            rules,
            image,
            farm_name,
            farm_location,
            area,
           
            description,
            number_of_bed_rooms,
            number_of_other_rooms,
            number_of_kitchens,
            price,
            multiple_images,
          
        }
    );



    if (error) return res.render('admin/farmHouse', {
        success: false, message: error.details[0].message.replace(/['"]+/g, '')
    }
    )

    try {
        const saveData = await farmhourseRentalPacakage.create(data);
        newRule: req.body.newRule;
        if (newRule === 'true') {
         req.body.push(newRule);
       }
        newService: req.body.newService;
        if (newService === 'true') {
         req.body.push(newService);
       }
       new_essentials: req.body.newService;
        if (newService === 'true') {
         req.body.push(newService);
       }
        return res.render('admin/farmHouse', {
            success: true, message: "Data Saved Successfully"
        })
    } catch (error) {
        console.log('error in saving new pacakge  => ' + error.message);
        return res.status(500).json({ success: false, message: "Error in saving data" });
    }
}


// Delete methods

export const del_packages = async (req, res) => {
    const packageId =req.params.id;
  try {
    // Retrieve the package
    const package1 = await TripPackage.findById(packageId);

    if (!package1) {
      // Package not found
      return;
    }
    
   try{
     // Retrieve the corresponding bookings
     let bookings 
    if (package1.category === 'Family') {
        bookings = await Family_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
    } else if (package1.category === 'Group') {
       bookings = await Group_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
    } else if (package1.category === 'Honymoon') {
          bookings = await HoneyMoon_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
      
      }
     
    //  console.log(bookings)
     // Delete each booking
     console.log('deleing corresponding booking')
     // console.log(bookings)
     for (const booking of bookings) {
        if (package1.category === 'Family') {
            await Family_Booking.findByIdAndRemove(booking);
            console.log(booking)
        } else if (package1.category === 'Group') {
            await Family_Booking.findByIdAndRemove(booking);
            console.log(booking)
        } else if (package1.category === 'Honymoon') {
            await Family_Booking.findByIdAndRemove(booking);
            console.log(booking)
          
        }
   
     }
 
   }
   catch(error){
    console.log(error)
   }
   
    // Delete the package
    console.log('deleting package')
    
    console.log(package1)
    await TripPackage.findByIdAndRemove(package1);
    res.redirect('/pacakges');
    // console.log('Package and corresponding bookings deleted successfully.');
  } catch (error) {
    console.error('Error deleting package:', error);
  }
}



export const del_car = async (req, res) => {
    const packageId =req.params.id;
    try {
      // Retrieve the package
      const package1 = await RentalCarPacakges.findById(packageId);
  
      if (!package1) {
        // Package not found
        return;
      }
      
     try{
       // Retrieve the corresponding bookings
      //  const getFamilyData = getData.filter((data) => data.category === 'Family')
       const bookings = await CarRental_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
      //  console.log(bookings)
       // Delete each booking
       console.log('deleing corresponding booking')
       // console.log(bookings)
       for (const booking of bookings) {
      await CarRental_Booking.findByIdAndRemove(booking);
       console.log(booking)
       }
   
     }
     catch(error){
      console.log(error)
     }
     
      // Delete the package
      console.log('deleting package')
      
      console.log(package1)
      await RentalCarPacakges.findByIdAndRemove(package1);
      res.redirect('/Rental_booking');
      // console.log('Package and corresponding bookings deleted successfully.');
    } catch (error) {
      console.error('Error deleting package:', error);
    }
    
}
export const del_hotel = async (req, res) => {
    const packageId =req.params.id;
    try {
      // Retrieve the package
      const package1 = await hotelRentalPacakage.findById(packageId);
  
      if (!package1) {
        // Package not found
        return;
      }
      
     try{
       // Retrieve the corresponding bookings
      //  const getFamilyData = getData.filter((data) => data.category === 'Family')
       const bookings = await Hotel_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
      //  console.log(bookings)
       // Delete each booking
       console.log('deleing corresponding booking')
       // console.log(bookings)
       for (const booking of bookings) {
      await Hotel_Booking.findByIdAndRemove(booking);
       console.log(booking)
       }
   
     }
     catch(error){
      console.log(error)
     }
     
      // Delete the package
      console.log('deleting package')
      
      console.log(package1)
      await hotelRentalPacakage.findByIdAndRemove(package1);
      res.redirect('/Hotel_booking');
      // console.log('Package and corresponding bookings deleted successfully.');
    } catch (error) {
      console.error('Error deleting package:', error);
    }
    
}
export const del_flat = async (req, res) => {
    const packageId =req.params.id;
    try {
      // Retrieve the package
      const package1 = await flatRentalPacakage.findById(packageId);
  
      if (!package1) {
        // Package not found
        return;
      }
      
     try{
       // Retrieve the corresponding bookings
      //  const getFamilyData = getData.filter((data) => data.category === 'Family')
       const bookings = await Flat_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
      //  console.log(bookings)
       // Delete each booking
       console.log('deleing corresponding booking')
       // console.log(bookings)
       for (const booking of bookings) {
      await Flat_Booking.findByIdAndRemove(booking);
       console.log(booking)
       }
   
     }
     catch(error){
      console.log(error)
     }
     
      // Delete the package
      console.log('deleting package')
      
      console.log(package1)
      await flatRentalPacakage.findByIdAndRemove(package1);
      res.redirect('/Flat_booking');
      // console.log('Package and corresponding bookings deleted successfully.');
    } catch (error) {
      console.error('Error deleting package:', error);
    }
    
}
export const del_farmHouse = async (req, res) => {
    const packageId =req.params.id;
    try {
      // Retrieve the package
      const package1 = await farmhourseRentalPacakage.findById(packageId);
  
      if (!package1) {
        // Package not found
        return;
      }
      
     try{
       // Retrieve the corresponding bookings
      //  const getFamilyData = getData.filter((data) => data.category === 'Family')
       const bookings = await FarmHouse_Booking.find( { carRental_id: package1._id }).populate('carRental_id');
      //  console.log(bookings)
       // Delete each booking
       console.log('deleing corresponding booking')
       // console.log(bookings)
       for (const booking of bookings) {
      await FarmHouse_Booking.findByIdAndRemove(booking);
       console.log(booking)
       }
   
     }
     catch(error){
      console.log(error)
     }
     
      // Delete the package
      console.log('deleting package')
      
      console.log(package1)
      await farmhourseRentalPacakage.findByIdAndRemove(package1);
      res.redirect('/FarmHouse_booking');
      // console.log('Package and corresponding bookings deleted successfully.');
    } catch (error) {
      console.error('Error deleting package:', error);
    }
    
}