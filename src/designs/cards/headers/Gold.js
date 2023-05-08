import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { UilTimes } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import React from "react";

const GoldHeader = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <Grid>
      <Grid
        container
        sx={{
          backgroundColor: "#4545A5",
          borderRadius: "10px 10px 0px 0px",
          height: "auto",
          padding: 1,
          display: { xs: "flex", sm: "none", md: "none", lg: "none" },
        }}
      >
        <Grid
          Item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "29px",
              color: "#FFFFFF",
            }}
          >
            MATHS OLYMPIAD - Regional
          </Typography>
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "17px",
              color: "#FFFFFF",
            }}
          >
            Cambridge School
          </Typography>

          <Typography
            mt={0.2}
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "17px",
              color: "#FFFFFF",
            }}
          >
            12 Nov, 2022
          </Typography>

          <Box mt={0.5}>
            {" "}
            <img src="images/maths.png" alt="maths71" />
          </Box>
        </Grid>
        <Grid
          Item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button sx={{ color: "#FFFFFF" }}>
            <UilTimes
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </Button>{" "}
          <Box>
            <img src="images/badge.png" alt="Badge" />
          </Box>
          <Typography
            ml={2}
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 700,
              fontStyle: "normal",
              color: "#FFFFFF",
              width: "160px",
            }}
          >
            Qualified for Nationals
          </Typography>
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "500",
              color: "#FFFFFF",
              width: "110px",
            }}
          >
            QUALIFYING STATUS
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "#4545A5",
          borderRadius: "10px 10px 0px 0px",
          height: "auto",
          padding: 2,
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <Grid
          Item
          lg={4}
          md={6}
          sm={6}
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "29px",
              color: "#FFFFFF",
            }}
          >
            MATHS OLYMPIAD - Regional
          </Typography>
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "17px",
              color: "#FFFFFF",
            }}
          >
            Cambridge School
          </Typography>
          <Box>
            {" "}
            <img src="images/maths.png" alt="maths71" />
          </Box>
        </Grid>
        <Grid Item lg={4} md={2} sm={2} xs={3}>
          <Box
            sx={{
              background: "#FFFFFF",
              borderRadius: "15px",
              width: "48px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "18px", sm: "21px" },
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: { xs: "22px", sm: "25px" },
                color: "#000000",
              }}
            >
              12
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "10px", sm: "12px" },
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: { xs: "10px", sm: "12px" },
                color: "#000000",
              }}
            >
              Nov
            </Typography>
          </Box>
        </Grid>
        <Grid
          Item
          lg={2.9}
          md={3}
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "500",
                color: "#FFFFFF",
                width: "110px",
              }}
            >
              QUALIFYING STATUS
            </Typography>
            <Box mt={1}>
              <img src="images/badge.png" alt="Badge" />
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: 700,
                fontStyle: "normal",
                color: "#FFFFFF",
                width: "160px",
              }}
            >
              Qualified for Nationals
            </Typography>
          </Box>
        </Grid>
        <Grid Item lg={0.1} md={1} sm={1}>
          <Button sx={{ color: "#FFFFFF", marginLeft: { lg: 6, md: 0 } }}>
            <UilTimes
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default GoldHeader;
