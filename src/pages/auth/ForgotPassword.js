import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/CustomButton';
import { CustomTextField } from '../../components/CustomTextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';
import { AuthLayout } from '../../designs/AuthLayout';
import { responsiveStype } from '../../theme/responsive';

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

    return <AuthLayout>
        <Grid container justifyContent="center" alignItems="center">
            <Grid xs={12} >
                <Typography variant='h3'><Box fontWeight="bold" mb={3} mt={9} sx={responsiveStype.ForgotPassword.Typo}>Forgot Password?</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2' color="#838BA1"  fontSize="14px"  fontWeight={500}><Box mb={3} sx={responsiveStype.ForgotPassword.Typo}>No worries, You can reset your password by verifying your Phone Number with an OTP.</Box></Typography>
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
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={20} width={1} sx={responsiveStype.ForgotPassword.Typo}>
                    <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
                </Box>
            </Grid>
        </Grid>
    </AuthLayout>
};
export default ForgotPassword;