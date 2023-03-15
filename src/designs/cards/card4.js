import React from "react";
import EastIcon from '@mui/icons-material/East';
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import ReactCardCarousel from 'react-card-carousel';
import AwardPage from "../Dashboard/Awards";
const Card4 = () => {
    const handleClick=()=>{
        window.location.href="/AwardPage";
    };
  return (
 <div className="card-container">
     <div className="card" >
      <div className="card-body">
        <div className="left-section">
          <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'15px',color:'#FFFFFF'}}>MATHS OLYMPIAD - National</Typography>
          <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'11px',color:'#FFFFFF'}}>Cambridge School</Typography>
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
            <Typography className="bottom-right-section" sx={{color:'#FFFFFF',fontSize:'20px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'11px'}}>    </Typography>
          <img src="../images/NotEligible.svg" sizes="30px"/>
        </div>
      </div>
    </div>   
    </div> 
    
  );
};

export default Card4;
