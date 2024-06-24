import { Router } from "express";
import authController from "../controllers/authController.js";

const authRoute = Router();

authRoute.post("/signup", authController.signup);

export default authRoute;
