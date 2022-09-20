import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';

const MobileVerification = () => {
    const navigate = useNavigate();
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
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
                        <CustomTextField
                            placeholder="Phone Number"
                            value={pageData.phoneNumber}
                            type="tel"
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
                    <Box mb={16}>
                        <CustomButton btnText="Verify"  color="primary" variant="contained" onClick={submitHandler} />
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