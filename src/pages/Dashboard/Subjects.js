import React from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import Header from "../../designs/Dashboard/Header";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";

export const Subjects = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item lg={12}>
        <Header />
      </Grid>
      <Grid item lg={2}>
        <Sidebar />
      </Grid>
      <Grid item lg={3} p={2}>
        <Stack direction="column" spacing={1}>
        <Box>
        </Box>
        <Typography variant="h6">Click on the one of the subjects to view its syllabus</Typography>

        <Chip
           onClick={() => {
            navigate("/syllabusScience");
          }}
          label="Science"
          variant="contained"
          sx={{
            ":hover": { bgcolor: "#42BBEF", color: "white" },
            color: "#42BBEF",
            border: "2px solid #42BBEF",
            fontWeight: 600,
            fontSize: "12px",
            backgroundColor: "white",
          }}
        />
        <Chip
							onClick={() => {
                navigate("/syllabusMath");
              }}
							label="Mathematics"
							variant="contained"
							sx={{
								":hover": { bgcolor: "#4545A5", color: "white" },
								color: "#4545A5",
								border: "2px solid #4545A5",
								fontWeight: 600,
								fontSize: "12px",
								backgroundColor: "white",
							}}
						/>
                        	<Chip
							onClick={() => {
                navigate("/syllabusEnglish");
              }}
							label="English"
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
                        </Stack>
      </Grid>
    </Grid>
  );
};
