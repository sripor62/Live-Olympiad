import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const IndividualReportHeader = (props) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
    >
      <Grid
        item
        lg={8}
        md={8}
        sm={6}
        xs={12}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIosIcon fontSize="small" />}
          style={{
            borderRadius: 12,
            fontFamily: "Urbanist",
            fontWeight: 600,
            fontSize: "14px",
            color: "#6A707C",
            borderRadius: "20px",
            border: "2px solid #6A707C",
            width: "101px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          BACK
        </Button>
        <Typography
          style={{
            marginLeft: 8,
            fontFamily: "Urbanist",
            fontWeight: 600,
            fontSize: 20,
            color: "#1C1B1F",
          }}
        >
          Individual Question Report
        </Typography>
      </Grid>
      <Grid item lg={4} md={4} sm={6} xs={12}>
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Grid item>
            <Button
              onClick={props.handlePreAnswerButtonClick}
              startIcon={<ArrowBackIcon fontSize="small" />}
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "14px",
                /* identical to box height, or 143% */
                color: "#1C1B1F",
                border: "2px solid #6A707C",
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              PREVIOUS
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={props.handleAnswerButtonClick}
              endIcon={<ArrowForwardIcon fontSize="small" />}
              style={{
                marginRight: "7%",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "14px",
                /* identical to box height, or 143% */
                color: "#1C1B1F",
                border: "2px solid #6A707C",
                width: "140px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              NEXT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IndividualReportHeader;
