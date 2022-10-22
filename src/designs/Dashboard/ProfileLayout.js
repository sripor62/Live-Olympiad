import { Grid } from "@mui/material"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { UserDetails } from "./UserDetails"
import { UserProfileForm } from "./UserProfileForm"

export const ProfileLayout = (props) => {
    return <>
    <Grid container p={4} spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}><UserDetails/></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}><UserProfileForm category={props.category} getErrorMsz={props.getErrorMsz} submitFlag={props.submitFlag} pageData={props.pageData} setPageData={props.setPageData}/></Grid>
    </Grid>
    {
        Object.keys(props.snakeBarProps).length > 0 &&
        <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
    }
    </>
}