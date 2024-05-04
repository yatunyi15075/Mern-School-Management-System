const Assignment = require('../models/Assignment');

const assignmentController = {
  getAllAssignments: async (req, res) => {
    try {
      const assignments = await Assignment.find();
      res.json(assignments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createAssignment: async (req, res) => {
    const assignment = new Assignment({
      title: req.body.title,
      description: req.body.description,
      class: req.body.class,
      deadline: req.body.deadline
    });
    try {
      const newAssignment = await assignment.save();
      res.status(201).json(newAssignment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  // Implement more controller methods as needed
};

module.exports = assignmentController;
