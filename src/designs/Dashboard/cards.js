import {useState} from "react";
import { Grid } from "@mui/material";
import Card1 from "../cards/card1";
import Card2 from "../cards/card2";
import Card3 from "../cards/card3";
import Card4 from "../cards/card4";
import { Card5 } from "../cards/card5";

const Card = () => {
  const [ expanded, setExpanded] = useState(false);
  return (
    <Grid container spacing={1}  sx={{ flexGrow: 1, marginLeft: "10px",width:'100%' }}>
    <Grid item xs={12} sm={6} md={3} >
      <Card1 />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Card2 />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Card3 />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <Card4 />
    </Grid>
  </Grid>
  );
};

export default Card;
