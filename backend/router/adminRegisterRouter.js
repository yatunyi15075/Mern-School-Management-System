import express from "express";
import { adminSignIn } from "../controllers/usersController.js";
import { adminRegister } from "../controllers/adminRegisterController.js";

const router = express.Router();


router.post('/signin', adminSignIn);
router.post('/admin', adminRegister);

export default router;

