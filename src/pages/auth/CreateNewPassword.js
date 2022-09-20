import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'
import { AuthLayout } from '.';

export default function ResetPassword() {
    const navigate = useNavigate();

    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
    }
    return <AuthLayout>
        <Box sx={{ml:5,mt:8}}>
            <Grid container  justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                <Grid xs={12}>
                    <Typography variant='h3'><Box mb={3} mt={9}>Create New Password</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2'><Box mb={3}>Create on Unique 6 Digit Numeric Password </Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            type="Password"
                            placeholder="New Password"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, password: event.target.value }) }}
                            error={submitFlag && getErrorMsz('password', pageData.password) != ""}
                            errorMsz={getErrorMsz('password', pageData.password)} />
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            type="Password"
                            placeholder="Confirm Password"
                            variant="filled"
                            onChange={(event) => { setPageData({ ...pageData, confirmpassword: event.target.value }) }}
                            error={submitFlag && getErrorMsz('confirmpassword', pageData.confirmpassword) != ""}
                            errorMsz={getErrorMsz('confirmpassword', pageData.confirmpassword)} />
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <CustomButton btnText="Confirm Password" color="primary" variant="contained" onClick={submitHandler} />
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
}
