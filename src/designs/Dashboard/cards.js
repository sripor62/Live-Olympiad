import {useState} from "react";
import { Grid } from "@mui/material";
import Card1 from "../cards/card1";
import Card2 from "../cards/card2";
import { Stack } from "@mui/system";
import Box from '@mui/material/Box';
import Card3 from "../cards/card3";
import Card4 from "../cards/card4";

const Card = () => {
  const [ expanded, setExpanded] = useState(false);
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
