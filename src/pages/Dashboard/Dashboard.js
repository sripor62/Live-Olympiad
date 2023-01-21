import React, { useEffect } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { useState } from "react";
import { useQuery } from "react-query";
import { DashboardLayout } from "../../designs/Dashboard/DashboardLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import useTests from "../../hooks/useTests";
import { useStore } from "../../stores";
import { environment } from "../../environments/environment";
import { usePayment } from "../../hooks/usePayment";
const Dashboard = () => {
  let curentUser = useStore((state) => state.currentUser);
  let grade = window.localStorage.getItem("grade");

  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });

  const [passAssessData, setPassAssessData] = useState();
  const [page, setPage] = useState(0);
  const [subjects,setSubjects] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { getTestList } = useTests();
  const { getSubscriptions, getSubjects } = usePayment();

  const { data: SubscriptionData} = useQuery([`SubscriptionData`], () => getSubscriptions(curentUser?.id), { enabled: !!curentUser?.id, retry: false })
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

  const { data: testList} = useQuery(
    [`TestListData`, grade],
    () => getTestList(grade),
    { enabled: !!grade && !!curentUser?.id, retry: false }
  );
  
  useEffect(() => {
    let newTestList = [];
    let map = {};

    newTestList = testList?.data.map((data) => {
      var pData = {
        ...data,
        attemptedQuestions: map[data._id]?.attemptedQuestions,
        testStatus: map[data._id]?.testStatus,
        testId: map[data._id]?.testId,
      };
     
      return pData;
    });
    let newFilteredList = newTestList?.filter((test)=>{
        let flag = false;
        subjects?.forEach((subject) => {
            flag = flag || test.subject[0].search(subject) !== -1;
        })
        return flag
    })
    if(environment.env!=="school"){
      setPassAssessData(newTestList);
    } else {
      setPassAssessData(newFilteredList);
    }
  }, [subjects, testList]);

  const testScreen = (packageId) => {
    window.open(`${environment.testAppUrl}/sessionStart/${currentUser.access_token}/${packageId}`,'_self');
  };

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  const testSend = (packageId) => {
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
        testScreen={testScreen}
        passAssessData={passAssessData}
        testSend={testSend}
      />
    </HomeLayout>
  );
};
export default Dashboard;