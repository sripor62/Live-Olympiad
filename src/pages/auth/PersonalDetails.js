import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '.'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'

export default function PersonalDetails() {

    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ fullname: "", gender: "",rollno:"",dob:"",email:"" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
    }
    return <AuthLayout>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Grid container xs="10">
                <Grid xs={12}>
                    <Typography variant='h3'><Box mb={3} mt={9}>Personal Details</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2'><Box mb={3}>Enter the personal details of the student </Box></Typography>
                </Grid>
                <Grid xs={7}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            type="text"
                            placeholder="Full Name"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, fullname: event.target.value }) }}
                            error={submitFlag && getErrorMsz('fullname', pageData.fullname) != ""}
                            errorMsz={getErrorMsz('fullname', pageData.fullname)} />
                    </Box>
                </Grid>
                <Grid xs={4}>
                    <Box mb={3} width={1} ml={4}>
                        <CustomTextField
                            type="text"
                            placeholder="Gender"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, gender: event.target.value }) }}
                            error={submitFlag && getErrorMsz('gender', pageData.gender) != ""}
                            errorMsz={getErrorMsz('gender', pageData.gender)} />
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            placeholder="RollNo"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, rollno: event.target.value }) }}
                            error={submitFlag && getErrorMsz('rollno', pageData.rollno) != ""}
                            errorMsz={getErrorMsz('rollno', pageData.rollno)} />
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            placeholder="Date of Birth"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, dob: event.target.value }) }}
                            error={submitFlag && getErrorMsz('dob', pageData.dob) != ""}
                            errorMsz={getErrorMsz('dob', pageData.dob)} />
                    </Box>
                </Grid>
                <Grid xs={12}>
                <Grid xs={12}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            type="email"
                            placeholder="Email Address"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, email: event.target.value }) }}
                            error={submitFlag && getErrorMsz('email', pageData.email) != ""}
                            errorMsz={getErrorMsz('email', pageData.email)} />
                    </Box>
                </Grid>
                    <CustomButton btnText="Next" color="primary" variant="contained" onClick={submitHandler} />
                </Grid>
            </Grid>
        </Grid>
    </AuthLayout>
}
