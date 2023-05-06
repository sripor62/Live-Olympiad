import { Box, Button, Grid, Typography } from "@mui/material";
import "./card.css";
import HomeLayout from "../Dashboard/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GoldHeader from "./headers/Gold";
import GoldResult from "./Results/goldRes";
import GoldAward from "./awardsAndCertf/GoldAward";
import React from "react";
import useSessionHelper from "../../hooks/useSession";
import { useQuery } from "react-query";
const GoldCard = () => {
	const query = new URLSearchParams(window.location.search);
	const packageId = query.get("packageId");
	const { StudentsReport } = useSessionHelper();
	const { data: StudentRep } = useQuery(
		[`StudentReport`, packageId],
		() => StudentsReport(packageId),
		{ enabled: !!packageId, retry: false }
	);

	useEffect(() => {
		console.log("Student Report");
	}, [StudentRep]);

	const navigate = useNavigate();
	const [activeButton, setActiveButton] = useState("result");

	const handleResultClick = () => {
		setActiveButton("result");
	};

	const handleAwardsClick = () => {
		setActiveButton("awards");
	};

	return (
		<HomeLayout>
			<Grid
				container
				sx={{
					height: "100%",
					background: "rgba(217, 217, 217, 0.3)",
					borderRadius: "10px 10px 10px 10px;",
				}}
			>
				<Grid item xs={12} sm={12} lg={12}>
					<GoldHeader />
				</Grid>
				<Grid
					item
					lg={5.5}
					xs={6}
					sm={4}
					md={4}
					sx={{
						display: "flex",
						justifyContent: {
							lg: "flex-end",
							md: "center",
							sm: "center",
							xs: "center",
						},
					}}
				>
					<Button
						onClick={handleResultClick}
						sx={{
							backgroundColor:
								activeButton === "result"
									? "rgba(69, 69, 165, 0.3)"
									: "rgba(69, 69, 165, 0.1)",
							width: { xs: "287px", sm: "287px" },
							height: "44px",
							borderRadius: "0px 0px 10px 10px",
						}}
					>
						<Typography
							style={{
								fontFamily: "urbanist",
								fontSize: "18px",
								fontStyle: "normal",
								fontWeight: "500",
								lineHeight: "22px",
								color: "#000000",
							}}
						>
							Result
						</Typography>
					</Button>
				</Grid>
				<Grid
					item
					lg={3.5}
					xs={6}
					sm={4}
					md={4}
					sx={{
						display: "flex",
						justifyContent: {
							lg: "flex-start",
							md: "center",
							sm: "center",
							xs: "center",
						},
					}}
				>
					<Button
						onClick={handleAwardsClick}
						sx={{
							backgroundColor:
								activeButton === "awards"
									? "rgba(69, 69, 165, 0.3)"
									: "rgba(69, 69, 165, 0.1)",
							width: { xs: "287px", sm: "287px" },
							height: "44px",
							borderRadius: "0px 0px 10px 10px",
							boxshadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
							marginLeft: { lg: 2, md: 0, sm: 0, xs: 0 },
						}}
					>
						<Typography
							style={{
								fontFamily: "urbanist",
								fontSize: { xs: "10px", sm: "18px" },
								fontStyle: "normal",
								fontWeight: "500",
								lineHeight: { xs: "14px", sm: "22px" },
								color: "#000000",
							}}
						>
							Awards & Certificates
						</Typography>
					</Button>
				</Grid>
				<Grid item lg={3} xs={12} sm={4} md={4}>
					<Button
						sx={{
							width: "151px",
							height: "36px",
							borderRadius: "10px 10px 10px 10px",
							border: "1px solid black",
							marginTop: "18px",
							backgroundColor: "beige",
							color: "black",
							marginLeft: 2,
						}}
						onClick={() => {
							navigate("/Report?packageId=" + packageId);
						}}
					>
						<Typography
							style={{
								fontFamily: "urbanist",
								fontSize: "14px",
								fontStyle: "normal",
								fontWeight: "700",
								lineHeight: "22px",
								color: "#000000",
							}}
						>
							Detailed Reports
						</Typography>
					</Button>
				</Grid>
				<Grid item lg={12} md={12} sm={12}>
					<Box mt={10}>
						{activeButton === "result" && (
							<GoldResult studentsReport={StudentRep} />
						)}
					</Box>
					<Box>
						{activeButton === "awards" && (
							<GoldAward studentsReport={StudentRep} />
						)}
					</Box>
				</Grid>
			</Grid>
		</HomeLayout>
	);
};
export default GoldCard;
