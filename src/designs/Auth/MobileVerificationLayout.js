import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { CustomOtp } from "../../components/CustomOtp";
import { CustomSnackbar } from "../../components/CustomSnackbar";
import React from "react";
export const MobileVerificationLayout = (props) => {
	return (
		<Grid container mt={6} justifyContent="center" alignItems="center" p={2}>
			<Grid item xs={12}>
				<Typography variant="h2" fontSize="40px" fontWeight="bold">
					<Box mb={1} sx={props.responsiveStype.Mobilever.Typo}>
						Mobile Verification
					</Box>
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography
					variant="body2"
					fontSize="14px"
					fontHeight="medium"
					color="rgba(131,139,161,1)"
				>
					<Box mb={3} sx={props.responsiveStype.Mobilever.Typo}>
						Enter the 6-Digit OTP recieved on +91-{props.phoneNumber} over sms
					</Box>
				</Typography>
			</Grid>
			<Grid item xs={12} sm={12} lg={12}>
				<Box
					mb={2}
					width={1}
					sx={{
						justifyContent: { xs: "center", sm: "center", lg: "left" },
						alignItems: { xs: "center", sm: "center", lg: "left" },
						display: "flex",
					}}
				>
					<CustomOtp
						value={props.otp}
						handleChange={props.handleChangeOtp}
						hasErrored={props.hasErrored}
						errorMsz={props.errorMsz}
					/>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Box
					mb={2}
					mt={2}
					sx={{
						justifyContent: { xs: "center", lg: "left" },
						alignItems: { xs: "center", lg: "left" },
						display: "flex",
					}}
				>
					<CustomButton
						btnText="Verify"
						color="primary"
						variant="contained"
						className="minWidth240"
						onClick={props.submitHandler}
						sx={{ borderRadius: "50px" }}
					/>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body2" fontWeight="medium">
					<Box mb={3} mt={15} sx={props.responsiveStype.Mobilever.Typo}>
						OTP Not Recieved?{" "}
						<Link
							href="#"
							onClick={props.submitOtpAgain}
							style={{ textDecoration: "none", fontWeight: "bold" }}
							fontWeight="bold"
						>
							Resend
						</Link>
					</Box>
				</Typography>
			</Grid>
			{Object.keys(props.snakeBarProps).length > 0 && (
				<CustomSnackbar
					{...props.snakeBarProps}
					setSnakeBarProps={props.setSnakeBarProps}
				/>
			)}
		</Grid>
	);
};
