import express from "express";
import { saveLogUser } from "../controllers/SignupController.js";

const signuprouter = express.Router();

signuprouter.post('/signupusers', saveLogUser);

export default signuprouter;