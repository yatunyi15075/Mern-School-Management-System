import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  className: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true
  }
});

export const Exam = mongoose.model('Exam', examSchema);

