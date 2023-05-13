import { Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { CustomButton } from "./CustomButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { useNavigate } from "react-router-dom";
import React from "react";

export const CustomListItem = (props) => {
	const navigate = useNavigate();
	return (
		<Box>
			<Chip
				label={props.option.packageName}
				color="primary"
				className="brb_0"
				sx={{
					fontFamily: "Urbantist",
					fontSize: "14px",
					fontWeight: 600,
					height: "30px",
				}}
			/>
			<Grid
				container
				style={{
					backgroundColor: "#F7F8F9",
					borderRadius: "0px 20px 20px 20px",
					padding: "20px",
					marginBottom: "20px",
				}}
			>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					lg={4}
					style={{ justifyContent: "flex-start", alignItems: "center" }}
				>
					<Box variant="body2" mt={1}>
						<Box
							sx={{
								fontFamily: "Urbantist",
								fontWeight: 500,
								color: "rgba(106,112,124,1)",
							}}
						>
							{" "}
							Test Length: {props.option.questions.length} Questions
						</Box>
					</Box>
					<Box variant="body2" mt={1}>
						<Box
							sx={{
								fontFamily: "Urbantist",
								fontWeight: 500,
								color: "rgba(106,112,124,1)",
							}}
						>
							Test Time: {props.option.totalDurationMin} Minutes
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={8}
					lg={8}
					style={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					{props.option.testStatus != null &&
						props.option.attemptedQuestions !==
							props.option.questions.length && (
							<Typography sx={{ fontSize: "18px", display: "flex" }}>
								<Box sx={{ fontSize: "50px", color: "green" }}>
									{props.option.attemptedQuestions
										? props.option.attemptedQuestions
										: 0}
								</Box>
								<Box sx={{ mt: 4, mr: 4 }}>
									/{props.option.questions.length}
								</Box>
							</Typography>
						)}
					{props.option.testStatus == null ? (
						<CustomButton
							onClick={() => {
								props.testScreen(props.option._id);
							}}
							btnText="ENTER"
							endIcon={<PlayArrowOutlinedIcon />}
							variant="contained"
							sx={{
								color: "white",
								borderRadius: "20px",
								width: "105px",
								height: { xs: "34px", lg: "36px" },
								fontSize: { xs: "8px", lg: "12px" },
								backgroundColor: "gba(131, 139, 161, 1)",
								fontWeight: 600,
							}}
						/>
					) : props.option.testStatus == true ? (
						<CustomButton
							onClick={() => {
								props.testScreen(props.option._id);
							}}
							btnText="RETAKE"
							endIcon={<RefreshIcon />}
							variant="contained"
							sx={{
								color: "white",
								borderRadius: "20px",
								width: "105px",
								height: { xs: "34px", lg: "36px" },
								fontSize: { xs: "8px", lg: "12px" },
								backgroundColor: "rgba(131, 139, 161, 1)",
								fontWeight: 600,
							}}
						/>
					) : (
						<CustomButton
							onClick={() => {
								props.testScreen(props.option._id);
							}}
							btnText="RESUME"
							endIcon={<RefreshIcon />}
							variant="contained"
							sx={{
								color: "white",
								borderRadius: "20px",
								width: "105px",
								height: { xs: "34px", lg: "36px" },
								fontSize: { xs: "8px", lg: "12px" },
								backgroundColor: "#F9BB47",
								fontWeight: 600,
							}}
						/>
					)}

					{props.option.testStatus && (
						<CustomButton
							onClick={() => props.testSend(props.option.testId)}
							btnText="VIEW REPORT"
							variant="contained"
							sx={{
								color: "white",
								borderRadius: "20px",
								width: "105px",
								height: { xs: "34px", lg: "36px" },
								fontSize: { xs: "8px", lg: "12px" },
								backgroundColor: "#F9BB47",
								fontWeight: 600,
								ml: 1,
								p: 1,
							}}
						/>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};
