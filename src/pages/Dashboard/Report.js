import React, { useEffect, useState } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import usePackages from "../../hooks/usePackages";
import { useStore } from "../../stores";
import { ReportLayout } from "../../designs/Dashboard/ReportLayout";
import { useSchool } from "../../hooks/useSchool";
import useSessionHelper from "../../hooks/useSession";

const Report = () => {
  let curentUser = useStore((state) => state.currentUser);
  const student = JSON.parse(sessionStorage.getItem("current_student"));
  
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  let stud = localStorage.getItem("current_user");
  let studData = JSON.parse(stud);
  let token = studData.state.currentUser.access_token;

  
  const [page, setPage] = useState(0);

  const { getPackages } = usePackages();
  const {getSchoolById} = useSchool();
  const { StudentsReport } = useSessionHelper();

  const [schoolType, setSchoolType] = useState();
  const [repData, setRepData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [packId, setPackId] = useState();


  let schoolId = student.schoolId;


  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await getSchoolById(schoolId);
        setSchoolType(response.data.data.type);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchSchool();
  }, [schoolId]);


  
  let seriesName = (schoolType === "Tech") ? "Screening" : "Practice";


  


    const fetchPackageData = async (page) => {
      if(seriesName==="Screening" && page===1) {
        try {
          const response = await getPackages({
            grade:'Beginner',
            subject: 'Technology',
            series: 'Screening'
          });
          if (response && response.data) {
            setPackId(response.data[0]._id);
          }
        } catch (error) {
          console.error("Error fetching test data:", error);
        }
      }

      else if(page===1) {
      try {
        const response = await getPackages({
          grade:student?.grade,
          subject: 'Science',
          series: 'Practice'
        });
        if (response && response.data) {
          setPackId(response.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    }

    else if(page===2) {
      try {
        const response = await getPackages({
          grade:student?.grade,
          subject: 'Math',
          series: 'Practice'
        });
        if (response && response.data) {
          setPackId(response.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    }

    else if(page===3) {
      try {
        const response = await getPackages({
          grade:student?.grade,
          subject: 'English',
          series: 'Practice'
        });
        if (response && response.data) {
          setPackId(response.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    }
    
    };

  

  useEffect(() => {
    if (page !== 0) {
      fetchPackageData(page);
    }
  }, [page]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await StudentsReport(packId, token);
        if (response.data.data && response.data.data.length > 0)
        setRepData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    
      fetchReport();
  }, [ token, packId]);

  

  

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  

      if (isLoading) {
        // Display a loading spinner or a placeholder message
        return <div>Loading...</div>;
      }

  return (
    <HomeLayout logOutHandler={clearCurrentUser} seriesName={seriesName}> 
      <ReportLayout
        setPage={setPage}
        page={page}
        seriesName={seriesName}
        repData={repData}
      />
    </HomeLayout>
  );
};

export default Report;



