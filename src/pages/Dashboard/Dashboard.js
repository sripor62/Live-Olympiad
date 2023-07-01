import React, { useEffect, useState } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import usePackages from "../../hooks/usePackages";
import { useStore } from "../../stores";
import { DashboardLayout } from "../../designs/Dashboard/DashboardLayout";
import { useSchool } from "../../hooks/useSchool";
import { useStudent } from "../../hooks/useStudent";

const Dashboard = () => {
  let curentUser = useStore((state) => state.currentUser);
  // let grade = window.localStorage.getItem("grade");
  // let school = window.localStorage.getItem("school");
  const student = JSON.parse(sessionStorage.getItem("current_student"));
  
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
  const {getStudentsOfUser} = useStudent();

  const [schoolType, setSchoolType] = useState();
  const [userData, setUserData] = useState();

  let schoolId = student.schoolId;
  let userId = student.userId;
  let id = student._id;


  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await getSchoolById(schoolId);
        setSchoolType(response.data.data.type);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };

    fetchSchool();
  }, [schoolId]);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getStudentsOfUser(userId);
        setUserData(response?.data.data);     
  }
       catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [userId]);

  // let idx;

  // useEffect(() => {
  //   if (userData) {
  //     for (let i = 0; i < userData.length; i++) {
  //       const item = userData[i];
  //       if (item._id === id) {
  //         idx = i;
  //       }
  //     }
  //   }
  // }, [userData, id]);
  
	
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
        seriesName={seriesName}
      />
    </HomeLayout>
  );
};

export default Dashboard;



