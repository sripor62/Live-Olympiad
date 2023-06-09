import { CurrencyRupee } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { propsToClassKey } from "@mui/styles";
import React from "react";

function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}


export const UserDetails = (props) => {
	const { profilePicture } = props.pageData;
	
	function stringAvatar(name) {
		const avatarProps = {
		  sx: {
			bgcolor: stringToColor(name),
			width: "133px",
			height: "133px",
		  },
		  alt: "",
		};
	  
		if (props.pageData && props.pageData.profilePicture) {
		  avatarProps.src = props.pageData.profilePicture;
		}
	  
		return avatarProps;
	  }
	  


	return (
		<>
			<Grid
				container
				p={2}
				mt={2}
				alignItems="center"
				justifyContent="center"
				sx={{ backgroundColor: "#F7F8F9", borderRadius: "15px" }}
			>
				<Grid
					item
					xs={12}
					sm={8}
					md={12}
					lg={8}
					mb={2}
					mt={3}
					justifyContent="center"
					alignItems="center"
				>
					<Grid container>
						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							lg={12}
							mb={3}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Avatar {...stringAvatar(props.pageData?.fullName)} />
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							lg={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="subtitle2">
								<Box>
									{props.pageData.fullName}
									<Typography
										variant="subtitle2"
										sx={{
											color: "#838BA1",
											display: "inline",
											fontFamily: "Urbanist",
										}}
									>
										{" "}
										|{" "}
									</Typography>
									{props.pageData.grade ? props.pageData.grade : null}
								</Box>
							</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={12}
							lg={12}
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography
								variant="body2"
								sx={{
									color: "#838BA1",
									fontFamily: "Urbanist",
									textAlign: "center",
								}}
							>
								<Box>
									{
										props?.schoolsList?.find(
											(schoolData) => schoolData.id == props.pageData?.school
										)?.name
									}
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					sm={8}
					md={12}
					lg={8}
					mb={2}
					mt={3}
					justifyContent="center"
					alignItems="center"
				>
					<Grid
						container
						p={1}
						mb={3}
						justifyContent="center"
						alignItems="center"
					>
						{/* <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
							<Typography variant="body2" align="center">
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontFamily: "Urbanist",
										fontFamily: "Urbanist",
										fontWeight: "bold",
									}}
								>
									Total Fees Paid
								</Box>
							</Typography>
							<Typography
								variant="body1"
								align="center"
								sx={{ fontWeight: "600" }}
							>
								<Box
									sx={{
										fontFamily: "Urbanist",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<CurrencyRupee sx={{ fontSize: "16px" }} />
									{props.subscriptionList?.length > 0
										? props.subscriptionList.length * 300 -
										  (props.subscriptionList.length - 1) * 50
										: 0}
								</Box>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
							<Typography variant="body2" align="center">
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontFamily: "Urbanist",
										fontWeight: "bold",
									}}
								>
									Subject Subscriptions
								</Box>
							</Typography>
							<Typography
								variant="body1"
								align="center"
								sx={{ fontWeight: "600" }}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										fontFamily: "Urbanist",
										justifyContent: "center",
									}}
								>
									{props.subscriptionList?.join(",")}
								</Box>
							</Typography>
						</Grid> */}
						<Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
							<Typography variant="body2" align="center">
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontFamily: "Urbanist",
										fontWeight: "bold",
									}}
								>
									Date of Joining
								</Box>
							</Typography>
							<Typography
								variant="body1"
								align="center"
								sx={{ fontWeight: "600", fontFamily: "Urbanist" }}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{props.pageData?.createdAt?.split("T")[0]}
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
