import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
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
                    <Typography variant='h3'><Box mb={3} mt={9}>Sign Up</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2'><Box mb={3}>Existing User? Enter your login details below,</Box></Typography>
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
                        <CustomButton btnText="Sign Up"  color="primary" variant="contained" onClick={submitHandler} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default SignUp;