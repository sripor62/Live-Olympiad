import React, { useEffect, useState } from 'react'
import { afterValidate } from '../../services/commonService'
import { getErrorMsz } from '../../services/validator'
import HomeLayout from '../../designs/Dashboard/HomeLayout';
import { ProfileLayout } from '../../designs/Dashboard/ProfileLayout'
import { checkAuthCookie } from "../../services/helpers";
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
    useEffect(() => {
        checkAuthCookie();
    });
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
