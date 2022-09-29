import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';
import { useNavigate } from 'react-router-dom'
import { CustomSnackbar } from '../../components/CustomSnackbar';
import { responsiveStype } from '../../theme/responsive';

const SignUp = () => {
    const navigate = useNavigate();
    const [snakeBarProps, setSnakeBarProps] = useState({});

    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
        setSnakeBarProps({ snackbarFlag: true, msz: "You have sign up successfully.", type: "success" })
    }

    return (
        <Box>
            <Grid container>
                <Grid xs={12} >
                    <Typography variant='h3'><Box mb={2} mt={6} sx={responsiveStype.Signup.Typo}>Sign Up</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2'><Box mb={3} sx={responsiveStype.Signup.Typo}>Existing User? Enter your login details below,</Box></Typography>
                </Grid>
                <Grid xs={12}>
                    <Box mb={2} width={1}>
                        <CustomTextField
                            placeholder="Phone Number"
                            type="tel"
                            variant="filled"
                            value={pageData.phoneNumber}
                            onChange={(event) => { setPageData({ ...pageData, phoneNumber: event.target.value }) }}
                            endIcon={<img src='./images/flag.png' />}
                            required
                            error={submitFlag && getErrorMsz('phone_number', pageData.phoneNumber) != ""}
                            errorMsz={getErrorMsz('phone_number', pageData.phoneNumber)}
                        />
                    </Box>
                </Grid>
                <Grid xs={12}>
                    <Box mb={15} sx={responsiveStype.Signup.Typo}>
                        <CustomButton btnText="Sign Up" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
                    </Box>
                </Grid>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </Box>
    );
};
export default SignUp;