import express from "express";
import { getAllClasses, createClass } from "../controllers/classConroller.js";

const router = express.Router();

router.get('/getall', getAllClasses);
router.post('/classes', createClass);


export default router;


