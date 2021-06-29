const express = require('express');
const router = express.Router();
const attendeeController = require('../controllers/attendee.controller');

module.exports = function () {
    router.post('/create', attendeeController.createAttendee);
    router.get('/:id', attendeeController.getAttendeeDetails);
    router.patch('/update/:id', attendeeController.updateAttendee);

    return router;
}