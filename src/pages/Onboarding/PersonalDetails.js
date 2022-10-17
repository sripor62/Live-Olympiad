import { Box, Grid, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/CustomButton'
import { CustomTextField } from '../../components/CustomTextField'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import MenuItem from '@mui/material/MenuItem';
import { CustomSnackbar } from '../../components/CustomSnackbar'
import { responsiveStype } from '../../beautifiers/responsive';
import { OnboardingLayout } from '../../designs/OnboardingLayout';
import { PersonalDetailLayout } from '../../designs/PersonalDetailLayout'


export default function PersonalDetails() {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ fullname: "", gender: "", rollno: "", dob: "", email: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }
    return <OnboardingLayout stepperIndex="1">
        <PersonalDetailLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            setPageData={setPageData}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
        />
    </OnboardingLayout>
}
