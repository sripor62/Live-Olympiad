import { Box, Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';

const MobileVerification = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [submitFlag, setsubmitFlag] = useState(false)
    const [otp, setOtp] = useState("");

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('otp', otp)
    }

    return (
        <Box>
            <Grid container>
                <Grid xs={12} >
                    <Typography variant='h3'><Box mb={1} mt={9}>Mobile</Box></Typography>
                    <Typography variant='h3'><Box mb={3}>Verification</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2'><Box mb={3}>Enter the 4-Digit OTP recieved on +91 99999 99999 over WhatsApp</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Box mb={3} width={1}>
                        <OtpInput
                            numInputs={4}
                            value={otp}
                            onChange={(val) => {
                                setOtp(val);
                            }}
                            focusInput={1}
                            focusStyle={{
                                borderWidth: 1
                            }}
                            inputStyle={{
                                width: matches ? "25px" : "40px",
                                height: matches ? "30px" : "45px",
                                borderWidth: 1,
                                borderRadius: 2,

                            }}
                            sx={{

                                "&:focus": {
                                    backgroundColor: "red",
                                },
                                "&:hover": {
                                    backgroundColor: "green",
                                },
                            }}
                            isInputNum={true}
                        />
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
        </Box>
    );
};

export default MobileVerification;