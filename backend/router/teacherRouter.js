import express from "express";

import { createTeacher, getAllTeachers } from "../controllers/teacherController.js";

const router = express.Router();

router.post('/', createTeacher);
router.get('/getall', getAllTeachers);



export default router;
 
