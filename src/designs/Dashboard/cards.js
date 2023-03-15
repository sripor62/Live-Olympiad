import React from "react";
import EastIcon from '@mui/icons-material/East';
import { Grid, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import AwardPage from "./Awards";
import ReactCardCarousel from 'react-card-carousel';
import Card1 from "../cards/card1";
import Card2 from "../cards/card2";
import styled from "@emotion/styled";
import { display, Stack } from "@mui/system";
import Box from '@mui/material/Box';
import Card3 from "../cards/card3";
import Card4 from "../cards/card4";

const Card = () => {
    const handleClick=()=>{
        window.location.href="/AwardPage";
    };
  return (
    <Box sx={{ flexGrow: 1,marginLeft:'15px' }}>
        <Grid container spacing={1} minHeight={240}>
          <Stack direction={"row"} spacing={2}>
          
          <Grid xs display='flex' justifyContent="center" alignItems="center">
          <Card1/>
          </Grid>
          <Grid xs display='flex' justifyContent="center" alignItems="center">
          <Card2/>
          </Grid>
          <Grid xs display='flex' justifyContent="center" alignItems="center">
          <Card3/>
          </Grid>
          <Grid xs display='flex' justifyContent="center" alignItems="center">
          <Card4/>
          </Grid>
          </Stack>  
        </Grid>
    </Box>
  
    
  );
};

export default Card;
