const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

// Define assignment routes
router.get('/getall', assignmentController.getAllAssignments);
router.post('/assignments', assignmentController.createAssignment);
// Add more routes as needed

module.exports = router;
