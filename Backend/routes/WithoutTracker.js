import express, { Router } from "express";
import { jobWithoutTracker } from "../controller/WithoutTracker.js";

const router = express.Router();

router.get("/getnotracker",jobWithoutTracker);

export default router;