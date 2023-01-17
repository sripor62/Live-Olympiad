import React, { useEffect } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { useState } from "react";
import { useQuery } from "react-query";
import { DashboardLayout } from "../../designs/Dashboard/DashboardLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import useTests from "../../hooks/useTests";
import TestScreen from "../Test/TestScreen";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { useStudent } from "../../hooks/useStudent";
import { AppConstants } from "../../environments/app-constants";
import jwt_decode from "jwt-decode";
import { environment } from "../../environments/environment";
import { Endpoints } from "../../environments/endpoints";
import { usePayment } from "../../hooks/usePayment";
const Dashboard = () => {
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  const navigate = useNavigate();
  const { getProfile } = useStudent();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [testsLists, setTestsList] = useState([]);
  const [pageData, setPageData] = useState({
    fullName: "",
    email: "",
    rollNumber: "",
    dob: "",
    gender: "",
    pinCode: "",
    school: "",
    grade: "",
    section: "",
  });
  const [flagShow, setFlagShow] = useState(false);
  const { getTestList, getUserSessions } = useTests();
  const {
    getSubscriptions,
    getSubjects,
  } = usePayment();
  const open = Boolean(anchorEl);
  const [assessmentList, setAssessmentList] = useState([]);
  const [passAssessData, setPassAssessData] = useState();
  const [grade, setGrade] = useState("");
  const { getEducation } = useStudent();
  let curentUser = useStore((state) => state.currentUser);
  const [page, setPage] = useState(0);

  // setStuName(curentUser?.state?.currentUser.fullName)
  const [subjects,setSubjects] = useState();
  const { data: SubscriptionData, isLoading: subscriptionsLoader } = useQuery([`SubscriptionData`], () => getSubscriptions(curentUser?.id), { enabled: !!curentUser?.id, retry: false })
  const {data : CoursesData} = useQuery(['CoursesData'],() => getSubjects(),{ enabled: true, retry: false })

  useEffect(()=>{
    if(CoursesData!==undefined){
        let subs = {}
        CoursesData.data.data.forEach((course)=>{
            subs[course.id] = course.name;
        })

        

        if(SubscriptionData?.data?.data?.subscribedCourses?.length!==0){
            setSubjects(SubscriptionData?.data?.data.subscribedCourses.map((item)=>subs[item].slice(0,4)));
            

        }
       
    }

},[SubscriptionData,CoursesData])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data: PackageData } = useQuery(
    [`AssessmentData`],
    () => getUserSessions(),
    { enabled: !!curentUser?.id, retry: false }
  );
  useEffect(() => {
    setAssessmentList(PackageData?.data?.data);
  }, [PackageData]);

  const { data: EducationData } = useQuery(
    [`EducationData`],
    () => getEducation(curentUser.id),
    { enabled: !!curentUser?.id, retry: false }
  );

  const { data: testList, isLoading: TestListLoader } = useQuery(
    [`TestListData`, grade],
    () => getTestList(grade),
    { enabled: !!grade && !!curentUser?.id, retry: false }
  );
  useEffect(() => {
    console.log(EducationData?.data?.data[0]?.grade)
    setGrade(EducationData?.data?.data[0]?.grade);
  }, [EducationData]);
  useEffect(() => {
    setTestsList(testList?.data);
    let newTestList = [];
    let map = {};
    assessmentList?.forEach((item) => (map[item.assessmentId] = item));

    newTestList = testList?.data.map((data) => {
      var pData = {
        ...data,
        attemptedQuestions: map[data._id]?.attemptedQuestions,
        testStatus: map[data._id]?.testStatus,
        testId: map[data._id]?.testId,
      };
     
      return pData;
    });
    console.log(newTestList)
    let newFilteredList = newTestList?.filter((test)=>{
        let flag = false;
        subjects?.forEach((subject) => {
            flag = flag || test.subject[0].search(subject)!=-1;

        })
        return flag
    })
    console.log(subjects)
    console.log("newFilteredList",newFilteredList)
    if(environment.env!=="school"){
      setPassAssessData(newTestList);
    } else {
      setPassAssessData(newFilteredList);
    }
  }, [testList, assessmentList]);

  const testScreen = (packageId) => {
    console.log(`${environment.testAppUrl}/sessionStart/${currentUser.access_token}/${packageId}`)
    window.location.href = `${environment.testAppUrl}/sessionStart/${currentUser.access_token}/${packageId}`;
  };

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  const testSend = (packageId) => {
    console.log(`${environment.testAppUrl}/sessionStart/${currentUser.access_token}/${packageId}`)
    window.location.href = `${environment.testAppUrl}/sessionStart/${currentUser.access_token}/${packageId}`;
  }

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
        setTestsList={setTestsList}
        testScreen={testScreen}
        passAssessData={passAssessData}
        testSend={testSend}
      />
    </HomeLayout>
  );
};

export default Dashboard;
