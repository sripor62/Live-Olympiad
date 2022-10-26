import React, { useEffect, useState } from 'react';
import { getErrorMsz } from '../../services/validator';
import { useNavigate } from 'react-router-dom'
import { responsiveStype } from '../../beautifiers/responsive';
import useAuthHelper from "../../hooks/useAuthHelper";
import { SignUpLayout } from '../../designs/Auth/SignUpLayout';
const SignUp = () => {
    const navigate = useNavigate();
    const [snakeBarProps, setSnakeBarProps] = useState({});

    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "" });
    const [otpSent,setOtpSent]=useState(false);

    const { generateOTP } = useAuthHelper();

    const submitHandler = async() => {
            
            
                let res = await generateOTP({
                    phoneNumber: "+91" + pageData.phoneNumber,
                    signUp: true,
              
                });
                if(res.data?.success){
                    setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "success" })
                    navigate("/mobileverification/"+pageData.phoneNumber)
                }else{
                setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "error" })
                }
                };
                 
                 const afterValidateCallBack = (second) => {
        
                setSnakeBarProps({ snackbarFlag: true, msz: "You have sign up successfully.", type: "success" })
    }
 
    return (
        <SignUpLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            setPageData={setPageData}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
            submitHandler={submitHandler}
        />
    );
   

};
export default SignUp;