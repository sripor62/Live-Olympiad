import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getErrorMsz } from "../../services/validator";
import { responsiveStype } from "../../beautifiers/responsive";
import useAuthHelper from "../../hooks/useAuthHelper";
import { LoginLayout } from "../../designs/Auth/LoginLayout";
import { useStore } from "../../stores";
import { useQuery } from "react-query";
import { useStudent } from "../../hooks/useStudent";
import { environment } from "../../environments/environment";

export default function Login() {
  const navigate = useNavigate();
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  const [snakeBarProps, setSnakeBarProps] = useState({});

  const [submitFlag, setsubmitFlag] = useState(false);
  const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });
  const {getEducation,getPersonalData}=useStudent();

  const { data: personalData } = useQuery(
    [`PersonalData`, currentUser],
    () => getPersonalData(currentUser?.id),
    { enabled: !!currentUser?.id, retry: false }
  );
  const { data: educationData } = useQuery(
    [`educationData`, currentUser],
    () => getEducation(currentUser?.id),
    { enabled: !!currentUser?.id, retry: false }
  );

  const { login } = useAuthHelper();
  const submitHandler = async () => {
    let phoneFlag = /^\d{10}$/.test(pageData.phoneNumber);
    let pinFlag = /^\d{6}$/.test(pageData.password);
    if(!phoneFlag){
      setSnakeBarProps({
        snackbarFlag: true,
        msz: "Please enter valid phone number",
        type: "error",
      });
      return;
    }

    if(!pinFlag){
      setSnakeBarProps({
        snackbarFlag: true,
        msz: "Please enter valid 6 digit password",
        type: "error",
      });
      return;
    }

    let res = await login({
      userName: "+91" + pageData.phoneNumber,
      password: pageData.password,
      loginForced: true,
    });
    if (res.data?.success) {
      setSnakeBarProps({
        snackbarFlag: true,
        msz: res.data.message,
        type: "success",
      });
      setCurrentUser(res.data?.data);
     
    } else{
      if (environment.env!=="school" && res.data?.message.includes("not found")) window.location.href = "/1";
      setSnakeBarProps({
        snackbarFlag: true,
        msz: res.data.message,
        type: "error",
      });
    }
    // afterValidate(afterValidateCallBack)
  };

  useEffect(() => {
    if(educationData!==undefined && personalData!==undefined){
      if (personalData?.data?.data?.id === null) {
        navigate("/personaldetails/" + currentUser?.id);
      } else if (!educationData?.data?.data?.length>0) {
        navigate("/schooldetails/" + currentUser?.id);
      } else {
        window.localStorage.setItem("grade", educationData?.data?.data[0].grade);
        window.localStorage.setItem("school", educationData?.data?.data[0].school);        
        navigate("/dashboard");
      }
    }
  }, [currentUser,educationData,personalData])
  

  const afterValidateCallBack = (second) => {};
  const forgotPage = () => {
    window.location.href = "/forgotpassword";
  };
  return (
    <LoginLayout
      forgotPage={forgotPage}
      responsiveStype={responsiveStype}
      submitFlag={submitFlag}
      getErrorMsz={getErrorMsz}
      pageData={pageData}
      setPageData={setPageData}
      navigate={navigate}
      submitHandler={submitHandler}
      snakeBarProps={snakeBarProps}
      setSnakeBarProps={setSnakeBarProps}
    />
  );
}
