use tpo;

SELECT 
    c.id
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
	j.tracker = 'no';
    
    
SELECT 
    c.id
FROM 
    companies c
JOIN 
    job_postings j ON c.id = j.companyId
WHERE
	j.tracker = 'yes';
    
    SELECT 
    c.id
FROM 
    companies c
JOIN 
    job_postings j ON c.id = j.companyId
WHERE
	j.tracker = 'yes';
