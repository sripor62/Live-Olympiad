import { Box, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import { CustomButton } from "../../components/CustomButton"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { CustomTextField } from "../../components/CustomTextField"
import React from 'react';
export const LoginLayout = (props) => {
    const NumericOnly= (event) => { //angka only
        const reg = /^[0-9\b]+$/
        let preval=event.target.value
        if (event.target.value === '' || reg.test(event.target.value)) return true
        else event.target.value = preval.substring(0,(preval.length-1))
    }
    return <Box>
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ fontSize: { xs: "32px", lg: "40px" } }}>
                    <Box fontWeight="bold" mb={2} mt={6} sx={props.responsiveStype.Login.Typo}>Log In</Box>
                </Box>
            </Grid>
            
            <Grid item xs={12}>
                <Box fontWeight={600} sx={{ fontSize: { xs: "12px", lg: "14px" }, color: "#838BA1" }}>
                    <Box mb={3} sx={props.responsiveStype.Login.Typo}>Existing User? Enter your login details below.</Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        onKeyPress={(event) => {
                            if (event.code === "Enter") {
                                document.getElementById("clicked").click()
                            }
                        }}
                        type="tel"
                        placeholder="Phone Number"
                        variant="filled"
                        endIcon={<img alt="" src='./images/flag.png' />}
                        required
                        error={props.submitFlag && props.getErrorMsz('phone_number', props.pageData.phoneNumber) !== ""}
                        errorMsz={props.getErrorMsz('phone_number', props.pageData.phoneNumber)}
                        onChange={(event) => { 
                            props.setPageData({ ...props.pageData, phoneNumber: event.target.value });
                            NumericOnly(event);
                        }}
                        inputProps={{ maxLength: 10,sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        onKeyPress={(event) => {
                            if (event.code === "Enter") {
                                document.getElementById("clicked").click()
                            }
                        }}
                        placeholder={"PIN"}
                        variant="filled"
                        required
                        error={props.submitFlag && props.getErrorMsz('password', props.pageData.password) !== ""}
                        errorMsz={props.getErrorMsz('password', props.pageData.password)}
                        onChange={(event) => { props.setPageData({ ...props.pageData, password: event.target.value }) }}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' } }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mb={3} width={1} textAlign="right" sx={{ fontSize: "12px", fontFamily: 'urbanist', fontWeight: "bold" }} >
                    <Link to="#" href="" style={{ textDecoration: "none", color: "rgba(30,35,44,1)" }} onClick={props.forgotPage}>Forgot Password?</Link>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ justifyContent: { xs: 'center', lg: 'left' }, alignItems: { xs: 'center', lg: 'left' }, display: "flex" }}>
                <CustomButton id="clicked" btnText="Log in" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} sx={{ borderRadius: "50px" }} />
            </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </Box>
}