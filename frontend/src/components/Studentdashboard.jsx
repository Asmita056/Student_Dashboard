import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "./DashboardCard";

const StudentDashboard = () => {
  const [registeredCompanies, setRegisteredCompanies] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobPostingCompanies();
  }, []);

  const fetchJobPostingCompanies = () => {
    axios
      .get("http://localhost:8081/jobs/getjobpostingcompanies")
      .then((res) => {
        setCompanies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
        setLoading(false);
      });
  };

  const handleRegister = async (company) => {
    setRegisteredCompanies([...registeredCompanies, company.name]);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col lg:mx-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Student Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4 text-left lg:ml-11 pb-4">
        Eligible Companies
      </h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company, index) => (
            <DashboardCard
              key={index}
              company={company}
              onRegister={handleRegister}
              isRegistered={registeredCompanies.includes(company.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
