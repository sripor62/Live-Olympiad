import React, { useEffect, useState } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import usePackages from "../../hooks/usePackages";
import { useStore } from "../../stores";
import { environment } from "../../environments/environment";
import { useCookies } from 'react-cookie';
import { DashboardLayout } from "../../designs/Dashboard/DashboardLayout";

const Dashboard = () => {
  let curentUser = useStore((state) => state.currentUser);
  let grade = window.localStorage.getItem("grade");
  let school = window.localStorage.getItem("school");
  const student = JSON.parse(sessionStorage.getItem("current_student"));
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  // const [cookies] = useCookies(['sessionId']);
  // const sessionId = cookies.sessionId;
  // console.log(sessionId);

  const [passAssessData, setPassAssessData] = useState();
  const [page, setPage] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { getPackages } = usePackages();


    const fetchPackageData = async (page) => {

      if(page===1) {
      try {
        const response = await getPackages({
          grade:student?.grade,
          subject: 'Science'
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
          subject: 'Math'
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
          subject: 'English'
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
      `${environment.activityBaseUrl}/recommend?sessionId=${packageId}`,
      "_self"
    );
  };

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  const testSend = (packageId) => {
        window.location.href = `${environment.activityBaseUrl}/recommend?sessionId=${packageId}`;
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
      />
    </HomeLayout>
  );
};

export default Dashboard;



