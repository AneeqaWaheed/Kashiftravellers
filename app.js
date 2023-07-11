import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { trim_all } from 'request_trimmer'
import router from './Routes.js'
import env from 'dotenv'
import multer from 'multer'
import path from 'path';
import { submitCarRentPackages, submitFarmHourseRentPackages, submitFlatRentPackages, submitHotelRentPackages, submitNewPacakge } from './controller/index.js'
env.config()




const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(trim_all);




const connectionUrl = process.env.DB_URI;
mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log("Getting Error from DB connection" + err.message))
mongoose.set('strictQuery', false);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(trim_all);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/Upload")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});



const upload = multer({ storage: storage });

app.use('/', router)


router.post('/submit-a-new-pacakge',upload.single('image') , submitNewPacakge);
router.post('/submit-a-new-car-for-rent',upload.single('image') , submitCarRentPackages);
router.post('/submit-a-new-hotel-date',upload.single('image') , submitHotelRentPackages);
router.post('/submit-a-new-flat-date',upload.single('image') , submitFlatRentPackages);
router.post('/submit-a-new-farm-date',upload.single('image') , submitFarmHourseRentPackages);


app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`);
})