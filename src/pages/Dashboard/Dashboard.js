import React,{useEffect} from 'react'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { useState } from 'react'
import {useQuery} from 'react-query'
import { DashboardLayout } from '../../designs/Dashboard/DashboardLayout';
import { navigateAsPerSessionValidity } from "../../services/helpers";
import useTests from '../../hooks/useTests';
import TestScreen from '../Test/TestScreen'
import { useNavigate } from 'react-router-dom';
import { useStore } from "../../stores";
import {useStudent} from "../../hooks/useStudent"
const Dashboard = () => {
    
    useEffect(() => {
        navigateAsPerSessionValidity(true);
      });
    const navigate=useNavigate();
    const {getProfile}=useStudent();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [testsLists,setTestsList]=useState([])
    const [pageData,setPageData]=useState({
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
    const [flagShow,setFlagShow]=useState(false)
    const {getTestList,getPackageList}=useTests();
    const open = Boolean(anchorEl);
    const [assessmentList,setAssessmentList]=useState([]);
    const [passAssessData,setPassAssessData]=useState();
    let curentUser = JSON.parse(localStorage.current_user);
   
    // setStuName(curentUser?.state?.currentUser.fullName)
    let stuName=curentUser?.state?.currentUser.fullName.split(' ')[0]
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

    const { data: testList, isLoading: TestListLoader } = useQuery([`TestListData`], () => getTestList(), { enabled: true, retry: false })
    useEffect(()=>{
        setTestsList(testList?.data);
        let newTestList=[]
        let map={}
        assessmentList?.forEach((item)=>map[item.assessmentId]=item.attemptedQuestions)
        
        newTestList=testList?.data.map((data)=>{
           
       
        var pData={...data,attemptedQuestions:map[data._id]}
            
            return pData
        })
 
        setPassAssessData(newTestList)
    },[testList,assessmentList])
  





    const testScreen=(item)=>{
        navigate("/TestScreen/"+item)
    }
    const clearCurrentUser = useStore((state) => state.clearCurrentUser)

    return <HomeLayout logOutHandler={clearCurrentUser} stuName={stuName}>


       <DashboardLayout
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