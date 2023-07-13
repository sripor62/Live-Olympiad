import { Chip, Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { environment } from "../../environments/environment";
import React, { useState } from "react";
export const SubjectSelector = ({ setPage, text }) => {
	const [color, setColor] = useState(false)
	const [colorBlue, setColorBlue] = useState(false)
	const [colorRed, setColorRed] = useState(false)
	

	const toggleFunc = () => {
		setColor(true)
		setColorBlue(false)
		setColorRed(false)
	}
	const toggleMaths = () => {
		setColorBlue(true)
		setColor(false)
		setColorRed(false)
	}
	const toggleEnglish = () => {
		setColorRed(true)
		setColor(false)
		setColorBlue(false)
	}
	return (
		<Grid mt={2}>
			<Grid item xs={12} sm={9} md={8} lg={9}>
				<Stack direction="row" spacing={2}>
					{environment.env == "school" && (
						<Chip
							label="You have following tests:"
							variant="contained"
							sx={{
								":hover": { bgcolor: "white", color: "#F9BB47" },
								color: "white",
								border: "2px solid #F9BB47",
								fontWeight: 1000,
								fontSize: "16px",
								backgroundColor: "#F9BB47",
							}}
						/>
					)}
					{/* {environment.env != "school" && (
						<Chip
							label="All"
							onClick={() => (0)}
							variant="contained"
							sx={{
								":hover": { bgcolor: "#F9BB47", color: "white" },
								color: "#F9BB47",
								border: "2px solid #F9BB47",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: "white",
							}}
						/>
					)} */}
					{text==="Practice" && (
						<Chip
							onClick={() => {setPage(1); toggleFunc()}}
							label="Science"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#42BBEF", color: "white" },
								color: color ? "white": "#42BBEF",
								border: "2px solid #42BBEF",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: color ? "#42BBEF":"white",
							}}
						/>
					)}
					{ text==="Practice" && (
						<Chip
							onClick={() => {setPage(2);toggleMaths()}}
							label="Mathematics"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#4545A5", color: "white" },
								color: colorBlue ? "white":  "#4545A5",
								border: "2px solid #4545A5",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: colorBlue ? "#4545A5": "white",
							}}
						/>
					)}
					{ text==="Practice" && (
						<Chip
							onClick={() => {setPage(3);toggleEnglish()}}
							label="English"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#EF4255", color: "white" },
								color: colorRed ? "white": "#EF4255",
								border: "2px solid #EF4255",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: colorRed ? "#EF4255":"white",
							}}
						/>
					)}
					{text==="Screening" && (
						<Chip
							onClick={() => setPage(1)}
							label="Technology"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#EF4255", color: "white" },
								color: "#EF4255",
								border: "2px solid #EF4255",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: "white",
							}}
						/>
					)}
				</Stack>
			</Grid>
		</Grid>
	);
};
