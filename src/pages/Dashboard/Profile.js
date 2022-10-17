import { Box, Grid, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../../components/CustomButton'
import { CustomTextField } from '../../components/CustomTextField'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import MenuItem from '@mui/material/MenuItem';
import { CustomSnackbar } from '../../components/CustomSnackbar'
import HomeLayout from '../../designs/HomeLayout';
import { Avatar } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { UserDetails } from '../../designs/UserDetails'
import { UserProfileForm } from '../../designs/UserProfileForm'
import { ProfileLayout } from '../../designs/ProfileLayout'
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

    const getProfile = () => {

    }

    useEffect(() => {
        getProfile();
    }, [])

    const setProfile = () => {

    }

    return (
        <HomeLayout>
            <ProfileLayout
                category={category}
                getErrorMsz={getErrorMsz}
                submitFlag={submitFlag}
                submitHandler={submitHandler}
                setPageData={setPageData}
                pageData={pageData}
                snakeBarProps={snakeBarProps}
                setSnakeBarProps={setSnakeBarProps}
            />
        </HomeLayout>

    );
};

export default Profile
