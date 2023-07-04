import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useStore } from "../stores";
import { useStudent } from "../hooks/useStudent";
import { useNavigate, useParams } from "react-router-dom";
import useSessionHelper from "../hooks/useSession";
import { ReportsLayout } from "../designs/Reports/ReportsLayout";

const ReportView = () => {
  const currentUser = useStore((state) => state.currentUser);
  const { packageId: paramsPackageId } = useParams();
  const { getPackage } = useStudent();
  const { StudentsReport, getReportFilter } = useSessionHelper();
  const [newTestList, setNewTestList] = useState([]);
  const [studentReport, setStudentReport] = useState(null);
  //const [packageId, setPackageId] = useState(null);

  let stud = localStorage.getItem("current_user");
  let studData = JSON.parse(stud);
  let token = studData.state.currentUser.access_token;
  

//   useEffect(() => {
//     if (paramsPackageId) {
//       setPackageId(paramsPackageId);
	  
//     }
//   }, [paramsPackageId]);

//   useEffect(() => {
    
//       const fetchReport = async () => {
//         try {
//           const response = await StudentsReport(packageId, token);
//           console.log(response);
//           setStudentReport(response.data);
//         } catch (error) {
//           console.error("Error fetching report data:", error);
//         }
//       };
	
//       if (packageId) fetchReport();
    
//   }, [packageId, token, params]);

useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await StudentsReport(paramsPackageId, token);
        console.log(response);
        setStudentReport(response.data);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    if (paramsPackageId) {
      fetchReport();
    }
  }, [paramsPackageId, token]);

  useEffect(() => {
    if (studentReport) {
      let newList = studentReport.data.map((data, i) => {
        const pData = {
          ...data,
          correctAnswer: studentReport.data[0].answers[i]?.correctIndex,
          submittedAnswer: studentReport.data[0].answers[i]?.answerIndex,
          result:
            studentReport.data[0].answers[i]?.answerIndex === -1
              ? null
              : studentReport.data[0].answers[i]?.correctIndex ===
                studentReport.data[0].answers[i]?.answerIndex,
        };
        return pData;
      });
      setNewTestList(newList);
    }
  }, [studentReport]);

  return (
    <ReportsLayout
      isLoading={!studentReport}
      studentReport={studentReport}
      newTestList={newTestList}
    />
  );
};

export default ReportView;


