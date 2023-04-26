import {Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useStore } from "../../stores";
const Card3 = () => {
  const navigate = useNavigate();
  const [ isEnrolled , setIsEnrolled ] = useState(false);
  const currentUser = useStore((state) => state.currentUser);
  const [data, setData] = useState();

  useEffect(() => {
    const getSubscriptions = async () => {
      try {
        const response = await getSubscriptions(currentUser.userId);
        const data = response.data;
        setData(data);
        setIsEnrolled(data.some(item => item.userId === currentUser.userId));
      } catch (error) {
        console.log(error);
      }
    };
    getSubscriptions();
  }, [currentUser.userId]);
  return (
    <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
    <Grid  container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
     <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
         <div className="card"  style={{backgroundColor:'#E54545'}}>
         <div className="card-body" style={{backgroundColor:'#E54545'}}>
         <div className="left-section" style={{backgroundColor:'#E54545'}}>
           <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'15px',color:'#FFFFFF'}}>SCIENCE OLYMPIAD- Regional</Typography>
           <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'11px',color:'#FFFFFF'}}>Cambridge School</Typography>
         </div>
         <div className="right-section1" style={{backgroundColor:'#E54545'}}>
           {/* <div className="calendar">12</div> */}
           <img src="../images/TBSch.svg" alt="calender"/>
         </div>
       </div>
       <div className="card-footer" style={{backgroundColor:'#E54545'}}>
         <div className="bottom-section" style={{backgroundColor:'#E54545'}}>
           {/* <SvgIcon /> */}
           <img src="images/Honey.svg" alt="honey"></img>
         </div>
         {isEnrolled ? (<div className="bottom-right-section" style={{backgroundColor:'#E54545',marginRight:'15px'}}>
                  <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Result</Typography>
                <img src="../images/Arrow6.svg" alt="Arrow"  sx={{color:'#FFFFFF', fontSize:42}} onClick={() => {navigate('/Silver')}}/>
              </div>
              ):(
              <div className="bottom-right-section" style={{backgroundColor:'#E54545',marginRight:'15px'}}>
              <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Enroll</Typography>
            <img src="../images/Arrow6.svg" alt="Arrow"  sx={{color:'#FFFFFF', fontSize:42}} onClick={() => {navigate('/subscription')}}/>
          </div>)}
       </div>
     </div>   
     </Grid>
    </Grid>
  </Box>
  );
};


export default Card3;
