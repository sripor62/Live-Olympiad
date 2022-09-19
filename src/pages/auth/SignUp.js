import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';

const SignUp = () => {

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
                        <Typography variant='h3'><Box mb={3} mt={9}>Sign Up</Box></Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant='body2'><Box mb={3}>Existing User? Enter your login details below,</Box></Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Box mb={3} width={1}>
                            <CustomTextField placeholder="Phone Number" value={pageData.phoneNumber} type="tel" variant="filled"
                                onChange={(event) => {
                                    setPageData({ ...pageData, phoneNumber: event.target.value })
                                }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <CustomButton btnText="Sign Up" color="primary" variant="contained" onClick={submitHandler} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};


export default SignUp;