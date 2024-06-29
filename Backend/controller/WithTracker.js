import { connection as db } from "../config/dbConfig.js";

  export const jobWithTracker = (req,res)=>{
    // const id = req.body.id;
    const query = `SELECT 
    c.id,
    c.name,
    j.job_description,
    j.package_details,
    j.roles,
    j.tracker
FROM 
    companies c
JOIN 
    job_postings j ON c.id = j.companyId
WHERE
	j.tracker = 'yes'`;
    db.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(results);
    });

}

export const jobWithTrackerIds = (req,res)=>{
    // const id = req.body.id;
    const query = `SELECT 
    c.id
FROM 
    companies c
JOIN 
    job_postings j ON c.id = j.companyId
WHERE
	j.tracker = 'yes'`;
    db.query(query,(error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(results);
    });

}

