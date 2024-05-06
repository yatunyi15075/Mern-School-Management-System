import { Assignment } from "../models/assignmentSchema.js";

export const createAssignment = async (req, res, next) => {
  const { title, description, grade, deadline } = req.body;
  if (!title || !description || !grade || !deadline ) {
    return next("Please Fill Full Form!", 400);
  }
  await Assignment.create({ title, description, grade, deadline  });
  res.status(200).json({
    success: true,
    message: "Assignment Created!",
  });
};

export const getAllAssignments= async (req, res, next) => {
  const assignments = await Assignment.find();
  res.status(200).json({
    success: true,
    assignments,
  });
};


