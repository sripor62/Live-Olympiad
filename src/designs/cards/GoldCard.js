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
      <Box sx={{ m: 1 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                background: "rgba(217, 217, 217, 0.3)",
                width: "100%",
                height: "100%",
                marginTop: "2%",
                borderRadius: "10px 10px 10px 10px;",
              }}
            >
              <GoldHeader />

              <Grid container>
                <Grid item lg={3}>
                  <Button
                    onClick={handleResultClick}
                    sx={{
                      backgroundColor:
                        activeButton === "result"
                          ? "rgba(69, 69, 165, 0.3)"
                          : "rgba(69, 69, 165, 0.1)",
                      width: { xs: "30%", sm: "287px" },
                      height: "44px",
                      borderRadius: "0px 0px 10px 10px",
                      marginLeft: { xs: "10%", sm: "29%", lg: 35 },
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
                <Grid item lg={6}>
                  <Button
                    onClick={handleAwardsClick}
                    sx={{
                      backgroundColor:
                        activeButton === "awards"
                          ? "rgba(69, 69, 165, 0.3)"
                          : "rgba(69, 69, 165, 0.1)",
                      width: { xs: "50%", sm: "287px" },
                      height: "44px",
                      borderRadius: "0px 0px 10px 10px",
                      boxshadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginLeft: { xs: "6%", sm: "6px", lg: 35 },
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
                <Grid item lg={3}>
                  <Button
                    sx={{
                      width: "151px",
                      height: "36px",
                      borderRadius: "10px 10px 10px 10px",
                      border: "1px solid black",
                      marginLeft: { xs: "30%", sm: "70px" },
                      marginTop: "18px",
                      backgroundColor: "beige",
                      color: "black",
                    }}
                    onClick={() => {
                      navigate("/Report");
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
              </Grid>
              <Box>
                <Box mt={10}>{activeButton === "result" && <GoldResult />}</Box>
                <Box>{activeButton === "awards" && <GoldAward />}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </HomeLayout>
  );
};
export default GoldCard;
