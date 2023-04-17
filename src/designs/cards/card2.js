import { Box, Grid,Typography } from "@mui/material";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card2 = () => {
  const navigate = useNavigate();
  return (
       <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
          <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
          <div className="card"  style={{backgroundColor:'#42BBEF'}}>
            <div className="card-body" style={{backgroundColor:'#42BBEF'}}>
              <div className="left-section" style={{backgroundColor:'#42BBEF'}}>
                <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:'12px',lineHeight:'16px',color:'#FFFFFF'}}>SCIENCE OLYMPIAD - Regional</Typography>
                <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:'9px',lineHeight:'12px',color:'#FFFFFF'}}>Cambridge School</Typography>
              </div>
              <div className="right-section" >
                {/* <div className="calendar">12</div> */}
                <Typography className="date" sx={{fontFamily:'Inter', fontSize:'21px',fontWeight:'400',fontStyle:'normal',lineHeight:'25px'}}>18</Typography>
                <Typography className="month" sx={{fontFamily:'Inter', fontSize:'10px',fontWeight:'400',fontStyle:'normal',lineHeight:'12px'}}>Dec</Typography>
                
              </div>
            </div>
            <div className="card-footer" style={{backgroundColor:'#42BBEF'}}>
              <div className="bottom-section" style={{backgroundColor:'#42BBEF'}}>
                {/* <SvgIcon /> */}
                <img src="images/Group 1939.svg" alt="group 1939"></img>
              </div>
              <div className="bottom-right-section" style={{backgroundColor:'#42BBEF',marginRight:'15px'}}>
                  <Typography sx={{color:'#FFFFFF',fontSize:'10px',fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Enroll</Typography>
                <img src="../images/Arrow6.svg" alt="Arrow"  sx={{color:'#FFFFFF', fontSize:42}} onClick={() => {navigate('/Silver')}}/>
              </div>
            </div>
          </div>
          
          </Grid>
        </Grid>
    </Box>
    
  );
};

export default Card2;
