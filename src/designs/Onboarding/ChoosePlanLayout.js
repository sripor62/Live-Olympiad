import { Chip, Grid, Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { CustomButton } from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
export const ChoosePlanLayout = (props) => {
	const navigate = useNavigate();
	return (
		<Grid container sx={{display:"flex",justifyContent:"center",alignItems:"center" }}>
			<Grid xs={12}>
				<Typography variant="h3" sx={{ fontSize: { xs: "32px", lg: "40px" } }}>
					<Box
						mb={2}
						mt={2}
						fontWeight="bold"
						sx={props.responsiveStype.CreatePassword.Typo}
					>
						Choose Your Plan!
					</Box>
				</Typography>
			</Grid>
			<Grid
				container
				xs={12}
				style={{
					border: "2px solid lightGray",
					borderRadius: "20px",
					padding: "20px",
					marginBottom: "20px",
				}}
			>
				<Grid
					xs={6}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Typography variant="body2" fontWeight={500}>
						<Box
							mb={2}
							sx={{
								fontSize: { xs: "14px", lg: "16px" },
								fontFamily: "Urbanist",
							}}
						>
							Single Subject
						</Box>
					</Typography>
				</Grid>
				<Grid
					xs={6}
					style={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Typography variant="body2">
						<Box
							mb={2}
							sx={{
								fontSize: { xs: "14px", lg: "20px" },
								fontFamily: "Urbanist",
								fontWeight: "bold",
							}}
						>
							₹300
						</Box>
					</Typography>
					<Typography variant="body2">
						<Box
							mb={2}
							mt={0.3}
							ml={0.5}
							sx={{
								fontFamily: "Urbanist",
								fontWeight: "bold",
								color: "rgba(131,139,161,1)",
							}}
						>
							for Year
						</Box>
					</Typography>
				</Grid>
				<Grid
					xs={12}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Box p={1}>
						<Stack direction="row" spacing={2}>
							<Chip
								label="Science"
								sx={{
									fontSize: "12px",
									color: "#ffffff",
									border: "3px solid #838BA1",
									backgroundColor: "#838BA1",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
							<Chip
								label="Mathematics"
								variant="outlined"
								sx={{
									fontSize: "12px",
									fontFamily: "Urbanist",
									color: "#838BA1",
									border: "3px solid #838BA1",
								}}
							/>
							<Chip
								label="English"
								variant="outlined"
								sx={{
									fontSize: "12px",
									fontFamily: "Urbanist",
									color: "#838BA1",
									border: "3px solid #838BA1",
								}}
							/>
						</Stack>
					</Box>
				</Grid>
			</Grid>
			<Grid
				container
				xs={12}
				style={{
					border: "2px solid lightGray",
					borderRadius: "20px",
					padding: " 25px 30px",
					marginBottom: "20px",
					border: "3px solid #FCBD42",
				}}
			>
				<Grid
					xs={6}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Typography variant="body2" fontWeight={500}>
						<Box
							mb={2}
							sx={{
								fontSize: { xs: "14px", lg: "16px" },
								fontFamily: "Urbanist",
							}}
						>
							Any Two Subjects
						</Box>
					</Typography>
				</Grid>
				<Grid
					xs={6}
					style={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Typography variant="body2">
						<Box
							mb={2}
							sx={{
								fontSize: { xs: "14px", lg: "20px" },
								fontFamily: "Urbanist",
								fontWeight: "bold",
							}}
						>
							₹550
						</Box>
					</Typography>
					<Typography variant="body2">
						<Box
							mb={2}
							mt={0.3}
							ml={0.5}
							sx={{
								fontFamily: "Urbanist",
								fontWeight: { xs: 400, lg: "bold" },
								color: "rgba(131,139,161,1)",
							}}
						>
							for Year
						</Box>
					</Typography>
				</Grid>
				<Grid
					xs={12}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Box p={1}>
						<Stack direction="row" spacing={2}>
							<Chip
								label="Science"
								sx={{
									fontSize: "12px",
									backgroundColor: "#42BBEF",
									color: "white",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
							<Chip
								label="Mathematics"
								variant="outlined"
								sx={{
									fontSize: "12px",
									backgroundColor: "#4545A5",
									border: "3px solid #4545A5",
									color: "white",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
							<Chip
								label="English"
								variant="outlined"
								sx={{
									fontSize: "12px",
									color: "#EF4255",
									border: "3px solid #EF4255",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
						</Stack>
					</Box>
				</Grid>
			</Grid>
			<Grid
				container
				xs={12}
				style={{
					border: "2px solid lightGray",
					borderRadius: "20px",
					padding: "20px",
					marginBottom: "20px",
				}}
			>
				<Grid
					xs={6}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Typography variant="body2" fontWeight={500}>
						<Box
							mb={2}
							sx={{
								fontSize: { xs: "14px", lg: "16px" },
								fontFamily: "Urbanist",
							}}
						>
							All Three Subject
						</Box>
					</Typography>
				</Grid>
				<Grid
					xs={6}
					style={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Typography variant="body2">
						<Box
							mb={2}
							sx={{
								fontSize: { xs: "14px", lg: "20px" },
								fontFamily: "Urbanist",
								fontWeight: "bold",
							}}
						>
							₹800
						</Box>
					</Typography>
					<Typography variant="body2">
						<Box
							mb={2}
							mt={0.3}
							ml={0.5}
							sx={{
								fontFamily: "Urbanist",
								fontWeight: "bold",
								color: "rgba(131,139,161,1)",
							}}
						>
							for Year
						</Box>
					</Typography>
				</Grid>
				<Grid
					xs={12}
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Box p={1}>
						<Stack direction="row" spacing={2}>
							<Chip
								label="Science"
								sx={{
									fontSize: "12px",
									color: "#ffffff",
									border: "3px solid #838BA1",
									backgroundColor: "#838BA1",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
							<Chip
								label="Mathematics"
								variant="outlined"
								sx={{
									fontSize: "12px",
									color: "#ffffff",
									border: "3px solid#838BA1",
									backgroundColor: "#838BA1",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
							<Chip
								label="English"
								variant="outlined"
								sx={{
									fontSize: "12px",
									color: "#ffffff",
									border: "3px solid #838BA1",
									backgroundColor: "#838BA1",
									fontSize: "12px",
									fontFamily: "Urbanist",
								}}
							/>
						</Stack>
					</Box>
				</Grid>
			</Grid>

			<Grid container xs={12} justifyContent="center" alignItems="center">
				<Grid
					xs={12}
					lg={6}
					md={12}
					sx={{
						justifyContent: { xs: "center", lg: "left" },
						alignItems: { xs: "center", lg: "left" },
						display: "flex",
					}}
				>
					<CustomButton
						onClick={props.submitHandler}
						btnText="Next"
						color="primary"
						variant="contained"
						className="minWidth240"
						sx={{ borderRadius: "50px" }}
					/>
				</Grid>
				<Grid xs={5} 	md={12} sm={12} sx={{ mt: { xs: 1, lg: 0 }, ml: 3,display:"flex",justifyContent:"center",alignItems:"center" }}>
					<Typography variant="body2">
						<Box sx={{ fontFamily: "Urbanist", fontSize: "16px" }}>
							<Link
								onClick={() => navigate("/parent")}
								underline="none"
								fontWeight="bold"
							>
								Skip
							</Link>{" "}
							for now
						</Box>
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};
