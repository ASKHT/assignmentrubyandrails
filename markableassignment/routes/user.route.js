import express from "express";
import { addPatient } from "../controller/user.controller.js";
const router=express.Router();

router.route("/").post(addPatient);

export default router;