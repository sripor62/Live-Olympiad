import { Box, Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '.';
import { CustomButton } from '../../components/Button';
import { CustomOtp } from '../../components/otp';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';

const MobileVerification = () => {
    const navigate = useNavigate();
    const [submitFlag, setsubmitFlag] = useState(false)

    const savedOtp = 1234;
    const [otp, setOtp] = useState();
    const [hasErrored, setHasErrored] = useState(false);
    const [errorMsz, setErrorMsz] = useState("");
    const handleChangeOtp = (value) => {
        setOtp(value)
    }

    const submitHandler = () => {
        setsubmitFlag(true);
        setHasErrored(otp == undefined ? true : otp.length == 4 ? false : true);
        setErrorMsz(otp == undefined ? "Enter Otp" : otp.length == 4 ? "" : "Enter empty otp")
        if (otp != undefined && otp.length == 4) {
            afterValidate(afterValidateCallBack)
        }
    };

    const afterValidateCallBack = (second) => {
        console.log('otp', otp)
    }

    return <AuthLayout>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Grid xs={12} >
                <Typography variant='h3'><Box mb={1}>Mobile Verification</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>Enter the 4-Digit OTP recieved on +91 99999 99999 over WhatsApp</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomOtp value={otp} handleChange={handleChangeOtp} hasErrored={hasErrored} errorMsz={errorMsz} />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={16}>
                    <CustomButton btnText="Verify" color="primary" variant="contained" onClick={submitHandler} />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>WhatsApp necessary for OTP to work</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>OTP Not Recieved? <Link href="#" >Resend</Link></Box></Typography>
            </Grid>
        </Grid>
    </AuthLayout>
};

export default MobileVerification;