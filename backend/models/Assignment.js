const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
