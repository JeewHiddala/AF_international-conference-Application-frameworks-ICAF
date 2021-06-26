const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');

module.exports = function () {
    router.post('/create', AdminController.createAdmin);
    return router;
}