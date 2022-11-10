import React, { useState, useEffect } from "react";
import { TestScreenLayout } from "../../designs/Test/TestScreenLayout";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import useTests from "../../hooks/useTests";
import { AppConstants } from "../../environments/app-constants";
import { useStore } from "../../stores";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useStudent } from "../../hooks/useStudent";
import { environment } from "../../environments/environment";
const TestScreen = () => {
  useEffect(() => {
    if (window.localStorage) {
      if (!localStorage.getItem("reload")) {
        localStorage["reload"] = true;
        window.location.reload();
      } else {
        localStorage.removeItem("reload");
      }
    }
  }, []);
  const currentUser = useStore((state) => state.currentUser);
  const [grade, setGrade] = useState();
  const [testsLists, setTestsList] = useState([]);
  const [pageData, setPageData] = useState({});
  const { getTestList, createTest, getPackageList } = useTests();
  const [assessmentList, setAssessmentList] = useState([]);
  const [passAssessData, setPassAssessData] = useState();
  const params = useParams();
  const { getEducation } = useStudent();
  let packageId = params.packageId;
  const { data: PackageData } = useQuery(
    [`AssessmentData`],
    () => getPackageList(),
    { enabled: true, retry: false }
  );
  useEffect(() => {
    setAssessmentList(PackageData?.data?.data);
  }, [PackageData]);

  const { data: EducationData } = useQuery(
    [`EducationData`],
    () => getEducation(currentUser.id),
    { enabled: true, retry: false }
  );
  const { data: TestList, isLoading: TestListLoader } = useQuery(
    [`TestListData`, grade],
    () => getTestList(grade),
    { enabled: !!grade, retry: false }
  );
  const navigate = useNavigate();
  let curentUser = JSON.parse(localStorage.current_user);
  let stuName = curentUser?.state?.currentUser.fullName.split(" ")[0];

  useEffect(() => {
    setGrade(EducationData?.data?.data[0]?.grade);
  }, [EducationData]);
  useEffect(() => {
    setTestsList(TestList?.data);
    let newTestList = [];
    let map = {};
    assessmentList?.forEach((item) => (map[item.assessmentId] = item));

    newTestList = TestList?.data.map((data) => {
      var pData = {
        ...data,
        attemptedQuestions: map[data._id]?.attemptedQuestions,
        testStatus: map[data._id]?.testStatus,
        testId: map[data._id]?.testId,
      };
      return pData;
    });
    if (newTestList) {
      let pData = newTestList?.filter((item) => item._id === packageId);
      if (pData) {
        setPageData(pData[0]);
      }
    }
    setPassAssessData(newTestList);
  }, [TestList, assessmentList]);

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const startTest = async (pageData) => {
    let testId = pageData.testId;
    if (!testId || pageData.testStatus == true) {
      const test = await createTest({
        packageId: pageData._id,
        totalQuestions: pageData?.questions.length,
        totalMarks: pageData?.totalMarks,
        totalDurationMin: pageData?.totalDurationMin,
        at: new Date().toISOString(),
      });
      testId = test?.data?.testId;
    }
    window.location.href = `${environment.testAppUrl}/landing/${testId}?token=${currentUser.access_token}&mock=true`;
  };
  const navigateBack = () => navigate("/dashboard");
  return (
    <>
      <TestScreenLayout
        logOutHandler={clearCurrentUser}
        pageData={pageData}
        startTest={startTest}
        navigateBack={navigateBack}
        stuName={stuName}
      />
    </>
  );
};
export default TestScreen;
