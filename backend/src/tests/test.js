const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware
const bodyParser = require('body-parser');
const request = require('supertest');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//import APIs
const attendeeAPI = require('./src/apis/attendee.api');
const presenterAPI = require('./src/apis/presenter.api');
const loginAPI = require('./src/apis/login.api');
const attendeePaymentAPI = require('./src/apis/attendeePayment.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
jest.setTimeout(18000);

//port no for run backend server
const PORT = process.env.TESTPORT || 8067;
const MONGODB_URI = process.env.TESTMONGODB_URI;

//connect to database
mongoose.connect(MONGODB_URI || '&w=majority', {
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

//register router - CHANGEABLE
app.use('/attendee', attendeeAPI());
app.use('/presenter', presenterAPI());
app.use('/login', loginAPI());
app.use('/attendee/pay', attendeePaymentAPI());

//test case 1
test('Should register a new attendee', async () => {
    await request(app).post('/attendee/create').send({
        name: "Tom Wen",
        email: "tom@gmail.com",
        mobileNo: "0778596456",
        username: "tom",
        password: "147",
        workplace: "X Company",
        jobRole: "CEO",
        type: "virtual",
        country: "India",
        emergencyContactNo: "0778545999",
        emergencyContactName: "Tim Wen"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//test case 2
test('Should register a new presenter', async () => {
    await request(app).post('/presenter/create').send({
        name: "Jim Wen",
        email: "jim@gmail.com",
        mobileNo: "0778596456",
        username: "jim",
        password: "177",
        workplace: "X Company",
        presenterType: "Researcher",
        sessionType: "Virtual",
        jobRole: "Manager",
        researchArea: "IT",
        country: "India"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//test case 3
test('Should validate login', async () => {
    await request(app).post('/login').send({
        username: "tom",
        password: "147"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})

//test case 4
test('Should update attendee', async () => {
    await request(app).patch('/attendee/update/:id').send({
        name: "Tom Yuan",
        email: "tom@gmail.com",
        mobileNo: "0778596456",
        username: "tom",
        password: "147",
        workplace: "X Company",
        jobRole: "CEO",
        type: "virtual",
        country: "India",
        emergencyContactNo: "0778545999",
        emergencyContactName: "Tim Yuan"
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})