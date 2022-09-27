import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';
import { UnAuthLayout } from './layout/UnAuthLayout';

const ForgotPassword = () => {
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
    }

    return <UnAuthLayout>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Grid xs={12} >
                <Typography variant='h3'><Box mb={3} mt={9} sx={{ textAlign: { xs: 'center', lg: 'left' }}}>Forgot Password?</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3} sx={{ textAlign: { xs: 'center', lg: 'left' }}}>No worries, You can reset your password by verifying your Phone Number with an OTP.</Box></Typography>
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
                <Box mb={20} width={1}>
                    <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
                </Box>
            </Grid>
        </Grid>
    </UnAuthLayout>
};
export default ForgotPassword;