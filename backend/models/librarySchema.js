import mongoose from "mongoose";
import validator from "validator";

const librarySchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    unique: true
  },
});


export const  Book = mongoose.model('Library', librarySchema);



