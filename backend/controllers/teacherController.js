import { Teacher } from "../models/teacherSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

 export const createTeacher = async (req, res, next) => {
  console.log(req.body);
    const { name, email, subject } = req.body;
    try {
         if (!name || !email || !subject ) {
          handleValidationError("Please Fill Full Form!", 400);
    }
    await Teacher.create({ name, email, subject });
    res.status(200).json({
      success: true,
      message: "Teacher Created!",
    }); 
    } catch (err) {
      next(err)
    }
  };
  

  export const getAllTeachers = async (req, res, next) => {
    try {
     const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });   
    } catch (err) {
      next(err)
    }
  };
  
 
