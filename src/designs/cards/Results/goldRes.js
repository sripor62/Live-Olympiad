import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
const GoldResult = ({ report }) => {
	console.log(report);
	return (
		<Grid
			container
			sx={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "-2%",
			}}
		>
			<Grid item>
				<Grid container>
					<Grid item lg={5} md={12} sm={12} xs={12} mt={5}>
						<Grid container>
							<Grid
								item
								lg={12}
								md={12}
								sm={12}
								xs={12}
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Grid
									container
									sx={{
										alignItems: "center",
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Grid item lg={5} md={3} sm={3} xs={5}>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "18px",
												fontStyle: "normal",
												fontWeight: "700",
												lineHeight: "22px",
												color: "#000000",
											}}
										>
											Score Summary
										</Typography>
									</Grid>
									<Grid item lg={2}>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "24px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "29px",
												color: "#000000",
											}}
										>
											{parseInt(report?.studentReport?.correct ?? "0") +
												parseInt(report?.studentReport?.incorrect ?? "0")}
											/{parseInt(report?.studentReport?.total)}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							lg={12}
							md={12}
							sm={12}
							xs={12}
							mt={2}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									borderRadius: "5px",
									backgroundColor: "rgba(69, 69, 165, 0.1)",
									width: { xs: "100%", sm: "288px" },
									height: "40px",
									alignItems: "center",
								}}
							>
								<Grid container>
									<Grid
										item
										lg={9}
										md={9}
										sm={9}
										xs={9}
										sx={{
											alignItems: "center",
											display: "flex",
											justifyContent: "flex-start",
										}}
									>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
												marginLeft: 20,
											}}
										>
											Total Questions
										</Typography>
									</Grid>
									<Grid item lg={3} md={3} sm={3} xs={3}>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "21px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "25px",
												color: "#000000",
											}}
										>
											{parseInt(report?.studentReport?.total)}
										</Typography>
									</Grid>
								</Grid>
							</Box>
							<Box
								mt={1}
								sx={{
									display: "flex",
									flexDirection: "row",
									borderRadius: "5px",
									backgroundColor: "#42BBEF",
									width: { xs: "100%", sm: "288px" },
									height: "40px",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Grid container>
									<Grid
										item
										lg={9}
										md={9}
										sm={9}
										xs={9}
										sx={{
											alignItems: "center",
											display: "flex",
											justifyContent: "flex-start",
										}}
									>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
												marginLeft: 20,
											}}
										>
											Attempted Questions
										</Typography>
									</Grid>
									<Grid item lg={3} md={3} sm={3} xs={3}>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "21px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "25px",
												color: "#000000",
											}}
										>
											{parseInt(report?.studentReport?.correct ?? "0") +
												parseInt(report?.studentReport?.incorrect ?? "0")}
										</Typography>
									</Grid>
								</Grid>
							</Box>
							<Box
								mt={1}
								sx={{
									display: "flex",
									flexDirection: "row",
									borderRadius: "5px",
									backgroundColor: "#FFD000",
									width: { xs: "100%", sm: "288px" },
									height: "40px",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Grid container>
									<Grid
										item
										lg={9}
										md={9}
										sm={9}
										xs={9}
										sx={{
											alignItems: "center",
											display: "flex",
											justifyContent: "flex-start",
										}}
									>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
												marginLeft: 20,
											}}
										>
											Unattempted Questions
										</Typography>
									</Grid>
									<Grid item lg={3} md={3}>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "21px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "25px",
												color: "#000000",
											}}
										>
											{parseInt(report?.studentReport?.total ?? "0") -
												parseInt(report?.studentReport?.correct ?? "0") -
												parseInt(report?.studentReport?.incorrect ?? "0")}
										</Typography>
									</Grid>
								</Grid>
							</Box>
							<Box
								mt={1}
								sx={{
									display: "flex",
									flexDirection: "row",
									borderRadius: "5px",
									backgroundColor: "rgba(69, 69, 165, 0.1)",
									width: { xs: "100%", sm: "288px" },
									height: "40px",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Grid container>
									<Grid
										item
										lg={9}
										md={9}
										sm={9}
										xs={9}
										sx={{
											alignItems: "center",
											display: "flex",
											justifyContent: "flex-start",
										}}
									>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
												marginLeft: 20,
											}}
										>
											Score Percentage
										</Typography>
									</Grid>
									<Grid item lg={3} md={3}>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "21px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "25px",
												color: "#000000",
											}}
										>
											{(
												(report?.studentReport?.score * 100) /
												report?.maxScore
											).toFixed(2)}
											%
										</Typography>
									</Grid>
								</Grid>
							</Box>
						</Grid>
					</Grid>
					<Grid item lg={7} md={12} sm={12} xs={12}>
						<Grid container>
							<Grid
								item
								lg={12}
								md={12}
								sm={12}
								xs={12}
								sx={{
									ml: { lg: 10, md: 0, sm: 0, xs: 0 },
									mb: 1,
									mt: { lg: 0, md: 5, sm: 5, xs: 5 },
								}}
							>
								<Typography
									style={{
										fontFamily: "urbanist",
										fontSize: "18px",
										fontStyle: "normal",
										fontWeight: "700",
										lineHeight: "22px",
										color: "#000000",
										alignItems: "center",
										justifyContent: "center",
										display: "flex",
									}}
								>
									Comparative Scores
								</Typography>
							</Grid>
							<Grid item lg={3} md={3} sm={3}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "right",
										justifyContent: "center",
										marginTop: 11,
									}}
								>
									<Box display="flex" justifyContent="right" alignItems="right">
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
											}}
										>
											Rank
										</Typography>
									</Box>
									<Box
										display="flex"
										justifyContent="right"
										alignItems="right"
										sx={{ marginTop: 5 }}
									>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
											}}
										>
											Percentage (%)
										</Typography>
									</Box>
									<Box
										display="flex"
										justifyContent="right"
										alignItems="right"
										sx={{ marginTop: 5 }}
									>
										<Typography
											style={{
												fontFamily: "urbanist",
												fontSize: "14px",
												fontStyle: "normal",
												fontWeight: "500",
												lineHeight: "17px",
												color: "#000000",
											}}
										>
											Percentile
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid
								item
								lg={9}
								md={9}
								sm={9}
								sx={{ marginLeft: { lg: -3, md: "-13%", sm: "-13%", xs: 0 } }}
							>
								<Grid container>
									<Grid
										item
										lg={12}
										md={12}
										sm={12}
										sx={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Box
											sx={{
												borderRadius: "40px",
												border: "1px solid #838BA1",
												width: "83px",
												height: "233px",
												margin: 2,
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Box
												display="flex"
												justifyContent="center"
												alignItems="center"
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "14px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "17px",
														color: "#000000",
													}}
												>
													You
												</Typography>
											</Box>
											<Box
												mt={3}
												sx={{
													borderRadius: "50px",
													backgroundColor: "rgba(69, 69, 165, 0.1)",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{report?.studentReport?.rank}
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "rgba(69, 69, 165, 0.1)",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{(
														(report?.studentReport?.score * 100) /
														report?.maxScore
													).toFixed(2)}
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "rgba(69, 69, 165, 0.1)",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{report?.studentReport?.percentile?.toFixed(1)}
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												borderRadius: "40px",
												border: "1px solid #838BA1",
												width: "83px",
												height: "233px",
												margin: 2,
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Box
												marginTop="9%"
												display="flex"
												justifyContent="center"
												alignItems="center"
												flexDirection="column"
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "14px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "17px",
														color: "#000000",
													}}
												>
													Top
												</Typography>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "14px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "17px",
														color: "#000000",
													}}
												>
													Performer
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "rgba(83, 208, 100, 0.3)",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{report?.packageReport?.top?.rank}
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "rgba(83, 208, 100, 0.3)",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{(
														(report?.packageReport?.top?.score * 100) /
														report?.maxScore
													).toFixed(2)}
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "rgba(83, 208, 100, 0.3)",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{report?.packageReport?.top?.percentile?.toFixed(1)}
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												borderRadius: "40px",
												border: "1px solid #838BA1",
												width: "83px",
												height: "233px",
												margin: 2,
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Box
												display="flex"
												justifyContent="center"
												alignItems="center"
												flexDirection="column"
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "14px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "17px",
														color: "#000000",
													}}
												>
													Avg.
												</Typography>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "14px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "17px",
														color: "#000000",
													}}
												>
													Performer
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "#F6EDC3",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{report?.packageReport?.avg?.rank}
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "#F6EDC3",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{(
														(report?.packageReport?.avg?.score * 100) /
														report?.maxScore
													).toFixed(2)}
												</Typography>
											</Box>
											<Box
												mt={1}
												sx={{
													borderRadius: "50px",
													backgroundColor: "#F6EDC3",
													width: "50px",
													height: "50px",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Typography
													style={{
														fontFamily: "urbanist",
														fontSize: "21px",
														fontStyle: "normal",
														fontWeight: "500",
														lineHeight: "25px",
														color: "#000000",
													}}
												>
													{report?.packageReport?.avg?.percentile?.toFixed(1)}
												</Typography>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
export default GoldResult;
