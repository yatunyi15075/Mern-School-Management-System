const Student = require('../models/Student');

const studentController = {
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createStudent: async (req, res) => {
    const student = new Student({
      name: req.body.name,
      registrationNumber: req.body.registrationNumber,
      class: req.body.class
    });
    try {
      const newStudent = await student.save();
      res.status(201).json(newStudent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  // Implement more controller methods as needed
};

module.exports = studentController;
