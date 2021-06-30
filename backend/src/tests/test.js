const express = require('express');
const app = require('../../app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware
const bodyParser = require('body-parser');
const request = require('supertest');
const WorkshopProposal = require('../models/workshopProposalModel');
const Reviewer = require('../models/reviewerModel');

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

//IT19051826 Test Case1

jest.setTimeout(50000);

let id = '';

beforeAll(async () => {
    await WorkshopProposal.deleteMany(); //delete already exist categories
});

test('should delete a workshop proposal', async () => {
    await request(app).delete('/workshopProposal/:id').send({
        content: "Accessibility, Availability in Facabook",
        title: "Facebook",
        venue: "Provincial Council Auditorium Kandy",
        date:  "2020-10-05",
        organizers: "Dilan Senanayake",
        duration: "2 hour",
        type: "regular",
        status: "Pending",
        document: "/file_uploads/cloud_Computing.doc"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//IT19051826 Test Case2

jest.setTimeout(50000);

let id = '';

beforeAll(async () => {
    await WorkshopProposal.deleteMany(); //delete already exist categories
});

test('should save approved workshop proposal', async () => {
    await request(app).post('/workshopProposal/create').send({
        content: "Interoperability, Availability in Instagram",
        title: "Instagram",
        venue: "Provincial Council Auditorium Colombo",
        date:  "2020-10-05",
        organizers: "Dilan Senanayake",
        duration: "2 hour",
        type: "regular",
        status: "Pending",
        document: "/file_uploads/cloud_Computing.doc"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})


//IT19051826 TestCase 3
jest.setTimeout(50000);

let id = '';

beforeAll(async () => {
    await Reviewer.deleteMany(); //delete already exist categories
});

test('should edit reviewer user profile', async () => {
    await request(app).put('/reviewer/:id').send({
     name: "Madura Ganearachchi2",
     email: "madura@gmail.com2",
     nicNo: "546856854V222333",
     address: "21/1,new road,kandy2",
     mobileNumber: 77545425111222,
     userName: "madura134",
     password: "11223312",
     reviewerSalary: 300001333       
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})


//IT19051826 Test Case 4
jest.setTimeout(50000);

let id = '';

beforeAll(async () => {
    await Reviewer.deleteMany(); //delete already exist categories
});

test('should get all reviewer profile details', async () => {
    await request(app).get('/reviewer').send({
     name: "Madura Ganearachchi2",
     email: "madura@gmail.com2",
     nicNo: "546856854V222333",
     address: "21/1,new road,kandy2",
     mobileNumber: 77545425111222,
     userName: "madura134",
     password: "11223312",
     reviewerSalary: 300001333       
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

