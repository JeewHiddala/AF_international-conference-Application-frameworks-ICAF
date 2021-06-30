const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware

var bodyParser = require('body-parser');   
var fs = require('fs');
var path = require('path');
require('dotenv/config');

//import APIs
const attendeeAPI = require('./src/apis/attendee.api');
const presenterAPI = require('./src/apis/presenter.api');
const loginAPI = require('./src/apis/login.api');

dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
app.set("view engine", "ejs");

//port no for run backend server
const PORT = process.env.PORT || 8066;
const MONGODB_URI = process.env.MONGODB_URI;

//connect to database
mongoose.connect(MONGODB_URI, {
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
  console.log('Database Synced');
});

//root route
app.route('/').get((req, res) => {
  res.send('TEAM VOLCANO API BY SE2021 BATCH');
});

//register router
app.use('/attendee', attendeeAPI());
app.use('/presenter', presenterAPI());
app.use('/login', loginAPI());

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});