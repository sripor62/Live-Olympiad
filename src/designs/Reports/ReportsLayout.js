import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export const ReportsLayout = (props) => {
  const { correct, incorrect } = props.repData;
  console.log(correct);

  return (
    <Paper sx={{ m: "50px", p: "20px", textAlign: "center" }}>
      <Typography variant="h4" mb={4}>Question Analysis</Typography>
      <Box>
        <Typography variant="h6">Correct: {correct}</Typography>
        <Typography variant="h6">Incorrect: {incorrect}</Typography>
      </Box>
    </Paper>
  );
};
