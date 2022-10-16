import { Box, Grid, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'
import MenuItem from '@mui/material/MenuItem';
import { CustomSnackbar } from '../../components/CustomSnackbar'
import DashboardLayout from '../../components/Auth/DashboardLayout';
import { Avatar } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { UserDetails } from '../../components/Profile/UserDetails'
import { UserProfileForm } from '../../components/Profile/UserProfileForm'
const category = [
    {
        label: "F",
        value: 1
    },
    {
        label: "M",
        value: 2
    }
]

const Profile = () => {
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
    return (
        <DashboardLayout>
            <Grid container p={4}>
                <UserDetails/>
                <UserProfileForm category={category} getErrorMsz={getErrorMsz} submitFlag={submitFlag} pageData={pageData} setPageData={setPageData}/>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </DashboardLayout>

    );
};

export default Profile