import { Chip, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const ScheduleLayout = () => {
	return (
		<Box p={3}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={7} lg={8} p={1}>
					<Grid container mb={3}>
						<Stack direction="row" spacing={2}>
							<Chip
								label="All"
								variant="contained"
								sx={{
									":hover": { bgcolor: "#F9BB47", color: "white" },
									backgroundColor: "white",
									color: "#F9BB47",
									border: "2px solid #F9BB47",
								}}
							/>
							<Chip
								label="Mock Tests"
								variant="contained"
								sx={{
									":hover": { bgcolor: "#F9BB47", color: "white" },
									backgroundColor: "white",
									color: "#F9BB47",
									border: "2px solid #F9BB47",
								}}
							/>
							<Chip
								label="Olympiads"
								variant="contained"
								sx={{
									":hover": { bgcolor: "#F9BB47", color: "white" },
									backgroundColor: "white",
									color: "#F9BB47",
									border: "2px solid #F9BB47",
								}}
							/>
						</Stack>
					</Grid>
					<Chip
						label="Maths"
						className="brb_0"
						sx={{
							backgroundColor: "#4545A5",
							color: "#ffffff",
							display: { xs: "block", sm: "block", md: "none", lg: "none" },
						}}
					/>
					<Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
						<Box
							sx={{
								backgroundColor: "#F7F8F9",
								borderRadius: "0 15px 15px 15px",
							}}
						>
							<Grid container p={3}>
								<Grid container mb={2}>
									<Grid item xs={6} sm={9} md={3} lg={2.3}>
										<Typography variant="subtitle2">
											<Box
												sx={{
													fontFamily: "Urbantist",
													fontWeight: "bold",
													fontSize: "24px",
													width: "111px",
												}}
											>
												Mock Test
											</Box>
										</Typography>
									</Grid>
									<Grid
										item
										xs={4}
										sm={2}
										md={4}
										lg={2}
										sx={{
											display: {
												xs: "none",
												sm: "none",
												md: "block",
												lg: "block",
											},
										}}
									>
										<Stack direction="row">
											<Chip
												label="Mathematics"
												variant="filled"
												sx={{
													color: "white",
													backgroundColor: "#4545A5",
													fontWeight: "bold",
												}}
											/>
										</Stack>
									</Grid>
									<Grid
										item
										xs={6}
										lg={7.7}
										sx={{ display: "flex", justifyContent: "flex-end" }}
									>
										<Typography variant="body2" color="#838BA1">
											<Box>3 October 2022</Box>
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body2" color="#838BA1">
										<Box sx={{ fontWeight: "bold" }}>
											Venue : School Auditorium
										</Box>
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Chip
						label="English"
						className="brb_0"
						sx={{
							backgroundColor: "#E54545",
							color: "#ffffff",
							display: { xs: "block", sm: "block", md: "none", lg: "none" },
						}}
					/>
					<Grid xs={12} sm={12} md={12} lg={12} mb={2}>
						<Box
							sx={{
								backgroundColor: "#F7F8F9",
								borderRadius: "0 15px 15px 15px",
							}}
						>
							<Grid container p={3}>
								<Grid container xs={12} sm={12} md={12} lg={12} mb={2}>
									<Grid xs={6} sm={9} md={3} lg={2.3}>
										<Typography variant="subtitle2">
											<Box
												sx={{
													fontFamily: "Urbantist",
													fontWeight: "bold",
													fontSize: "24px",
												}}
											>
												Olympiad
											</Box>
										</Typography>
									</Grid>
									<Grid
										xs={12}
										sm={2}
										md={4}
										lg={2}
										sx={{
											display: {
												xs: "none",
												sm: "none",
												md: "block",
												lg: "block",
											},
										}}
									>
										<Stack direction="row">
											<Chip
												label="Science"
												variant="filled"
												sx={{
													color: "white",
													backgroundColor: "#42BBEF",
													fontWeight: "bold",
												}}
											/>
										</Stack>
									</Grid>
									<Grid
										xs={6}
										lg={7.7}
										sx={{ display: "flex", justifyContent: "flex-end" }}
									>
										<Typography variant="body2" color="#838BA1">
											<Box>3 October 2022</Box>
										</Typography>
									</Grid>
								</Grid>
								<Grid xs={12}>
									<Typography variant="body2" color="#838BA1">
										<Box sx={{ fontWeight: "bold" }}>
											Venue : School Auditorium
										</Box>
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Chip
						label="Science"
						className="brb_0"
						sx={{
							backgroundColor: "#42BBEF",
							color: "#ffffff",
							display: { xs: "block", sm: "block", md: "none", lg: "none" },
						}}
					/>
					<Grid xs={12} sm={12} md={12} lg={12} mb={2}>
						<Box
							sx={{
								backgroundColor: "#F7F8F9",
								borderRadius: "0 15px 15px 15px",
							}}
						>
							<Grid container p={3}>
								<Grid container xs={12} sm={12} md={12} lg={12} mb={2}>
									<Grid item xs={6} sm={9} md={3} lg={2.3}>
										<Typography variant="subtitle2">
											<Box
												sx={{
													width: "107px",
													fontFamily: "Urbantist",
													fontWeight: "bold",
													fontSize: "24px",
												}}
											>
												Olympiad
											</Box>
										</Typography>
									</Grid>
									<Grid
										item
										xs={4}
										sm={2}
										md={4}
										lg={2}
										sx={{
											display: {
												xs: "none",
												sm: "none",
												md: "block",
												lg: "block",
											},
										}}
									>
										<Stack direction="row">
											<Chip
												label="English"
												variant="filled"
												sx={{
													color: "white",
													backgroundColor: "#EF4255",
													fontWeight: "bold",
												}}
											/>
										</Stack>
									</Grid>
									<Grid
										item
										xs={6}
										lg={7.7}
										sx={{ display: "flex", justifyContent: "flex-end" }}
									>
										<Typography variant="body2" color="#838BA1">
											<Box>To be Scheduled</Box>
										</Typography>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body2" color="#838BA1">
										<Box sx={{ fontWeight: "bold" }}>
											Venue : School Auditorium
										</Box>
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={5} lg={4}>
					<Box sx={{ backgroundColor: "#F7F8F9", borderRadius: "15px" }}>
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<CalendarPicker showDaysOutsideCurrentMonth={true} />
								</LocalizationProvider>
							</Grid>
						</Grid>
					</Box>
					<Box ml={2} p={2}>
						<Grid container alignItems="center">
							<Grid item xs={1} sm={1} md={1} lg={1}>
								<Box
									sx={{
										height: "20px",
										width: "20px",
										backgroundColor: "#53D064",
										borderRadius: "50%",
									}}
								/>
							</Grid>
							<Grid item xs={5} sm={5} md={5} lg={5}>
								<Typography variant="body2">
									<Box>Mock Test</Box>
								</Typography>
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1}>
								<Box
									sx={{
										height: "20px",
										width: "20px",
										backgroundColor: "#FCBD42",
										borderRadius: "50%",
									}}
								/>
							</Grid>
							<Grid item xs={1} sm={5} md={5} lg={5}>
								<Typography variant="body2">
									<Box>Olympiad</Box>
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
