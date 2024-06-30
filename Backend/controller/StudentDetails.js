import { connection as db } from "../config/dbConfig.js";

export const job_postingCompanies = (req, res) => {
  // const id = req.body.id;
  const query = `SELECT 
    c.id,
    c.name,
    j.job_description,
    j.package_details,
    j.roles,
    j.criteria_10th, 
    j.criteria_12th, 
    j.deg_criteria, 
    j.diploma_criteria, 
    j.eligible_branches
    j.tracker
FROM 
    companies c
JOIN 
    job_postings j ON c.id = j.companyId;`;
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results);
  });
};
