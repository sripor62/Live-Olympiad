import React from "react";
import IndividualReportHeader from "./IndividualReportHeader";
import Header from "../Dashboard/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { IndividualReportSidebar } from "./IndividualReportSidebar";
const AnswerOptions = [
  "Section A Section B",
  "Section C Section D",
  "Section E Section F",
  "Section G Section F",
];

const IndividualReport = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Header />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <IndividualReportHeader />
      </Grid>
      <Grid
        item
        lg={7} md={7} sm={12} xs={12}
        p={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12} padding={2}>
            <Box
              style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "26px",
                height: "412px",
                border: "2px solid #04E844",
                borderRadius: "10px",
                width:"100%"
              }}
            >
              <Grid
                container
                spacing={1}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Grid item lg={2} md={2} sm={2} xs={2}>
                  <Box
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#F4F4F4",
                      borderRadius: 23,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Urbanist",
                        fontWeight: 700,
                        fontSize: "20px",
                        /* identical to box height, or 100% */
                        textAlign: "center",
                        color: "#1C1B1F",
                        marginBottom: 2,
                      }}
                    >
                      Q5
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>  
                  <Typography
                    style={{
                      fontFamily: "Urbanist",
                      fontWeight: 500,
                      fontSize: "20px",
                      color: "#1C1B1F",
                      marginBottom: 14,
                    }}
                  >
                    Section A of class 8 has 24 students. Section B of class 8
                    has 23 students. Which of these correctly compares the
                    number of students in each section?
                  </Typography>
                  {AnswerOptions.map((item, i) => (
                    <Box
                      style={{
                        width: "302px",
                        height: "50px",
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #8391A1",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingLeft: 8,
                        marginTop: 10,
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Urbanist",
                          fontWeight: 500,
                          fontSize: "16px",
                          color: "#1C1B1F",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop:10
            }}
          >
            <Button
              endIcon={<CheckIcon />}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
                width: "170px",
                height: "54px",
                backgroundColor: "#04E844",
                borderRadius: "15px",
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "20px",
                color: "#FFFFFF",
                marginRight:"11%"
              }}
            >
              CORRECT
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={5} md={5} sm={12} xs={12}><IndividualReportSidebar/></Grid>
    </Grid>
  );
};

export default IndividualReport;
