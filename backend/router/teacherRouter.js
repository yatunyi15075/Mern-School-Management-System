const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// Define teacher routes
router.get('/getall', teacherController.getAllTeachers);
router.post('/teachers', teacherController.createTeacher);
// Add more routes as needed

module.exports = router;
