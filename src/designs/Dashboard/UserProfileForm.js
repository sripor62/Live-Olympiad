import { Box, Grid, MenuItem, Typography } from "@mui/material"
import { CustomTextField } from "../../components/CustomTextField"
import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query';
import { Button } from '@mui/material';
import { useStudent } from "../../hooks/useStudent"
import { AppConstants } from "../../environments/app-constants";
import { CustomButton } from "../../components/CustomButton"
export const UserProfileForm = (props) => {
    const [pageData, setPageData] = useState({
        "fullName": "",
        "email": "",
        "rollNumber": "",
        "dob": "",
        "gender": "",
        "pinCode": "",
        "school": "8bbcf6c6-3255-43b3-a17c-4dfa6ba5c690",
        "grade": "",
        "section": ""

    })
    const { getProfile } = useStudent();
    const { data: profileData, isLoading: contentLoader, refetch } = useQuery([`ProfileData`], () => getProfile(), { enabled: true, retry: false })

    const { profileDataDetails } = useStudent();
    useEffect(() => {


        var pdata = {
            ...profileData?.data.data,
        }
        setPageData({ ...pageData, ...pdata })
    }, [profileData])




    const profileSubmit = () => {
        alert("hey")
        var pdata = {
            ...pageData,
            fullName: pageData.fullName,
            email: pageData.email,
            rollNumber: pageData.rollNumber,
            dob: pageData.dob,
            gender: pageData.gender,
            pinCode: pageData.pinCode,
            school: "8bbcf6c6-3255-43b3-a17c-4dfa6ba5c690",
            grade: pageData.grade,
            section: pageData.section

        }

        addProfileMutate({ data: pdata })

    }
    const { mutate: addProfileMutate, isLoading: addProfileLoading } = useMutation(profileDataDetails)


    return <>
        <Grid container p={4} alignItems='center' justifyContent='center' >
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <Typography variant='h6' fontWeight="bold"><Box>Edit Information</Box></Typography>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>

                    <CustomTextField
                        placeholder="Full Name"
                        variant="filled"
                        value={pageData.fullName}
                        onChange={(event) => { setPageData({ ...pageData, fullName: event.target.value }) }}
                        required
                        error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.fullName) !== ""}
                        errorMsz={props.getErrorMsz('student_section', props.pageData.fullName)}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                    <CustomTextField
                        placeholder="Gender"
                        variant="filled"
                        value={pageData.gender}
                        required
                        onChange={(event) => { setPageData({ ...pageData, gender: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('gender', props.pageData.gender) !== ""}
                        errorMsz={props.getErrorMsz('gender', props.pageData.gender)}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}>
                        {props.category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </CustomTextField>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="Roll No."
                    variant="filled"
                    value={pageData.rollNumber}
                    onChange={(event) => { setPageData({ ...pageData, rollNumber: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.rollNumber) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.rollNumber)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid container spacing={1}>

                <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
                    <CustomTextField
                        placeholder="Class"
                        variant="filled"
                        value={pageData.grade}
                        onChange={(event) => { setPageData({ ...pageData, grade: event.target.value }) }}
                        required
                        error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.grade) !== ""}
                        errorMsz={props.getErrorMsz('student_section', props.pageData.grade)}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                    <CustomTextField
                        placeholder="Section"
                        variant="filled"
                        value={pageData.section}
                        onChange={(event) => { setPageData({ ...pageData, section: event.target.value }) }}
                        required
                        error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.section) !== ""}
                        errorMsz={props.getErrorMsz('student_section', props.pageData.section)}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="Date of Birth"
                    id="date"
                    type="date"
                    required
                    variant="filled"
                    value={pageData.dob}
                    onChange={(event) => { setPageData({ ...pageData, dob: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('dob', props.pageData.dob) !== ""}
                    errorMsz={props.getErrorMsz('dob', props.pageData.dob)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    type="email"
                    placeholder="Email Address (Optional)"
                    variant="filled"
                    value={pageData.email}
                    required
                    onChange={(event) => { setPageData({ ...pageData, email: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('email', props.pageData.email) !== ""}
                    errorMsz={props.getErrorMsz('email', props.pageData.email)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="School Area Postal Code"
                    variant="filled"
                    value={pageData.pinCode}
                    onChange={(event) => { setPageData({ ...pageData, pinCode: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.pinCode) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.pinCode)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="School"
                    variant="filled"
                    value={pageData.school}
                    onChange={(event) => { setPageData({ ...pageData, school: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_school', props.pageData.school) !== ""}
                    errorMsz={props.getErrorMsz('student_school', props.pageData.school)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <CustomButton btnText="Save" className="minWidth240"variant="contained" onClick={profileSubmit} style={{ marginRight: 10 }}/>
        </Grid>
    </>
}