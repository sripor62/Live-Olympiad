import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getErrorMsz } from '../../services/validator'
import { responsiveStype } from '../../beautifiers/responsive';
import useAuthHelper from "../../hooks/useAuthHelper";
import { LoginLayout } from '../../designs/Auth/LoginLayout'

export default function Login() {
    const navigate = useNavigate();
    const [snakeBarProps, setSnakeBarProps] = useState({});

    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });

   
    const { login } = useAuthHelper();
    const submitHandler = async() => {
        console.log("pageData>>>",pageData)

        let res = await login({
            userName: "+91" + pageData.phoneNumber,
            password: pageData.password,
            loginForced:true,

        });
  
        if(res.data?.success) {
            setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "success" })
            navigate("/dashboard")
        }
        else setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "error" })
        // afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
      
    }

    return <LoginLayout
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
}
