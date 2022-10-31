import React, { useState, useEffect } from 'react'
import { TestScreenLayout } from '../../designs/Test/TestScreenLayout';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import useTests from '../../hooks/useTests';
import { AppConstants } from '../../environments/app-constants'
import { useStore } from '../../stores';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useStudent } from '../../hooks/useStudent';
const TestScreen = () => {
    const currentUser = useStore((state) => state.currentUser)
    const [testsLists, setTestsList] = useState([])
    const [pageData, setPageData] = useState({})
    const { getTestList, createTest, getPackageList } = useTests();
    const [assessmentList, setAssessmentList] = useState([]);
    const [passAssessData, setPassAssessData] = useState();
    const params = useParams();
    const {getEducation}=useStudent();
    let packageId = params.packageId;
    const { data: PackageData } = useQuery([`AssessmentData`], () => getPackageList(), { enabled: true, retry: false })
    useEffect(() => {

        setAssessmentList(PackageData?.data?.data)

    }, [PackageData])
    const cookieServiceValue_USER_INFO = document.cookie.split(";").filter((item)=> item.trim().startsWith(AppConstants.SESSION_STORAGE_ITEMS.USER_INFO));
    let userInfoVal=""
    if(cookieServiceValue_USER_INFO.length>0){
      userInfoVal =cookieServiceValue_USER_INFO[0].trim().split("=")[1];
    }
    const userInfo = JSON.parse(userInfoVal);
    let decodedToken = jwt_decode(userInfo.access_token);
    console.log("dashboardddddddddddd",decodedToken.jti)
    const { data: EducationData } = useQuery([`EducationData`], () => getEducation(decodedToken.jti), { enabled: true, retry: false })
    const { data: TestList, isLoading: TestListLoader } = useQuery([`TestListData`], () => getTestList(EducationData?.data?.data[0]?.grade), { enabled: true, retry: false })
    const navigate = useNavigate();
    let curentUser = JSON.parse(localStorage.current_user);
    let stuName = curentUser?.state?.currentUser.fullName.split(' ')[0]
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
    useEffect(() => {
        setTestsList(TestList?.data);
        let newTestList = []
        let map = {}
        assessmentList?.forEach((item) => map[item.assessmentId] = item)

        newTestList = TestList?.data.map((data) => {
            var pData = { ...data, attemptedQuestions: map[data._id]?.attemptedQuestions, testStatus:map[data._id]?.testStatus, testId:map[data._id]?.testId }
            return pData
        })
        if (newTestList) {
            let pData = newTestList?.filter((item) => item._id === packageId)
            if (pData) {
                setPageData(pData[0]);
            }
        }
        setPassAssessData(newTestList)
    }, [TestList, assessmentList])

    const clearCurrentUser = useStore((state) => state.clearCurrentUser)
    const startTest = async (pageData) => {
        let testId=pageData.testId;
        if(!testId||pageData.testStatus==true){
            const test = await createTest({
                packageId: pageData._id,
                totalQuestions: pageData?.questions.length,
                totalMarks: pageData?.totalMarks,
                totalDurationMin: pageData?.totalDurationMin,
                at: new Date().toISOString()
            });
            testId=test?.data?.testId
        }
        window.location.href = `http://test.liveolympiad.org/landing/${testId}?token=${currentUser.access_token}`;
    };
    const navigateBack = () => navigate("/dashboard")
    return (
        <>
            <TestScreenLayout logOutHandler={clearCurrentUser} pageData={pageData} startTest={startTest} navigateBack={navigateBack} stuName={stuName} />
        </>
    )
}

export default TestScreen