import { Box, Grid, Typography } from "@mui/material"
import { CustomButton } from "../components/CustomButton"
import { CustomTextField } from "../components/CustomTextField"

export const ForgotPWLayout = (props) => {
    return <Grid container justifyContent="center" alignItems="center">
        <Grid xs={12} >
            <Typography variant='h3'><Box fontWeight="bold" mb={3} mt={9} sx={props.responsiveStype.ForgotPassword.Typo}>Forgot Password?</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Typography variant='body2' color="#838BA1"  fontSize="14px"  fontWeight={500}><Box mb={3} sx={props.responsiveStype.ForgotPassword.Typo}>No worries, You can reset your password by verifying your Phone Number with an OTP.</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    placeholder="Phone Number"
                    value={props.pageData.phoneNumber}
                    type="tel"
                    variant="filled"
                    endIcon={<img src='./images/flag.png' />}
                    required
                    error={props.submitFlag && props.getErrorMsz('phone_number', props.pageData.phoneNumber) != ""}
                    errorMsz={props.getErrorMsz('phone_number', props.pageData.phoneNumber)}
                    onChange={(event) => { props.setPageData({ ...props.pageData, phoneNumber: event.target.value }) }}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                />
            </Box>
        </Grid>
        <Grid xs={12}>
            <Box mb={20} width={1} sx={props.responsiveStype.ForgotPassword.Typo}>
                <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
            </Box>
        </Grid>
    </Grid>
}