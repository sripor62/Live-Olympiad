import { Box, Grid, Typography } from "@mui/material"
import { CustomButton } from "../../components/CustomButton"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { CustomTextField } from "../../components/CustomTextField"

export const NewPasswordLayout = (props) => {
    return <>
        <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <Typography variant='h3'  sx={{fontSize:{xs:"32px",lg:"40px"},p:{xs:3,lg:0}}}><Box  mb={3} fontWeight="bold" sx={props.responsiveStype.CreatePassword.Typo}>Create New Password</Box></Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body2' color="#838BA1" sx={{ml:{xs:3,lg:0}}}><Box display="flex" mb={3} sx={props.responsiveStype.ResetPassword.Typo}>Create on Unique <Typography variant='body2' color="#FF7A00" ml={0.4} mr={0.4} fontFamily="Urbanist">6 Digit Numeric </Typography> Password </Box></Typography>
        </Grid>
        <Grid item xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    onKeyPress={(event) => {
                           
                        if(event.code=="Enter")
                        {
                        
                         document.getElementById("clicked").click()
                        }
                     }}
                    placeholder="New Password"
                    variant="filled"
                    required
                    error={props.submitFlag && props.getErrorMsz('password', props.pageData.password) != ""}
                    errorMsz={props.getErrorMsz('password', props.pageData.password)}
                    onChange={(event) => { props.setPageData({ ...props.pageData, password: event.target.value }) }}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                />
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    onKeyPress={(event) => {
                       if(event.code=="Enter")
                        {
                        document.getElementById("clicked").click()
                        }
                     }}
                    placeholder="Confirm Password"
                    variant="filled"
                    required
                    onChange={(event) => { props.setPageData({ ...props.pageData, confirmpassword: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('conrfirm_password', props.pageData.confirmpassword) != ""}
                    errorMsz={props.getErrorMsz('conrfirm_password', props.pageData.confirmpassword)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                     />
            </Box>
        </Grid>
        <Grid item xs={12} mb={8} sx={{justifyContent: { xs: 'center', lg: 'left' },alignItems: { xs: 'center', lg: 'left' },display:"flex"}}>
            <CustomButton  id="clicked"  btnText="Confirm Password" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} sx={{borderRadius:"50px"}}/>
        </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </>
}