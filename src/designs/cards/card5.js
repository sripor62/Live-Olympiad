import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { environment } from "../../environments/environment";

export const Card5 = () => {
	return (
		<Grid mt={12}>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Stack direction="column" spacing={2}>
					<Typography
						sx={{
							fontFamily: "Urbanist",
							fontStyle: "normal",
							fontWeight: "500",
							fontSize: { xs: "12px", sm: "14px" },
							lineHeight: "14px",
							color: "#1E232C",
						}}
					>
						You're Currently on the free plan, upgrade license to avail more
						benefits!
					</Typography>
					{environment.env != "school" && (
						<Chip
							label="Mathematics"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#4545A5", color: "white" },
								color: "#4545A5",
								border: "2px solid #4545A5",
								borderRadius: "10px",
								width: "249px",
								height: "44px",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: "white",
							}}
						/>
					)}
					{environment.env != "school" && (
						<Chip
							label="Science"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#42BBEF", color: "white" },
								color: "#42BBEF",
								border: "2px solid #42BBEF",
								borderRadius: "10px",
								width: "249px",
								height: "44px",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: "white",
							}}
						/>
					)}
					{environment.env != "school" && (
						<Chip
							label="English"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#EF4255", color: "white" },
								color: "#EF4255",
								border: "2px solid #EF4255",
								borderRadius: "10px",
								width: "249px",
								height: "44px",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: "white",
							}}
						/>
					)}
					<Button
						style={{ width: "150px", height: "44px", marginLeft: "45px" }}
						sx={{
							":hover": { bgcolor: "#F9BB47", color: "white" },
							color: "#F9BB47",
							border: "2px solid #F9BB47",
							borderRadius: "57px",
							fontWeight: 600,
							width: "249px",
							fontSize: "12px",
							backgroundColor: "white",
						}}
					>
						UPGRADE
					</Button>
					<Box
						sx={{
							color: "#F7F8F9",
							borderRadius: "57px",
							fontWeight: 600,
							width: "249px",
							height: "242px",
							fontSize: "12px",
							backgroundColor: "#F7F8F9",
						}}
					>
						<Typography
							sx={{
								fontFamily: "Urbanist",
								fontStyle: "normal",
								fontWeight: "700",
								fontSize: { xs: "18px", sm: "22px" },
								lineHeight: "25px",
								color: "#1E232C",
								textAlign: "center",
								marginTop: "24px",
							}}
						>
							Live Olympiad Knowledge Tree
						</Typography>
						<Box
							sx={{
								height: "56",
								width: "90%",
								marginTop: "20px",
								marginLeft: "13px",
							}}
						>
							<Typography
								sx={{
									fontFamily: "Urbanist",
									fontStyle: "normal",
									fontWeight: "500",
									fontSize: { xs: "10px", sm: "12px" },
									lineHeight: "14px",
									color: "#838BA1",
									textAlign: "center",
								}}
							>
								Learn about Exempler & Challenger Series, Evaluation Criteria,
								About Live Olympiad, Queries & FAQs, Syllabus through an
								automated Chatbot.
							</Typography>
						</Box>
						<Box
							sx={{
								color: "#4545A5",
								borderRadius: "53px",
								padding: "15px 50px",
								width: "191px",
								height: "48px",
								alignItems: "center",
								backgroundColor: "#4545A5",
								marginTop: "20px",
								marginLeft: "29px",
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<Button sx={{ color: "#FFFFFF", textAlign: "center" }}>
								LOGIN
							</Button>
						</Box>
					</Box>
				</Stack>
			</Grid>
		</Grid>
	);
};
