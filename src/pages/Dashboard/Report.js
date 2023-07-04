import React, { useEffect, useState } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import { useNavigate } from "react-router-dom";
import usePackages from "../../hooks/usePackages";
import { useStore } from "../../stores";
import { ReportLayout } from "../../designs/Dashboard/ReportLayout";
import { useSchool } from "../../hooks/useSchool";
import useSessionHelper from "../../hooks/useSession";

const Report = () => {
  let curentUser = useStore((state) => state.currentUser);
  // let grade = window.localStorage.getItem("grade");
  // let school = window.localStorage.getItem("school");
  const student = JSON.parse(sessionStorage.getItem("current_student"));
  const navigate = useNavigate();
  
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  let stud = localStorage.getItem("current_user");
  let studData = JSON.parse(stud);
  let token = studData.state.currentUser.access_token;

  const [passAssessData, setPassAssessData] = useState();
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
            setPassAssessData(response.data);
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
        //console.log(response.data[0]._id);
        if (response && response.data) {
          setPassAssessData(response.data);
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
          setPassAssessData(response.data);
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
          setPassAssessData(response.data);
          setPackId(response.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      }
    }
    
    };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  useEffect(() => {
    if (page !== 0) {
      fetchPackageData(page);
    }
  }, [page]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await StudentsReport("64a019c6dd8157763a5daa0d", token);
        //console.log(response.data.data[0]);
        if (response.data.data && response.data.data.length > 0)
        setRepData(response.data.data[0]);
        //setStudentReport(response.data);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    
      fetchReport();
  }, [ token]);

  

  const testScreen = (packageId) => {
    navigate(`/report?packageId=${packageId}`);
  };

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  

  const testSend = (packageId) => {
    navigate(`/report?packageId=${packageId}`);
  };

      if (isLoading) {
        // Display a loading spinner or a placeholder message
        return <div>Loading...</div>;
      }

      //console.log(packId);

  return (
    <HomeLayout logOutHandler={clearCurrentUser} seriesName={seriesName}> 
      <ReportLayout
        setPage={setPage}
        page={page}
        open={open}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        testsLists={passAssessData}
        testScreen={testScreen}
        testSend={testSend}
        seriesName={seriesName}
        packId={packId}
        repData={repData}
      />
    </HomeLayout>
  );
};

export default Report;



