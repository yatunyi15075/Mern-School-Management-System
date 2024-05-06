import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  grade: {
    type: String,
    required: true
  },
});


export const Student = mongoose.model('Student', studentSchema);



