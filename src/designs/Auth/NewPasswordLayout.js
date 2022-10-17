import { Box, Grid, Typography } from "@mui/material"
import { CustomButton } from "../../components/CustomButton"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { CustomTextField } from "../../components/CustomTextField"

export const NewPasswordLayout = (props) => {
    return <>
        <Grid container justifyContent="center" alignItems="center" >
        <Grid xs={6} lg={12}>
            <Typography variant='h3'><Box mb={3} fontWeight="bold" sx={props.responsiveStype.CreatePassword.Typo}>Create New Password</Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Typography variant='body2'><Box mb={3} sx={props.responsiveStype.CreatePassword.Typo}>Create on Unique 6 Digit Numeric Password </Box></Typography>
        </Grid>
        <Grid xs={12}>
            <Box mb={3} width={1}>
                <CustomTextField
                    type="password"
                    placeholder="Password"
                    variant="filled"
                    required
                    error={props.submitFlag && props.getErrorMsz('password', props.pageData.password) != ""}
                    errorMsz={props.getErrorMsz('password', props.pageData.password)}
                    onChange={(event) => { props.setPageData({ ...props.pageData, password: event.target.value }) }}
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
                    errorMsz={props.getErrorMsz('conrfirm_password', props.pageData.confirmpassword)} />
            </Box>
        </Grid>
        <Grid xs={12} mb={8} sx={props.responsiveStype.CreatePassword.Typo}>
            <CustomButton  btnText="Confirm Password" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
        </Grid>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </>
}