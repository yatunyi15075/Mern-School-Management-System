import {  Class } from "../models/classSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createClass = async (req, res, next) => {
  console.log(req.body);
  const {grade } = req.body;
  try {
    if (!grade ) {
      handleValidationError("Please Fill Form!", 400);
  }
  await Class.create({ grade });
  res.status(200).json({
    success: true,
    message: "Class Created!",
  }); 
  } catch (err) {
    next(err);
  }
};

export const getAllClasses = async (req, res, next) => {
  try {
  const classes = await Class.find();
  res.status(200).json({
    success: true,
    classes,
  });  
  } catch (err) {
    next(err);
  }
};
 
