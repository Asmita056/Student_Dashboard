import express, { Router } from "express";
import { job_postingCompanies } from "../controller/Job_PostingCompanies.js";

const router = express.Router();

router.get("/getjobpostingcompanies",job_postingCompanies);

export default router;