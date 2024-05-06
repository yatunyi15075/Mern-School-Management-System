import express from "express";
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementConroller.js";

const router = express.Router();

router.get('/getall', getAllAnnouncements);
router.post('/create', createAnnouncement);


export default router; 


