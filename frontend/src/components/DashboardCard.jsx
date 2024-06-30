import React, { useState } from "react";
import CustomModal from "./CustomModal"; // Assuming CustomModal component path

const DashboardCard = ({ company, onRegister, isRegistered }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const formatSalary = (salary) => {
    return `${salary} LPA`; // Format salary with "LPA" appended
  };

  const renderDescription = () => {
    if (!company) {
      return <div>Loading...</div>; // Handle loading state
    }

    const jobDescription = company.job_description;
    const maxLength = 100; // Maximum characters to show before truncating

    return (
      <div onClick={toggleDescription} className="cursor-pointer">
        <p className="text-gray-700">
          {expanded || jobDescription.length <= maxLength
            ? jobDescription
            : `${jobDescription.slice(0, maxLength)}... `}
          {!expanded && jobDescription.length > maxLength && (
            <span className="text-blue-500 hover:underline">...Read More</span>
          )}
        </p>
        {expanded && (
          <>
            <p className="text-gray-700">
              <strong>10th Criteria:</strong> {company.criteria_10th}
            </p>
            <p className="text-gray-700">
              <strong>12th Criteria:</strong> {company.criteria_12th}
            </p>
            <p className="text-gray-700">
              <strong>Degree Criteria:</strong> {company.deg_criteria}
            </p>
            <p className="text-gray-700">
              <strong>Diploma Criteria:</strong> {company.diploma_criteria}
            </p>
            <p className="text-gray-700">
              <strong>Eligible Branches:</strong> {company.eligible_branches}
            </p>
          </>
        )}
      </div>
    );
  };

  const openFullDetails = () => {
    if (!company) {
      return; // Handle case where company is undefined
    }

    CustomModal.open({
      title: company.name,
      content: (
        <>
          <p className="text-gray-700">{company.job_description}</p>
          <p className="text-gray-700">
            <strong>Role:</strong> {company.roles}
          </p>
          <p className="text-gray-700">
            <strong>CTC: </strong> {formatSalary(company.package_details)}
          </p>
          <p className="text-gray-700">
            <strong>10th Criteria: </strong> {company.criteria_10th}
          </p>
          <p className="text-gray-700">
            <strong>12th Criteria: </strong> {company.criteria_12th}
          </p>
          <p className="text-gray-700">
            <strong>Degree Criteria: </strong> {company.deg_criteria}
          </p>
          <p className="text-gray-700">
            <strong>Diploma Criteria: </strong> {company.diploma_criteria}
          </p>
          <p className="text-gray-700">
            <strong>Eligible Branches: </strong> {company.eligible_branches}
          </p>
        </>
      ),
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3
        className="text-xl font-semibold cursor-pointer"
        onClick={openFullDetails}
      >
        {company ? company.name : "Loading..."}
      </h3>
      {renderDescription()}
      <p className="text-gray-700">
        <strong>CTC:</strong>{" "}
        {company ? formatSalary(company.package_details) : "Loading..."}
      </p>
      <p className="text-gray-700">
        <strong>Role:</strong> {company ? company.roles : "Loading..."}
      </p>

      <button
        onClick={() => onRegister(company)}
        className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${
          isRegistered ? "bg-gray-500 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        disabled={isRegistered}
      >
        {isRegistered ? "Registered" : "Register"}
      </button>
    </div>
  );
};

export default DashboardCard;

// import React, { useState } from "react";
// import CustomModal from "./CustomModal"; // Assuming CustomModal component path

// const DashboardCard = ({ company, onRegister, isRegistered }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleDescription = () => {
//     setExpanded(!expanded);
//   };

//   const formatSalary = (salary) => {
//     return `${salary} LPA`; // Format salary with "LPA" appended
//   };

//   const renderDescription = () => {
//     if (!company) {
//       return <div>Loading...</div>; // Handle loading state
//     }

//     const jobDescription = company.job_description;
//     const maxLength = 100; // Maximum characters to show before truncating

//     return (
//       <div onClick={toggleDescription} className="cursor-pointer">
//         <p className="text-gray-700">
//           {expanded || jobDescription.length <= maxLength
//             ? jobDescription
//             : `${jobDescription.slice(0, maxLength)}... `}
//           {!expanded && jobDescription.length > maxLength && (
//             <span className="text-blue-500 hover:underline">...Read More</span>
//           )}
//         </p>
//         {expanded && (
//           <>
//             <p className="text-gray-700">
//               <strong>Criteria 10th:</strong> {company.criteria_10th}
//             </p>
//             <p className="text-gray-700">
//               <strong>Criteria 12th:</strong> {company.criteria_12th}
//             </p>
//             <p className="text-gray-700">
//               <strong>Degree Criteria:</strong> {company.deg_criteria}
//             </p>
//             <p className="text-gray-700">
//               <strong>Diploma Criteria:</strong> {company.diploma_criteria}
//             </p>
//             <p className="text-gray-700">
//               <strong>Eligible Branches:</strong> {company.eligible_branches}
//             </p>
//           </>
//         )}
//       </div>
//     );
//   };

//   const openFullDetails = () => {
//     if (!company) {
//       return; // Handle case where company is undefined
//     }

//     CustomModal.open({
//       title: company.name,
//       content: (
//         <>
//           <p className="text-gray-700">{company.job_description}</p>
//           <p className="text-gray-700">
//             <strong>Role:</strong> {company.roles}
//           </p>
//           <p className="text-gray-700">
//             <strong>CTC: </strong> {formatSalary(company.package_details)}
//           </p>
//           <p className="text-gray-700">
//             <strong>10th Criteria: </strong> {company.criteria_10th}
//           </p>
//           <p className="text-gray-700">
//             <strong>12th Criteria: </strong> {company.criteria_12th}
//           </p>
//           <p className="text-gray-700">
//             <strong>Degree Criteria: </strong> {company.deg_criteria}
//           </p>
//           <p className="text-gray-700">
//             <strong>Diploma Criteria: </strong> {company.diploma_criteria}
//           </p>
//           <p className="text-gray-700">
//             <strong>Eligible Branches: </strong> {company.eligible_branches}
//           </p>
//         </>
//       ),
//     });
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <h3
//         className="text-xl font-semibold cursor-pointer"
//         onClick={openFullDetails}
//       >
//         {company ? company.name : "Loading..."}
//       </h3>
//       {renderDescription()}
//       <p className="text-gray-700">
//         <strong>CTC:</strong>{" "}
//         {company ? formatSalary(company.package_details) : "Loading..."}
//       </p>
//       <p className="text-gray-700">
//         <strong>Role:</strong> {company ? company.roles : "Loading..."}
//       </p>

//       <button
//         onClick={() => onRegister(company)}
//         className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded ${
//           isRegistered ? "bg-gray-500 cursor-not-allowed" : "hover:bg-blue-600"
//         }`}
//         disabled={isRegistered}
//       >
//         {isRegistered ? "Registered" : "Register"}
//       </button>
//     </div>
//   );
// };

// export default DashboardCard;
