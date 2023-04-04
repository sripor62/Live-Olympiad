import { Box, Grid, Typography } from "@mui/material";
import { AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import {UilTimes} from "@iconscout/react-unicons";
const Card4 = () => {
  const [ expanded, setExpanded] = useState(false);
  return (
      <AnimateSharedLayout>
        {
          expanded? (
            "Expanded Card"
            // <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
          ):(
            <CompactCard setExpanded={()=>setExpanded(true)}/>
          )
        }
      </AnimateSharedLayout>
    
  );
};
function CompactCard({setExpanded}){
  return(
    <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
      <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
      <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
        <div className="card" >
          <div className="card-body">
            <div className="left-section">
              <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'14px',lineHeight:'15px',color:'#FFFFFF'}}>MATHS OLYMPIAD - National</Typography>
              <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'10px',lineHeight:'11px',color:'#FFFFFF'}}>Cambridge School</Typography>
            </div>
            <div className="right-section">
              {/* <div className="calendar">12</div> */}
              <Typography className="date" sx={{fontFamily:'Inter', fontSize:'21px',fontWeight:'400',fontStyle:'normal',lineHeight:'25px'}}>12</Typography>
              <Typography className="month" sx={{fontFamily:'Inter', fontSize:'10px',fontWeight:'400',fontStyle:'normal',lineHeight:'12px'}}>Nov</Typography>
            
            </div>
          </div>
          <div className="card-footer">
            <div className="bottom-section">
              {/* <SvgIcon /> */}
              <img src="images/Group 1938.png" sizes="30px"></img>
            </div>
            <div className="bottom-right-section" style={{marginRight:'20px'}}>
                <Typography className="bottom-right-section" sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Not Eligible    </Typography>
              
            </div>
          </div>
        </div> 
        </Grid>
     </Grid>
 </Box>  
  )
}

export default Card4;
