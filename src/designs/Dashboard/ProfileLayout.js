import { Grid } from "@mui/material"
import { CustomSnackbar } from "../../components/CustomSnackbar"
import { UserDetails } from "./UserDetails"
import { UserProfileForm } from "./UserProfileForm"

export const ProfileLayout = (props) => {
    return <>
    <Grid container p={4}>
        <UserDetails/>
        <UserProfileForm 
        category={props.category}
                getErrorMsz={props.getErrorMsz}
                submitFlag={props.submitFlag}
                profileSubmit={props.profileSubmit}
                setPageData={props.setPageData}
                pageData={props.pageData}
                snakeBarProps={props.snakeBarProps}
                setSnakeBarProps={props.setSnakeBarProps}
                setPinCode={props.setPinCode}
                pinCode={props.pinCode}
                selectionChangeHandler={props.selectionChangeHandler}
                schoolsList={props.schoolsList}
                setSchoolsList={props.setSchoolsList}/>
    </Grid>
    {
        Object.keys(props.snakeBarProps).length > 0 &&
        <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
    }
    </>
}