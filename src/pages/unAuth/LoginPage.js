import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/Button'
import { CustomSnackbar } from '../../components/CustomSnackbar'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'

export default function LoginPage() {
    const navigate = useNavigate();
    const [snakeBarProps, setSnakeBarProps] = useState({});

    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }

    return <Box>
        <Grid container>
            <Grid xs={12}>
                <Typography variant='h3'><Box mb={3} mt={9}>Log In</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>Existing User? Enter your login details below</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Phone Number"
                        variant="filled"
                        endIcon={<img src='./images/flag.png' />}
                        required
                        error={submitFlag && getErrorMsz('phone_number', pageData.phoneNumber) != ""}
                        errorMsz={getErrorMsz('phone_number', pageData.phoneNumber)}
                        onChange={(event) => { setPageData({ ...pageData, phoneNumber: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="password"
                        placeholder="Password"
                        variant="filled"
                        required
                        error={submitFlag && getErrorMsz('password', pageData.password) != ""}
                        errorMsz={getErrorMsz('password', pageData.password)}
                        onChange={(event) => { setPageData({ ...pageData, password: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1} textAlign="right">
                    <Link href="" underline="none" onClick={() => navigate('/forgotpassword')}>Forgot Password?</Link>
                </Box>
            </Grid>
            <Grid xs={12}>
                <CustomButton btnText="Login" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
            </Grid>
        </Grid>
        {
            Object.keys(snakeBarProps).length > 0 &&
            <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
        }
    </Box>
}
