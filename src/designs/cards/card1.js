import { Box, Grid, Typography } from "@mui/material";
import "./card.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useStore } from "../../stores";
const Card1 = ({ session, school }) => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				flexGrow: 1,
				marginLeft: { xs: 0, sm: "10px" },
				width: { xs: "100%", sm: "100%" },
			}}
		>
			<Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
				<Grid
					item
					xs={12}
					sm={12}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<div className="card">
						<div className="card-body">
							<div className="left-section">
								<Typography
									sx={{
										fontFamily: "Inter",
										fontStyle: "normal",
										fontWeight: "700",
										fontSize: { xs: "10px", sm: "12px" },
										lineHeight: "16px",
										color: "#FFFFFF",
									}}
								>
									{session.group.toUpperCase()} OLYMPIAD - Regional
								</Typography>
								<Typography
									sx={{
										fontFamily: "Inter",
										fontStyle: "normal",
										fontWeight: "400",
										fontSize: { xs: "8px", sm: "9px" },
										lineHeight: "12px",
										color: "#FFFFFF",
									}}
								>
									{school?.name}
								</Typography>
							</div>
							{/* <div className="right-section">
								<Typography
									className="date"
									sx={{
										fontFamily: "Inter",
										fontSize: { xs: "18px", sm: "21px" },
										fontWeight: "400",
										fontStyle: "normal",
										lineHeight: "25px",
									}}
								>
									12
								</Typography>
								<Typography
									className="month"
									sx={{
										fontFamily: "Inter",
										fontSize: { xs: "8px", sm: "10px" },
										fontWeight: "400",
										fontStyle: "normal",
										lineHeight: "12px",
									}}
								>
									Nov
								</Typography>
							</div> */}
						</div>
						<div className="card-footer">
							<div className="bottom-section">
								<img src="images/maths.png" alt="maths" />
							</div>
							<div className="bottom-right-section">
								<Typography
									sx={{
										color: "#FFFFFF",
										fontSize: { xs: "8px", sm: "10px" },
										fontFamily: "Inter",
										fontStyle: "normal",
										fontWeight: "400",
										lineHeight: "12px",
										display: { xs: "none", sm: "block" },
									}}
								>
									Result
								</Typography>
								<img
									src="images/Arrow5.png"
									alt="Arrow"
									onClick={() => {
										sessionStorage.setItem(
											"current_session",
											JSON.stringify(session)
										);
										navigate("/GoldCard?packageId=" + session.packageId);
									}}
									sx={{
										color: "#FFFFFF",
										fontSize: { xs: "24px", sm: "42px" },
									}}
								/>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Card1;
