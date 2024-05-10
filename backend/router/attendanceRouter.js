import express from "express";
import { markAttendance, getAllAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post('/', markAttendance);
router.get('/getall', getAllAttendance);

export default router;
