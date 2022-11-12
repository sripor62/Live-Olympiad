import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { CustomButton } from "../../components/CustomButton"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { CustomTextField } from "../../components/CustomTextField"

export const SignUpLayout = (props) => {
    return <Box>
        <Grid container>
            <Grid  item xs={12} >
                <Typography variant='h3'  sx={{fontSize:{xs:"32px",lg:"40px"}}}><Box mb={2} mt={6} fontWeight="bold"  sx={props.responsiveStype.Signup.Typo}>Sign Up</Box></Typography>
            </Grid>
            <Grid  item xs={12}>
                <Typography variant='body2'   sx={{fontSize:{xs:"12px",lg:"14px"},color:"#838BA1"}}  fontWeight={600}><Box mb={3} sx={props.responsiveStype.Signup.Typo}>Existing User? Enter your phone number below.</Box></Typography>
            </Grid>
            <Grid  item xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        onKeyPress={(event) => {
                            
                            if(event.code=="Enter")
                            {
                             
                             document.getElementById("clicked").click()
                            }
                         }}
                        placeholder="Phone Number"
                        type="tel"
                        variant="filled"
                        value={props.pageData.phoneNumber}
                        onChange={(event) => { props.setPageData({ ...props.pageData, phoneNumber: event.target.value }) }}
                        endIcon={<img src='./images/flag.png' />}
                        required
                        error={props.submitFlag && props.getErrorMsz('phone_number', props.pageData.phoneNumber) != ""}
                        errorMsz={props.getErrorMsz('phone_number', props.pageData.phoneNumber)}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
                </Box>
            </Grid>
            <Grid  item xs={12}>
                <Box mb={15} sx={{justifyContent: { xs: 'center', lg: 'left' },alignItems: { xs: 'center', lg: 'left' },display:"flex"}}>
                    <CustomButton id="clicked" btnText="Sign Up" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} sx={{borderRadius:"50px"}} />
                </Box>
            </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
        
    </Box>
}