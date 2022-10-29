import React, { useState } from 'react'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import { AuthLayout } from '../../designs/Auth/AuthLayout'
import { responsiveStype } from '../../beautifiers/responsive';
import useAuthHelper from "../../hooks/useAuthHelper";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { NewPasswordLayout } from '../../designs/Auth/NewPasswordLayout'
export default function ResetPassword() {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });
    const { setPassword } = useAuthHelper();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();

    const submitHandler = async() => {
        if (pageData.password===pageData.confirmpassword && pageData.password.length>=6) {
            let res = await setPassword(pageData.password, params.token);
            if (res.data?.success) {
                navigate("/"+0)
            
           
                
            }
        } else setSnakeBarProps({ snackbarFlag: true, msz: "Passwords do not match", type: "error" })
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }

    return <AuthLayout>
        <NewPasswordLayout
            responsiveStype={responsiveStype} 
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            pageData={pageData}
            setPageData={setPageData}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
            submitHandler={submitHandler}
        />
    </AuthLayout>
}
