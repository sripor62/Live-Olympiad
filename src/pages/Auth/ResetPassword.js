import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/CustomButton'
import { CustomTextField } from '../../components/CustomTextField'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import { CustomSnackbar } from '../../components/CustomSnackbar'
import { AuthLayout } from '../../designs/AuthLayout'
import { responsiveStype } from '../../beautifiers/responsive';
import { ResetPasswordLayout } from '../../designs/ResetPasswordLayout'

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
