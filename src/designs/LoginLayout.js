import { Box, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { CustomButton } from "../components/CustomButton"
import { CustomSnackbar } from "../components/CustomSnackbar"
import { CustomTextField } from "../components/CustomTextField"

export const LoginLayout = (props) => {
    return <Box>
        <Grid container>
            <Grid xs={12}>
                <Typography variant='h3'><Box fontWeight="bold" mb={2} mt={6} sx={props.responsiveStype.Login.Typo}>Log In</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2' color="#838BA1"  fontSize="14px"  fontWeight={600}><Box mb={3} sx={props.responsiveStype.Login.Typo}>Existing User? Enter your login details below</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        placeholder="Phone Number"
                        variant="filled"
                        endIcon={<img src='./images/flag.png' />}
                        required
                        error={props.submitFlag && props.getErrorMsz('phone_number', props.pageData.phoneNumber) != ""}
                        errorMsz={props.getErrorMsz('phone_number', props.pageData.phoneNumber)}
                        onChange={(event) => { props.setPageData({ ...props.pageData, phoneNumber: event.target.value }) }}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        type="password"
                        placeholder="Password"
                        variant="filled"
                        required
                        error={props.submitFlag && props.getErrorMsz('password', props.pageData.password) != ""}
                        errorMsz={props.getErrorMsz('password', props.pageData.password)}
                        onChange={(event) => { props.setPageData({ ...props.pageData, password: event.target.value }) }}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1} textAlign="right" sx={{fontSize:"12px",fontFamily:'urbanist',fontWeight:"400"}}>
                    <Link href="" underline="none" color='inherit' onClick={() => props.navigate('/forgotpassword')}>Forgot Password?</Link>
                </Box>
            </Grid>
            <Grid xs={16} sx={props.responsiveStype.Login.Typo}>
                <CustomButton btnText="Log in" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
            </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </Box>
}