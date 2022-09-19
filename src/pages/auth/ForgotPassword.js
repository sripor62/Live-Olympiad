import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';

const ForgotPassword = () => {

    const submitHandler = () => {
        console.log(pageData)

    }

    const [pageData, setPageData] = useState({
        phoneNumber: "",
    });


    return (
        <>
            <Box>
                <Grid container>
                    <Grid xs={12} >
                        <Typography variant='h3'><Box mb={3} mt={9}>Forgot Password?</Box></Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant='body2'><Box mb={3}>No worries, You can reset your password by verifying your Phone Number with an OTP.</Box></Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Box mb={3} width={1}>
                            <CustomTextField placeholder="Phone Number" value={pageData.phoneNumber} type="tel" variant="filled"
                                onChange={(event) => {
                                    console.log(event.target.value)
                                    setPageData({ ...pageData, phoneNumber: event.target.value })
                                }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <CustomButton btnText="Next" color="primary" variant="contained" onClick={submitHandler} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ForgotPassword;