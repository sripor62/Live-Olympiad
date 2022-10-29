import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getErrorMsz } from '../../services/validator'
import { responsiveStype } from '../../beautifiers/responsive';
import useAuthHelper from "../../hooks/useAuthHelper";
import { LoginLayout } from '../../designs/Auth/LoginLayout'
import { useStore } from "../../stores";
export default function Login() {
    const navigate = useNavigate();
    const setCurrentUser = useStore((state) => state.setCurrentUser);
    const [snakeBarProps, setSnakeBarProps] = useState({});
   
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });

   
    const { login } = useAuthHelper();
    const submitHandler = async() => {
       
        
        let res = await login({
            userName: "+91" + pageData.phoneNumber,
            password: pageData.password,
            loginForced:true,

        });
  
        if(res.data?.success) {
            setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "success" })
            setCurrentUser(res.data?.data);
            navigate("/schooldetails/"+res.data.data.id)
            
        }
        else setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "error" })
        // afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
      
    }
    const forgotPage=()=>{
       
        window.location.href="/forgotpassword"
    }
    return <LoginLayout
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
}
