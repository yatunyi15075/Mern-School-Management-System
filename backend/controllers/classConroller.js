import {  Class } from "../models/classSchema.js";

export const createClass = async (req, res, next) => {
  const {grade } = req.body;
  if (!grade ) {
    return next("Please Fill Form!", 400);
  }
  await Class.create({ grade });
  res.status(200).json({
    success: true,
    message: "Class Created!",
  });
};

export const getAllClasses = async (req, res, next) => {
  const classes = await Class.find();
  res.status(200).json({
    success: true,
    classes,
  });
};



