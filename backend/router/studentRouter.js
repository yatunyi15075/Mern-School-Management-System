const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define student routes
router.get('/getall', studentController.getAllStudents);
router.post('/students', studentController.createStudent);
// Add more routes as needed

module.exports = router;
