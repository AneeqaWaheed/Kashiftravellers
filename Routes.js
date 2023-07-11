import express from 'express'
import { CarRental, CarRentalBooking, CarRentalView, FamilyPackageBooking, FamilyPackages, FamilyPackageView, 
     GroupPackageBooking, GroupPackages, GroupPackageView, homePage , Honeymoon , HoneymoonPackageBooking,
      HoneymoonPackageView, Hotel ,HotelBooking , HotelView , FarmHouse , FarmHouseBooking ,FarmHouseView ,Flats
     , FlatsBooking , FlatsView , ContactUs , Login , Registration, LoggedIn, Registered,car_Booking,hotel_Booking,flat_Booking,farmHouse_Booking,family_Booking,group_Booking,honeymoon_Booking } from './controller/frontend.js';
const router = express.Router();
import {DashboardPage , PacakgesPage , records  , bookingPage
     , RentalPage , HotelPage , FlatPage , FarmHousePage , RentalDetails, HotelDetails, FlatDetails, FarmHouseDetails,  newPacakges , carRentalDetails , farmHouse , flatDetails , hotelDetails , submitNewPacakge,car_rental_record_page,hotel_rental_record_page,flat_rental_record_page,farmHouse_rental_record_page,family_record_page,group_record_page,honeymoon_record_page, del_packages,del_car,del_hotel,del_flat,del_farmHouse,
     car_rental_booking_details,hotel_booking_details,flat_booking_details,farmhouse_booking_details,family_booking_details,group_booking_details,honeymoon_booking_details,PackageDetails} from './controller/index.js';
    
   
//  admin Dasdhboard
router.get('/', DashboardPage);
router.get('/pacakges', PacakgesPage);
router.get('/record', records);
router.get('/review', car_rental_record_page);
router.get('/booking', bookingPage);

//delete routes
router.get('/delete/:id', del_packages);
router.get('/delete_car/:id', del_car);
router.get('/delete_hotel/:id', del_hotel);
router.get('/delete_flat/:id', del_flat);
router.get('/delete_farmHouse/:id', del_farmHouse);


//booking records
router.get('/Rental_booking',RentalPage);
router.get('/Hotel_booking',HotelPage);
router.get('/Flat_booking',FlatPage);
router.get('/FarmHouse_booking',FarmHousePage);

//details pages
router.get('/package_details/:id',PackageDetails);
router.get('/Rental_Details/:id',RentalDetails);
router.get('/Hotel_details/:id',HotelDetails);
router.get('/Flat_details/:id',FlatDetails);
router.get('/FarmHouse_Details/:id',FarmHouseDetails);

// sub routes
router.get('/add-new-pacakge', newPacakges);
router.get('/add-car-rental-details', carRentalDetails);
router.get('/add-hotel-details', hotelDetails);
router.get('/add-farm-house-details',farmHouse );
router.get('/add-flat-house-details',flatDetails );

// Api's routes submitting forms
//users
router.get('/family-record-page',family_record_page);
router.get('/group-record-page',group_record_page);
router.get('/honeymoon-record-page',honeymoon_record_page);
router.get('/car-rental-record-page',car_rental_record_page);
router.get('/hotel-rental-record-page',hotel_rental_record_page);
router.get('/flat-rental-record-page',flat_rental_record_page);
router.get('/farmHouse-rental-record-page',farmHouse_rental_record_page);
//booking details pages
router.get('/family_booking_details/:id',family_booking_details);
router.get('/group_booking_details/:id',group_booking_details);
router.get('/honeymoon_booking_details/:id',honeymoon_booking_details);
router.get('/car_rental_booking_details/:id',car_rental_booking_details);
router.get('/hotel_booking_details/:id',hotel_booking_details);
router.get('/flat_booking_details/:id',flat_booking_details);
router.get('/farmhouse_booking_details/:id',farmhouse_booking_details);


// frontend
//Pacakages
router.get('/home',homePage );
router.get('/FamilyPackages',FamilyPackages);
router.get('/F_P_View/:id',FamilyPackageView );
router.get('/F_B_F/:id',FamilyPackageBooking ); 
router.post('/submit-a-new-family-booking-form',family_Booking ); 

router.get('/GroupPacakegs',GroupPackages );
router.get('/G_P_View/:id',GroupPackageView );
router.get('/G_B_F/:id',GroupPackageBooking );
router.post('/submit-a-new-group-booking-form',group_Booking ); 


router.get('/Honeymoon',Honeymoon );
router.get('/HM_P_View/:id',HoneymoonPackageView );
router.get('/HM_B_F/:id',HoneymoonPackageBooking );
router.post('/submit-a-new-honeymoon-booking-form',honeymoon_Booking ); 


//Booking
router.get('/CarRental',CarRental );
router.get('/CR_View/:id',CarRentalView );
router.get('/C_R_Form/:id',CarRentalBooking );
router.post('/submit-a-new-car-rental-booking-form',car_Booking);


router.get('/Hotels',Hotel);
router.get('/Hotel_View/:id',HotelView );
router.get('/hotel-booking-form/:id',HotelBooking );
router.post('/submit-a-new-hotel-booking-form',hotel_Booking);

router.get('/Flats',Flats);
router.get('/FlatsView/:id',FlatsView );
router.get('/Flats_B_F/:id',FlatsBooking );
router.post('/submit-a-new-flat-booking-form',flat_Booking)

router.get('/FarmHouse',FarmHouse);
router.get('/FarmHouseV/:id',FarmHouseView );
router.get('/FarmHouse_B_F/:id',FarmHouseBooking );
router.post('/submit-a-new-farm-house-booking-form',farmHouse_Booking)

//Contact Us 
router.get('/ContactUs',ContactUs );

//Login and registration
router.get('/Login',Login );
router.get('/Reg',Registration);


router.post('/Log-me-in',LoggedIn );
router.post('/Register-me',Registered);




export default router;
