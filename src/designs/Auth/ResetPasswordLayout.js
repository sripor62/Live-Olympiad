import { Box, Grid, Typography } from "@mui/material"
import { CustomButton } from "../../components/CustomButton"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { CustomTextField } from "../../components/CustomTextField"

export const ResetPasswordLayout = (props) => {
    return <>
        <Grid container justifyContent="center" alignItems="center" >
            <Grid xs={12}>
                <Typography variant='h3'><Box mb={3} fontWeight="bold" fontSize="40px" sx={props.responsiveStype.ResetPassword.Typo}>Reset Password</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2' color="#838BA1"><Box mb={3} sx={props.responsiveStype.ResetPassword.Typo}>Create on Unique 6 Digit Numeric Password </Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="password"
                        placeholder=" New Password"
                        variant="filled"
                        required
                        error={props.submitFlag && props.getErrorMsz('password', props.pageData.password) != ""}
                        errorMsz={props.getErrorMsz('password', props.pageData.password)}
                        onChange={(event) => { props.setPageData({ ...props.pageData, password: event.target.value }) }}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="Password"
                        placeholder="Confirm Password"
                        variant="filled"
                        required
                        onChange={(event) => { props.setPageData({ ...props.pageData, confirmpassword: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('conrfirm_password', props.pageData.confirmpassword) != ""}
                        errorMsz={props.getErrorMsz('conrfirm_password', props.pageData.confirmpassword)}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                        />
                        
                </Box>
            </Grid>
            <Grid xs={12} mb={14} sx={{justifyContent: { xs: 'center', lg: 'left' },alignItems: { xs: 'center', lg: 'left' },display:"flex"}}>
                <CustomButton btnText="Confirm Password" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
            </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </>
}