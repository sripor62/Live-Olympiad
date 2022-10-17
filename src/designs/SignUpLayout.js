import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { CustomButton } from "../components/CustomButton"
import { CustomSnackbar } from "../components/CustomSnackbar"
import { CustomTextField } from "../components/CustomTextField"

export const SignUpLayout = (props) => {
    return <Box>
        <Grid container>
            <Grid xs={12} >
                <Typography variant='h3'><Box mb={2} mt={6} fontWeight="bold" sx={props.responsiveStype.Signup.Typo}>Sign Up</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2' color="#838BA1" fontSize="14px"  fontWeight={600}><Box mb={3} sx={props.responsiveStype.Signup.Typo}>New User? Enter your phone number below,</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        placeholder="Phone Number"
                        type="tel"
                        variant="filled"
                        value={props.props.pageData.phoneNumber}
                        onChange={(event) => { props.setPageData({ ...props.props.pageData, phoneNumber: event.target.value }) }}
                        endIcon={<img src='./images/flag.png' />}
                        required
                        error={props.submitFlag && props.getErrorMsz('phone_number', props.props.pageData.phoneNumber) != ""}
                        errorMsz={props.getErrorMsz('phone_number', props.props.pageData.phoneNumber)}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={15} sx={props.responsiveStype.Signup.Typo}>
                    <CustomButton btnText="Sign up" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
                </Box>
            </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
        
    </Box>
}