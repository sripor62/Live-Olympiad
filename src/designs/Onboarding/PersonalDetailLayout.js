import { Box, Grid, MenuItem, Select, Typography } from "@mui/material"
import { CustomButton } from "../../components/CustomButton"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { CustomTextField } from "../../components/CustomTextField"

export const PersonalDetailLayout = (props) => {
    return <>
    <Grid container xs="12">
        <Grid xs={12}>
            <Typography variant='h3' sx={{fontSize:{xs:"32px",lg:"40px"}}}><Box mb={3} mt={5} fontWeight="bold" sx={props.responsiveStype.Personal.Typo}>Personal Details</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Typography variant='body2' fontWeight="medium" sx={{color:"rgba(131,139,161,1)",fontSize:{xs:"12px",lg:"14px"}}}><Box mb={3} sx={props.responsiveStype.Personal.Typo}>Enter the personal details of the student. </Box></Typography>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        type="text"
                        placeholder="Full Name"
                        variant="filled"
                        required
                        onChange={(event) => { props.setPageData({ ...props.pageData, fullname: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('fullname', props.pageData.fullname) != ""}
                        errorMsz={props.getErrorMsz('fullname', props.pageData.fullname)}
                        inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}} />
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Gender"
                        variant="filled"
                        required
                        onChange={(event) => { props.setPageData({ ...props.pageData, gender: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('gender', props.pageData.gender) != ""}
                        errorMsz={props.getErrorMsz('gender', props.pageData.gender)}
                        inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}>
                        <Select>
                            <MenuItem>F</MenuItem>
                            <MenuItem>M</MenuItem>
                        </Select>
                    </CustomTextField>
                </Box>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    placeholder="RollNo"
                    variant="filled"
                    required
                    onChange={(event) => { props.setPageData({ ...props.pageData, rollno: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('rollno', props.pageData.rollno) != ""}
                    errorMsz={props.getErrorMsz('rollno', props.pageData.rollno)} 
                    inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}/>
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    placeholder="Date of Birth"
                    id="date"
                    type="date"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    onChange={(event) => { props.setPageData({ ...props.pageData, dob: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('dob', props.pageData.dob) != ""}
                    errorMsz={props.getErrorMsz('dob', props.pageData.dob)} 
                    inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}/>
            </Box>
        </Grid>
        <Grid item  xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    type="email"
                    placeholder="Email Address(Optional)"
                    variant="filled"
                    required
                    onChange={(event) => { props.setPageData({ ...props.pageData, email: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('email', props.pageData.email) != ""}
                    errorMsz={props.getErrorMsz('email', props.pageData.email)} 
                    inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}/>
            </Box>
        </Grid>
        <Grid xs={12} sx={{justifyContent: { xs: 'center', lg: 'left' },alignItems: { xs: 'center', lg: 'left' },display:"flex"}}>
            <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} sx={{borderRadius:"50px"}} />
        </Grid>
    </Grid>
    {
        Object.keys(props.snakeBarProps).length > 0 &&
        <CustomSnackbar {...props.snakeBarProps}  setSnakeBarProps={props.setSnakeBarProps} />
    }
    </>
}