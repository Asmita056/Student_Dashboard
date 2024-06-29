import express, { Router } from "express";
import { jobWithTracker , jobWithTrackerIds } from "../controller/WithTracker.js";

const router = express.Router();

router.get("/gettracker",jobWithTracker);
router.get("/gettrackerids",jobWithTrackerIds);

export default router;