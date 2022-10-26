import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { afterValidate } from '../../services/commonService';
import { AuthLayout } from '../../designs/Auth/AuthLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import useAuthHelper from "../../hooks/useAuthHelper";
import { MobileVerificationLayout } from '../../designs/Auth/MobileVerificationLayout';


const MobileVerification = (props) => {
    const navigate = useNavigate();
    const [submitFlag, setsubmitFlag] = useState(false);
    const [snakeBarProps, setSnakeBarProps] = useState({});
    // const {validateOTP} = useAuthHelper();
    const savedOtp = 1234;
    const [otp, setOtp] = useState();
    const [hasErrored, setHasErrored] = useState(false);
    const [errorMsz, setErrorMsz] = useState("");
    const [mobNum, setMobNum] = useState("9897969592")
    const params=useParams();

    const { validateOTP, generateOTP } = useAuthHelper();
    const handleChangeOtp = (value) => {
        setOtp(value)
    }
    const submitOtpAgain = async() => {
            
            
        let res = await generateOTP({
            phoneNumber: "+91" + params.phoneNumber,
            signUp: false,
      
        });
        if(res.data?.success){
            setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "success" })
            navigate("/mobileverification/"+params.phoneNumber)
        }else{
        setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "error" })
        }
        };
         
        
    const submitHandler = async () => {
        setsubmitFlag(true);
        setHasErrored(otp == undefined ? true : otp.length == 6 ? false : true);
        setErrorMsz(otp == undefined ? "Enter Otp" : otp.length == 6 ? "" : "Enter empty otp")
        console.log(params.phoneNumber);
        let validateOtpReqBody = { otp: +otp ,phoneNumber: "+91" + params.phoneNumber};

        let res = await validateOTP({
            ...validateOtpReqBody,
            loginAfterVerify: true,
          });
          if (res.data?.success){
            console.log("Hey yoy got it")
            console.log(res.data.data.access_token)
            window.location.href= "/createnewpassword/" + res.data.data.access_token
          }
        //   if (res.data?.success) {
        //     setCurrentUser(res.data?.data);
    
        //   }
        if (otp != undefined && otp.length == 6) {
            afterValidate(afterValidateCallBack)
        }
    };

    const afterValidateCallBack = (second) => {
        console.log('otp', otp)
        setSnakeBarProps({ snackbarFlag: true, msz: "Mobile number verified", type: "success" })
    }

    return <AuthLayout>
        <MobileVerificationLayout
            otp={otp}
            responsiveStype={responsiveStype}
            mobNum={mobNum}
            hasErrored={hasErrored}
            errorMsz={errorMsz}
            handleChangeOtp={handleChangeOtp}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
            submitHandler={submitHandler}
            submitOtpAgain={submitOtpAgain}
        />
    </AuthLayout>
};

export default MobileVerification;