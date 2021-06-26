const express = require('express');
const router = express.Router();
const editorController = require('../controllers/editor.controller');

module.exports = function () {
    router.post('/create', editorController.createEditor);        // create editor.
    return router;
}