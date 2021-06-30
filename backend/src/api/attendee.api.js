const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendeeController');

module.exports = function () {
    router.post('/create', attendeeController.createAttendee);    
    router.get('/', attendeeController.getAllAttendeesDetails);       
    router.get('/:id', attendeeController.getSelectedAttendeeDetails);       
    router.delete('/:id', attendeeController.deleteAttendee);           

    return router;
}