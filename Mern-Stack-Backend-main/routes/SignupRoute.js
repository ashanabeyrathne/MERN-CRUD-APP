import express from "express";
import { saveLogUser } from "../controllers/SignupController.js";

const router = express.Router();

router.post('/signupusers', saveLogUser);

export default router;