import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import { CustomButton } from "../../components/CustomButton"
import { CustomOtp } from "../../components/CustomOtp"
import { CustomSnackbar } from "../../components/CustomSnackbar"

export const MobileVerificationLayout = (props) => {
    return <Grid container mt={4} justifyContent="center" alignItems="center">
        <Grid xs={6} lg={12} >
            <Typography variant='h2' fontSize="40px" fontWeight="bold"><Box mb={1}  width="160px" sx={props.responsiveStype.Mobilever.Typo} >Mobile Verification</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Typography variant='body2' fontSize="14px" fontHeight="medium"><Box mb={3} sx={props.responsiveStype.Mobilever.Typo}>Enter the 6-Digit OTP recieved on +91-{props.mobNum} over WhatsApp</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Box mb={2} width={1}>
                <CustomOtp value={props.otp} handleChange={props.handleChangeOtp} hasErrored={props.hasErrored} errorMsz={props.errorMsz} />
            </Box>
        </Grid>
        <Grid xs={12}>
            <Box mb={2} sx={props.responsiveStype.Mobilever.Typo}>
                <CustomButton btnText="Verify" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
            </Box>
        </Grid>
        <Grid xs={12}>
            <Typography variant='body2' fontWeight='bold' fontSize='12px'><Box mb={10} sx={props.responsiveStype.Mobilever.Typo}>WhatsApp necessary for OTP to work</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Typography variant='body2'  fontWeight='medium'><Box mb={3} mt={18} sx={props.responsiveStype.Mobilever.Typo}>OTP Not Recieved? <Link href="#" underline="none" fontWeight="bold">Resend</Link></Box></Typography>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </Grid>
}