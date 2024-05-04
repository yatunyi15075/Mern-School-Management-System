const Teacher = require('../models/Teacher');

const teacherController = {
  getAllTeachers: async (req, res) => {
    try {
      const teachers = await Teacher.find();
      res.json(teachers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createTeacher: async (req, res) => {
    const teacher = new Teacher({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject
    });
    try {
      const newTeacher = await teacher.save();
      res.status(201).json(newTeacher);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  // Implement more controller methods as needed
};

module.exports = teacherController;
