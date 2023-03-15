import React from "react";
import EastIcon from '@mui/icons-material/East';
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import ReactCardCarousel from 'react-card-carousel';
import AwardPage from "../Dashboard/Awards";
import "./card.css";
const Card1 = () => {
    const handleClick=()=>{
        window.location.href="/AwardPage";
    };
  return (
 <div className="card-container">
     <div className="card" >
      <div className="card-body">
        <div className="left-section">
          <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'16px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
          <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'12px',color:'#FFFFFF'}}>Cambridge School</Typography>
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
          <img src="images/Group 1938.png"></img>
        </div>
        <div className="bottom-right-section" style={{marginRight:'15px'}}>
            <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Result</Typography>
          <img src="../images/Arrow6.svg"  sx={{color:'#FFFFFF', fontSize:42}} onClick={handleClick}/>
        </div>
      </div>
    </div>   
    </div> 
    
  );
};

export default Card1;
