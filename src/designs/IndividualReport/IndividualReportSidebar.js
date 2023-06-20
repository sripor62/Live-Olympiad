import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import CheckIcon from "@mui/icons-material/Check";
export const IndividualReportSidebar = (props) => {
  return (
    <Grid container p={2}>
      <Grid item lg={12} xs={12}>
        <Chip
          label="Maths"
          color="primary"
          style={{
            width: "100%",
            height: "38px",
            backgroundColor: "#4545A5",
            borderRadius: "25px 25px 0px 0px",
          }}
          sx={{
            fontFamily: "Urbanist",
            fontWeight: 600,
            fontSize: "20px",
            color: "#FFFFFF",
          }}
        />
        <Box
          style={{
            padding: "28px 34px",
            width: "100%",
            height: "auto",
            backgroundColor: "#F7F8F9",
            borderRadius: "0px 0px 25px 25px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Urbanist",
              fontWeight: 600,
              fontSize: "18px",
              color: "#1C1B1F",
            }}
          >
            Numbers and Algebra <ArrowForwardIosIcon fontSize="inherit" />{" "}
            Number Knowledge
            <ArrowForwardIosIcon fontSize="inherit" />
            Greater or less than numbers
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              fontFamily: "Urbanist",
              fontWeight: 600,
              fontSize: "24px",
              color: "#1C1B1F",
            }}
          >
            Explanation
          </Typography>
          <Typography
            style={{
              fontFamily: "Urbanist",
              fontWeight: 500,
              fontSize: "16px",
              color: "#1C1B1F",
            }}
          >
            {" "}
            Count of students in Class 8, Section A is 24. This is 1 more than
            count in Class 8, Section B{" "}
          </Typography>
          <Box
            style={{
              marginTop: 10,
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
             
            }}
          >
            <Box>
              <Box
                style={{
                  marginTop: 2,
                  width: "198.82px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1C1B1F",
                    display: "flex",
                  }}
                >
                  <MemoryOutlinedIcon style={{ marginRight: 2 }} /> Cognitive
                  Complexity
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 53px",
                  width: "200px",
                  height: "48px",
                  backgroundColor: "#838BA1",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  style={{
                    display: "flex",
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding
                </Typography>
              </Box>
            </Box>
            <Box style={{ marginLeft: "30%", marginTop: 10 }}>
              <Box
                style={{
                  marginTop: 2,
                  width: "198.82px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1C1B1F",
                    display: "flex",
                  }}
                >
                  <AssignmentTurnedInOutlinedIcon style={{ marginRight: 2 }} />
                  Subject Skill
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px",
                  height: "72px",
                  backgroundColor: "#838BA1",
                  borderRadius: "10px",
                }}
              >
                <Box
                  style={{
                    width: "150px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      display: "flex",
                      fontFamily: "Urbanist",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#FFFFFF",
                    }}
                  >
                    Comparing whole numbers
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            style={{ marginTop: 10}}
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
            }}
          >
            <Box>
              <Box
                style={{
                  marginTop: 2,
                  width: "198.82px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1C1B1F",
                    display: "flex",
                  }}
                >
                  <MemoryOutlinedIcon style={{ marginRight: 2 }} /> Cognitive
                  Complexity
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "12px 53px",
                  width: "200px",
                  height: "48px",
                  backgroundColor: "#838BA1",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  style={{
                    display: "flex",
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Understanding
                </Typography>
              </Box>
            </Box>
            <Box style={{ marginLeft: "3%" }}>
              <Box
                style={{
                  marginTop: 2,
                  width: "198.82px",
                  height: "48px",
                  backgroundColor: "#FFFFFF",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1C1B1F",
                    display: "flex",
                  }}
                >
                  <AssignmentTurnedInOutlinedIcon style={{ marginRight: 2 }} />
                  Subject Skill
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px",
                  height: "72px",
                  backgroundColor: "#838BA1",
                  borderRadius: "10px",
                }}
              >
                <Box
                  style={{
                    width: "150px",
                    height: "48px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      display: "flex",
                      fontFamily: "Urbanist",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#FFFFFF",
                    }}
                  >
                    Comparing whole numbers
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
