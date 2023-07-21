import React, { useEffect, useState } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import usePackages from "../../hooks/usePackages";
import { useStore } from "../../stores";
import { DashboardLayout } from "../../designs/Dashboard/DashboardLayout";
import { useSchool } from "../../hooks/useSchool";
import { environment } from "../../environments/environment";
import { useSyllabus } from "../../hooks/useSyllabus";

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
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  // const [math, setMath] = useState([]);
  // const [science, setScience] = useState([]);
  // const [english, setEnglish] = useState([]);
  const [click, setClick] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { getPackages } = usePackages();
  const {getSchoolById} = useSchool();
  const { getSyllabusByTags } = useSyllabus();

  const [schoolType, setSchoolType] = useState();
  const [isLoading, setIsLoading] = useState(true);


  let schoolId = student.schoolId;
  let id = student._id;


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





  useEffect(() => {
    const fetchSyllabus = async (page) => {

      try {
        if(page===1){
        const response1 = await getSyllabusByTags({
          grade: student?.grade,
          subject: 'Science'
        });
        if(response1 && response1.data) {
          const newData = []; // Create a copy of the existing data
          for (let key in response1.data) {
            for (let it in response1.data[key]) {
              newData.push(it); // Add the 'it' value to the newData array
            }
          }
          setData(newData);
        }
      }

        else if(page===2){
        const response2 = await getSyllabusByTags({
          grade: student?.grade,
          subject: 'Math'
        });
        if(response2 && response2.data) {
          const newData = []; // Create a copy of the existing data
          for (let key in response2.data) {
            for (let it in response2.data[key]) {
              newData.push(it); // Add the 'it' value to the newData array
            }
          }
          setData(newData);
        }
      }

        else {
        const response3 = await getSyllabusByTags({
          grade: student?.grade,
          subject: 'English'
        });
        if(response3 && response3.data) {
          const newData = []; // Create a copy of the existing data
          for (let key in response3.data) {
            for (let it in response3.data[key]) {
              newData.push(it); // Add the 'it' value to the newData array
            }
          }
          setData(newData);
        }
      }
      }

      catch (error) {
        console.error("Error fetching sylaabus data:", error);
      }
    };

    if(page!==0) {setClick(""); setData([]); setPassAssessData([]); fetchSyllabus(page);}
  }, [page]);


  
  
	
  let seriesName = (schoolType === "Tech") ? "Screening" : "Practice";


    const fetchPackageData = async (page) => {

      if(seriesName==="Screening" && page===1) {
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
          series: 'Domain',
          tag: click
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
          series: 'Domain',
          tag: click
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
          series: 'Domain',
          tag: click
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
    if (page !== 0 && click!=="") {
      setPassAssessData([]);
      fetchPackageData(page);
    }
  }, [page,click]);

  

  const testScreen = (packageId) => {
    window.open(
      `${environment.testAppUrl}/sessionStart/${token}/${packageId}/${id}`,
      "_self"
    );
  };

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  

  const testSend = (packageId) => {
        window.location.href = `${environment.testAppUrl}/sessionStart/${token}/${packageId}/${id}`;
      };

      if (isLoading) {
        // Display a loading spinner or a placeholder message
        return <div>Loading...</div>;
      }

      

  return (
    <HomeLayout logOutHandler={clearCurrentUser} seriesName={seriesName}> 
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
        data={data}
        click={click}
        setClick={setClick}
      />
    </HomeLayout>
  );
};

export default Dashboard;



