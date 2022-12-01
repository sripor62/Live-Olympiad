import React, { useState } from 'react';
import { afterValidate } from '../../services/commonService';
import { getErrorMsz } from '../../services/validator';
import { AuthLayout } from '../../designs/Auth/AuthLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { ForgotPWLayout } from '../../designs/Auth/ForgotPWLayout';
import { useNavigate } from 'react-router-dom';
import useAuthHelper from "../../hooks/useAuthHelper";
const ForgotPassword = () => {
    const navigate = useNavigate();
      const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", });
    const { generateOTP } = useAuthHelper();
    const submitHandler = async () => {
        afterValidate(afterValidateCallBack)
        let res = await generateOTP({
            phoneNumber: "+91" + pageData.phoneNumber,
            signUp: true,

        });
        if (res.data?.success) {
            navigate("/mobileverification/" + pageData.phoneNumber)

        }
        else {
            setSnakeBarProps({ snackbarFlag: true, msz: res.data.message, type: "error" })
        }
    };


    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
    }

    return <AuthLayout>
        <ForgotPWLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            setPageData={setPageData}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
            submitHandler={submitHandler}
        />
    </AuthLayout>
};
export default ForgotPassword;