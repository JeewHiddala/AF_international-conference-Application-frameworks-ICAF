const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware
const bodyParser = require('body-parser');
const request = require('supertest');

//import APIs
const adminAPI = require('../apis/admin.api');


const reviewerAPI = require('../apis/reviewer.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
jest.setTimeout(18000);

//port no for run backend server
const PORT = process.env.TESTPORT || 8067;
const MONGODB_URI = process.env.TESTMONGODB_URI;

//connect to database
mongoose.connect(MONGODB_URI || '&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

//open connection
mongoose.connection.once('open', () => {
    console.log('Test Database Synced');
});

//root route
app.route('/').get((req, res) => {
    res.send('SLIIT AF FINAL TEST');
});

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});

//register router - testcase 1
app.use('/admin', adminAPI());

//test case 1- Hiddalarachchi J. - IT19007502
test('should insert a new administrator', async () => {
    await request(app).post('/admin/create').send({
        name:"Kamal22 Hettiwaththa",
        email:"Kamal22@gmail.com",
        nicNo:"965887475V",
        address:"59,new road,Ampara",
        mobileNumber:87878,
        userName:"kamal22",
        password:"33333",
        salary:25000,
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//register router - testcase 2
app.use('/reviewer', reviewerAPI());

//test case 2- Hiddalarachchi J. - IT19007502
test('should insert a new administrator', async () => {
    await request(app).post('/reviewer/create').send({
        name:"Kamal22 Hettiwaththa",
        email:"Kamal22@gmail.com",
        nicNo:"965887475V",
        address:"59,new road,Ampara",
        mobileNumber:87878,
        userName:"kamal22",
        password:"33333",
        reviewerSalary:25000,
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})