const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

module.exports = function () {
    router.post('/login', loginController.login);
    // router.get('/:id', attendeeController.getAttendeeDetails);
    // router.patch('/update/:id', attendeeController.updateAttendee);

    return router;
}