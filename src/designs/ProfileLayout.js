import { Grid } from "@mui/material"
import { CustomSnackbar } from "../components/CustomSnackbar"
import { UserDetails } from "./UserDetails"
import { UserProfileForm } from "./UserProfileForm"

export const ProfileLayout = (props) => {
    return <>
    <Grid container p={4}>
        <UserDetails/>
        <UserProfileForm category={props.category} getErrorMsz={props.getErrorMsz} submitFlag={props.submitFlag} pageData={props.pageData} setPageData={props.setPageData}/>
    </Grid>
    {
        Object.keys(props.snakeBarProps).length > 0 &&
        <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
    }
    </>
}