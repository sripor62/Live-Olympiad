import React, { useEffect, useState } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import usePackages from "../../hooks/usePackages";
import { useStore } from "../../stores";
import { DashboardLayout } from "../../designs/Dashboard/DashboardLayout";
import { useSchool } from "../../hooks/useSchool";

const Dashboard = () => {
  let curentUser = useStore((state) => state.currentUser);
  let grade = window.localStorage.getItem("grade");
  let school = window.localStorage.getItem("school");
  const student = JSON.parse(sessionStorage.getItem("current_student"));
  
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  let stud = localStorage.getItem("current_user");
  let studData = JSON.parse(stud);
  let token = studData.state.currentUser.access_token;
  let id = studData.state.currentUser.id;

  const [passAssessData, setPassAssessData] = useState();
  const [page, setPage] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { getPackages } = usePackages();
  const {getSchoolById} = useSchool();
  const [hostname, setHostname] = useState();

  let schoolId = student.schoolId;
  useEffect(() => {
    const fetchSchool = async (id) => {
      try {
        const response = await getSchoolById(schoolId);
        //console.log(response.data.data.type);
        setHostname(response.data.data.type);
      } catch (error) {
        console.error("Error fetching syllabus data:", error);
      }
    };

    fetchSchool();
  }, []);
  
  
	let sch_id = hostname;
  let text;
  if(sch_id==="Tech") text="Screening";
  else text="Practice";


    const fetchPackageData = async (page) => {
      if(text==="Screening" && page===1) {
        try {
          const response = await getPackages({
            grade:student?.grade,
            subject: 'Technology',
            series: 'Screening'
          });
          if (response && response.data) {
            setPassAssessData(response.data);
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
          setPassAssessData(response.data);
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

  const testScreen = (packageId) => {
    window.open(
      `https://tab.liveolympiad.org/sessionStart/${token}/${packageId}/${id}`,
      "_self"
    );
  };

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  const testSend = (packageId) => {
        window.location.href = `https://tab.liveolympiad.org/sessionStart/${token}/${packageId}/${id}`;
      };

  return (
    <HomeLayout logOutHandler={clearCurrentUser}>
      <DashboardLayout
        setPage={setPage}
        page={page}
        open={open}
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        testsLists={passAssessData}
        testScreen={testScreen}
        testSend={testSend}
        text={text}
      />
    </HomeLayout>
  );
};

export default Dashboard;



