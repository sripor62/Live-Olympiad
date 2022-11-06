import React, { useEffect } from 'react'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { useState } from 'react'
import { useQuery } from 'react-query'
import { DashboardLayout } from '../../designs/Dashboard/DashboardLayout';
import { navigateAsPerSessionValidity } from "../../services/helpers";
import useTests from '../../hooks/useTests';
import TestScreen from '../Test/TestScreen'
import { useNavigate } from 'react-router-dom';
import { useStore } from "../../stores";
import {useStudent} from "../../hooks/useStudent"
import { AppConstants } from '../../environments/app-constants';
import jwt_decode from "jwt-decode";
const Dashboard = () => {

    useEffect(() => {
        navigateAsPerSessionValidity(true);
    });
    const navigate = useNavigate();
    const { getProfile } = useStudent();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [testsLists, setTestsList] = useState([])
    const [pageData, setPageData] = useState({
        "fullName": "",
        "email": "",
        "rollNumber": "",
        "dob": "",
        "gender": "",
        "pinCode": "",
        "school": "",
        "grade": "",
        "section": ""

    })
    const [flagShow, setFlagShow] = useState(false)
    const { getTestList, getPackageList } = useTests();
    const open = Boolean(anchorEl);
    const [assessmentList,setAssessmentList]=useState([]);
    const [passAssessData,setPassAssessData]=useState();
    const [grade,setGrade]=useState("")
    const {getEducation}=useStudent();
    let curentUser = JSON.parse(localStorage.current_user);
    const [page,setPage]=useState(0)

    // setStuName(curentUser?.state?.currentUser.fullName)
    let stuName=curentUser?.state?.currentUser?.fullName.split(' ')[0]
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { data: PackageData } = useQuery([`AssessmentData`], () => getPackageList(), { enabled: true, retry: false })
    useEffect(()=>{
        
        setAssessmentList(PackageData?.data?.data)
       
    },[PackageData])
    const cookieServiceValue_USER_INFO = document.cookie.split(";").filter((item)=> item.trim().startsWith(AppConstants.SESSION_STORAGE_ITEMS.USER_INFO));
    let userInfoVal=""
    if(cookieServiceValue_USER_INFO.length>0){
      userInfoVal =cookieServiceValue_USER_INFO[0].trim().split("=")[1];
    }
    const userInfo = JSON.parse(userInfoVal);
    let decodedToken = jwt_decode(userInfo.access_token);
  
    const { data: EducationData } = useQuery([`EducationData`], () => getEducation(decodedToken.jti), { enabled: true, retry: false })
    
    
    const { data: testList, isLoading: TestListLoader,refetch } = useQuery([`TestListData`], () => getTestList(window.localStorage.getItem("grade")), { enabled: true, retry: false })
    useEffect(()=>{
refetch();
    },[EducationData?.data?.data[0]?.grade])
    useEffect(()=>{
        setTestsList(testList?.data);
        let newTestList = []
        let map = {}
        assessmentList?.forEach((item) => map[item.assessmentId] = item)

        newTestList = testList?.data.map((data) => {
            var pData = { ...data, attemptedQuestions: map[data._id]?.attemptedQuestions, testStatus:map[data._id]?.testStatus, testId:map[data._id]?.testId }
            return pData
        })
        setPassAssessData(newTestList)
    }, [testList, assessmentList])

    const testScreen = (item) => {
        navigate("/TestScreen/" + item)
    }
    
        
        const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    
    
    return <HomeLayout logOutHandler={clearCurrentUser} stuName={stuName}>
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
        />
    </HomeLayout>

}

export default Dashboard