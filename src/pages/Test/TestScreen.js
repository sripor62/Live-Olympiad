import React, { useState, useEffect } from 'react'
import { TestScreenLayout } from '../../designs/Test/TestScreenLayout';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import useTests from '../../hooks/useTests';
import { AppConstants } from '../../environments/app-constants'
import { useStore } from '../../stores';
import { useNavigate } from "react-router-dom";

const TestScreen = () => {
    const currentUser = useStore((state) => state.currentUser)
    const [testsLists, setTestsList] = useState([])
    const [pageData, setPageData] = useState({})
    const { getTestList, createTest,getPackageList } = useTests();
    const [assessmentList,setAssessmentList]=useState([]);
    const [passAssessData,setPassAssessData]=useState();
    const params = useParams();
    let packageId = params.packageId;
    const { data: PackageData } = useQuery([`AssessmentData`], () => getPackageList(), { enabled: true, retry: false })
    useEffect(()=>{
     
        setAssessmentList(PackageData?.data?.data)
       
    },[PackageData])
    const { data: TestList, isLoading: TestListLoader } = useQuery([`TestListData`], () => getTestList(), { enabled: true, retry: false })
    const navigate=useNavigate();
    let curentUser = JSON.parse(localStorage.current_user);
    let stuName=curentUser?.state?.currentUser.fullName.split(' ')[0]
    // useEffect(() => {
    //     console.log("packageId", TestList)
    //     if (TestList) {
    //         setTestsList(TestList?.data);
    //         if (TestList?.data) {
    //             let pData = TestList?.data.filter((item) => item._id === packageId)
    //             if (pData) {
    //                 setPageData(pData[0]);
    //                 console.log("pageData", pageData)
    //             }
    //         }
    //     }
    // }, [TestList])
    useEffect(()=>{
        setTestsList(TestList?.data);
        let newTestList=[]
        let map={}
        assessmentList?.forEach((item)=>map[item.assessmentId]=item.attemptedQuestions)
        
        newTestList=TestList?.data.map((data)=>{
           
       
        var pData={...data,attemptedQuestions:map[data._id]}
            
            return pData
        })
        if (newTestList) {
                        let pData = newTestList?.filter((item) => item._id === packageId)
                        if (pData) {
                            setPageData(pData[0]);
                            
                        }
                    }
        setPassAssessData(newTestList)
    },[TestList,assessmentList])
  
    const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    const startTest = async (pageData) => {
        const test = await createTest({
            packageId: pageData._id,
            totalQuestions: pageData?.questions.length,
            totalMarks: pageData?.totalMarks,
            totalDurationMin: pageData?.totalDurationMin,
            at: new Date().toISOString()
        });
        window.location.href = `http://school.liveolympiad.org:4002/landing/${test?.data?.testId}?token=${currentUser.access_token}`;
    };
    const navigateBack=()=> navigate("/dashboard")
    return (
        <>
            <TestScreenLayout logOutHandler={clearCurrentUser} pageData={pageData} startTest={startTest} navigateBack={navigateBack} stuName={stuName}/>
        </>
    )
}

export default TestScreen