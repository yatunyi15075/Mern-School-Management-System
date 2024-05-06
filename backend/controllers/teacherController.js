import { Teacher } from "../models/teacherSchema.js";

 export const createTeacher = async (req, res, next) => {
    const { name, email, subject } = req.body;
    if (!name || !email || !subject ) {
      return next("Please Fill Full Form!", 400);
    }
    await Teacher.create({ name, email, subject });
    res.status(200).json({
      success: true,
      message: "Teacher Created!",
    });
  };
  

  export const getAllTeachers = async (req, res, next) => {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });
  };
  
