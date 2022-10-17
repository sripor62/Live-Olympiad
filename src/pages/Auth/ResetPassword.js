import React, { useState } from 'react'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import { AuthLayout } from '../../designs/Auth/AuthLayout'
import { responsiveStype } from '../../beautifiers/responsive';
import { ResetPasswordLayout } from '../../designs/Auth/ResetPasswordLayout'

export default function ResetPassword() {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ password: "", confirmpassword: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }
    return <AuthLayout>
        <ResetPasswordLayout
            responsiveStype={responsiveStype}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            pageData={pageData}
            setPageData={setPageData}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
        />
    </AuthLayout>
}
