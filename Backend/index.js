import express from "express";
import cors from "cors"
import bodyParser from 'body-parser';
// import dotenv from "dotenv"
// import { connection } from "./config/dbConfig.js";

import { job_postingCompanies } from "./controller/Job_PostingCompanies.js";
import { jobWithoutTracker } from "./controller/WithoutTracker.js";
import { jobWithTracker } from "./controller/WithTracker.js";
const app =express()

const port = 8081;

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/jobs",job_postingCompanies)
app.use("/notracker",jobWithoutTracker)
app.use("/tracker",jobWithTracker)

app.listen(port, () => {
    console.log("Server is Running on PORT :", port);
  });
  