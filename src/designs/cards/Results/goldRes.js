import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import useSessionHelper from "../../../hooks/useSession";
const GoldResult = () => {
  const { StudentsReport } = useSessionHelper();
  const { data: StudentRep } = useQuery(
    [`StudentReport`],
    () => StudentsReport(),
    { enabled: true, retry: false }
  );
  const StudentReport = [
    {
      correct: "13",
      incorrect: "14",
      total: "30",
      rank: "47",
      score: "102",
      isGold: "false",
      isSilver: "false",
      isTopper: "false",
      percentile: "50",

      maxScore: "282",
      packageReport: {
        avg: {
          rank: "62",
          score: "85.77777777777777",
          percentile: "50",
        },
        top: {
          rank: "27",
          score: "125",
          percentile: "100",
        },
      },
    },
  ];

  return (
    <Grid
      container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {StudentReport.map((child) => (
        <Grid item key={child.id}>
          <Grid container>
            <Grid item lg={5} md={12}>
              <Grid container>
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid container  sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                    <Grid
                      item
                      lg={5}   
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: "22px",
                          color: "#000000",
                        }}
                      >
                        Score Summary
                      </Typography>
                    </Grid>
                    <Grid item lg={2}>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "29px",
                          color: "#000000",
                        }}
                      >
                        28/30
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                lg={12}
                mt={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "5px",
                    backgroundColor: "rgba(69, 69, 165, 0.1)",
                    width: { xs: "100%", sm: "288px" },
                    height: "40px",
                    alignItems: "center",
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      lg={9}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",  
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                          marginLeft:20
                        }}
                      >
                        Total Questions
                      </Typography>
                    </Grid>
                    <Grid item lg={3}>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        30
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  mt={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "5px",
                    backgroundColor: "#42BBEF",
                    width: { xs: "100%", sm: "288px" },
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      lg={9}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                          marginLeft:20
                        }}
                      >
                        Attempted Questions
                      </Typography>
                    </Grid>
                    <Grid item lg={3}>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        30
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  mt={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "5px",
                    backgroundColor: "#FFD000",
                    width: { xs: "100%", sm: "288px" },
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      lg={9}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                          marginLeft:20  
                        }}
                      >
                        Unattempted Questions
                      </Typography>
                    </Grid>
                    <Grid item lg={3}>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        0
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  mt={1}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "5px",
                    backgroundColor: "rgba(69, 69, 165, 0.1)",
                    width: { xs: "100%", sm: "288px" },
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid container>
                    <Grid
                      item
                      lg={9}
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                          marginLeft:20
                        }}
                      >
                        Score Percentage
                      </Typography>
                    </Grid>
                    <Grid item lg={3}>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        99.33%
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Grid item lg={2} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "right",
                  justifyContent: "center",
                  marginTop:10
                }}
              >
                <Box display="flex" justifyContent="right" alignItems="right">
                  <Typography
                    style={{
                      fontFamily: "urbanist",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "17px",
                      color: "#000000",
                      
                    }}
                  >
                    Rank
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="right" alignItems="right">
                  <Typography
                    style={{
                      fontFamily: "urbanist",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "17px",
                      color: "#000000",
                      marginTop:"25%"
                    }}
                  >
                    Percentage (%)
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="right" alignItems="right">
                  <Typography
                    style={{
                      fontFamily: "urbanist",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "17px",
                      color: "#000000",
                      marginTop:"25%"
                    }}
                  >
                    Percentile
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} md={10} sx={{marginTop:{lg:"-3%",md:"4%"}}}>
              <Grid container>
                <Grid item lg={12}>
                  <Typography
                    style={{
                      fontFamily: "urbanist",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "22px",
                      color: "#000000",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    Comparative Scores
                  </Typography>
                </Grid>
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #838BA1",
                      width: "83px",
                      height: "233px",
                      margin: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                        }}
                      >
                        You
                      </Typography>
                    </Box>
                    <Box
                      mt={3}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "rgba(69, 69, 165, 0.1)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        7
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "rgba(69, 69, 165, 0.1)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        92
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "rgba(69, 69, 165, 0.1)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        40
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #838BA1",
                      width: "83px",
                      height: "233px",
                      margin: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      marginTop="9%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                        }}
                      >
                        Top
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                        }}
                      >
                        Performer
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "rgba(83, 208, 100, 0.3)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        1
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "rgba(83, 208, 100, 0.3)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        97
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "rgba(83, 208, 100, 0.3)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        53
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #838BA1",
                      width: "83px",
                      height: "233px",
                      margin: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                        }}
                      >
                        Avg.
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "17px",
                          color: "#000000",
                        }}
                      >
                        Performer
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#F6EDC3",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        14
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#F6EDC3",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        84
                      </Typography>
                    </Box>
                    <Box
                      mt={1}
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#F6EDC3",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "urbanist",
                          fontSize: "21px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "25px",
                          color: "#000000",
                        }}
                      >
                        24
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default GoldResult;
