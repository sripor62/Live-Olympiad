import { Box, Grid, Typography } from "@mui/material";
import React from "react";
const GoldAward = () => {
  return (
    <Grid container spacing={4} flexDirection="row" padding={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5.3}
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
        <img src="images/goldmedal.png" alt="Gold" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6.7}
        mt={2}
        p={1}
        sx={{
          display: "flex",
          justifyContent: {
            lg: "flex-start",
            md: "center",
            sm: "center",
            xs: "center",
          },
          alignItems: {
            lg: "flex-start",
            md: "center",
            sm: "center",
            xs: "center",
          },
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            fontFamily: "urbanist",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "36px",
            color: "#000000",
          }}
        >
          Congratulations!!!
        </Typography>
        <Typography
          style={{
            fontFamily: "urbanist",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#000000",
            marginTop: 6,
          }}
        >
          You have been awarded <b>Gold Medal</b> and
        </Typography>
        <Typography
          style={{
            fontFamily: "urbanist",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#000000",
          }}
        >
          a <b>Samsung Smart Tab</b>for scoring <b>Rank 1</b>
        </Typography>
        <Typography
          style={{
            fontFamily: "urbanist",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#000000",
          }}
        >
          in the <b>Regional Maths Olympiad.</b>
        </Typography>

        <Typography
          style={{
            fontFamily: "urbanist",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#000000",
            marginTop: 6,
          }}
        >
          The medal and Samsung Smart Tab shall be awarded
        </Typography>
        <Typography
          style={{
            fontFamily: "urbanist",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            color: "#000000",
          }}
        >
          to you during the Award Ceremony scheduled on __/__/____
        </Typography>
        <Grid
          container
          mt={1}
          sx={{
            display: "flex",
            justifyContent: {
              lg: "flex-start",
              md: "center",
              sm: "center",
              xs: "center",
            },
            alignItems: {
              lg: "flex-start",
              md: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Grid
            item
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: 66, height: 47 }}>
              <img src="images/certificate.png" alt="certificate" />
            </Box>
          </Grid>
          <Grid
            item
            lg={9}
            mt={3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft:{lg:-8,md:2,sm:2,xs:2}
            }}
          >
            <Typography
              style={{
                fontFamily: "urbanist",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "22px",
                color: "#000000",
              }}
            >
              Download Certificate
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default GoldAward;
