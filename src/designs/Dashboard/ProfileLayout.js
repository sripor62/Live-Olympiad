import { Grid } from "@mui/material";
import { CustomSnackbar } from "../../components/CustomSnackbar";
import { UserDetails } from "./UserDetails";
import { UserProfileForm } from "./UserProfileForm";

export const ProfileLayout = (props) => {
	return (
		<>
			<Grid container p={4} spacing={3}>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<UserDetails
						pageData={props.pageData}
						paymentInfo={props.paymentInfo}
						subscriptionList={props.subscriptionList}
						schoolsList={props.schoolsList}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={8} lg={8}>
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
						setSchoolsList={props.setSchoolsList}
						getSchoolId={props.getSchoolId}
						grades={props.grades}
					/>
				</Grid>
			</Grid>
			{Object.keys(props.snakeBarProps).length > 0 && (
				<CustomSnackbar
					{...props.snakeBarProps}
					setSnakeBarProps={props.setSnakeBarProps}
				/>
			)}
		</>
	);
};
