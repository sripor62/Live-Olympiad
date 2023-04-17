import { Box, Button, Grid, Typography } from "@mui/material";
import "./card.css";
import { UilTimes } from "@iconscout/react-unicons"
import HomeLayout from "../Dashboard/HomeLayout";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

const SilverCard = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton]=useState('result');

    const handleResultClick = () => {
      setActiveButton('result');
    }
  
    const handleAwardsClick = () => {
      setActiveButton('awards');
    }

    return (
      <HomeLayout>        
       <Box sx={{ flexGrow: 0.5, marginLeft: { xs: 0, sm: '10px' }, width: { xs: '100%', sm: 'auto' } }}>
        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
          <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
          <div className='ExpandedCard'
            style={{
                background:"rgba(217, 217, 217, 0.3)",
            }}   
            >
           
                <Grid container spacing={1} minHeight={{ xs: 160, sm: 140 }}>
                  <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="column">                  
                    <Box sx={{backgroundColor:'#4545A5',borderRadius:'10px 10px 0px 0px', height:'140px',width:'100%'}}>
                      <Button sx={{color:'#FFFFFF',marginLeft:'94%'}}>
                        <UilTimes onClick={() => {navigate('/dashboard')}}/>
                      </Button>
                    <Box sx={{marginLeft:'2%',marginTop:'-20px'}}>
                    <Typography 
                      style={{fontFamily:'Inter', 
                      fontSize:'24px',fontStyle:'normal',
                      fontWeight:'700',lineHeight:'29px',
                      color:'#FFFFFF'}}>
                        MATHS OLYMPIAD - Regional</Typography>
                      <Typography 
                      style={{fontFamily:'Inter',
                      fontSize:'14px',
                      fontStyle:'normal',
                      fontWeight:'400',
                      lineHeight:'17px',
                      color:'#FFFFFF'}}>
                        Cambridge School</Typography>
                      <img src="images/maths.png" alt="maths71"/>
                    </Box>

                  <Box sx={{background:'#FFFFFF',borderRadius:'15px',width:'48px',height:'48px',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column',marginTop:'-9%',marginLeft:'46%'}}>
                    <Typography 
                        sx={{fontFamily:'Inter',
                          fontSize:'21px',
                          fontWeight:'400',
                          fontStyle:'normal',
                          lineHeight:'25px',
                          color:'#000000'}}>12</Typography>
                        <Typography 
                        sx={{fontFamily:'Inter',
                          fontSize:'12px',fontWeight:'400',
                          fontStyle:'normal',lineHeight:'12px',
                          color:'#000000'}}>Nov</Typography>
                  </Box>  
                      <Box sx={{marginLeft:'80%',marginTop:'-4%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
                        <Typography
                            style={{fontFamily:'Inter', 
                            fontSize:'10px',fontStyle:'normal',
                            fontWeight:'500',lineHeight:'12px',
                            color:'#FFFFFF'}}>QUALIFYING STATUS</Typography>
                            <img src="images/badge.png" alt="badge"/>
                            <Typography 
                            style={{fontFamily:'Inter',
                            fontSize:'14px',fontStyle:'normal',
                            fontWeight:'700',lineHeight:'17px',
                            color:'#FFFFFF'}}>
                              Qualified for Nationals
                        </Typography> 
                      </Box>  
                    </Box>
                   </Grid>
                </Grid>
     

        <Grid>
         <Box>
            <Button onClick={handleResultClick}
              sx={{backgroundColor:'rgba(69, 69, 165, 0.1)',width:'287px',height:'44px',borderRadius:'0px 0px 10px 10px'}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      Result
              </Typography>
            </Button>
            <Button onClick={handleAwardsClick}
              sx={{backgroundColor:'rgba(69, 69, 165, 0.3)',width:'287px',height:'44px',borderRadius:'0px 0px 10px 10px',boxshadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',marginLeft:'6px'}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      Awards & Certificates  
              </Typography>
            </Button>
            <Button startIcon={<img src="images/eye.png" alt="eye" />} sx={{width:'151px',height:'36px',borderRadius:'10px 10px 10px 10px',border:'1px solid black',marginLeft:'70px',marginTop:'7px'}}>
             
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      VIEW TEST
              </Typography>
            </Button>
         </Box>
        </Grid>    
        <Box>
          {
            activeButton === 'result' &&(
              <Grid >
                <Typography 
                  style={{fontFamily:'urbanist',
                  fontSize:'18px',fontStyle:'normal',
                  fontWeight:'500',lineHeight:'22px',
                  color:'#000000'}}>
                    Result Content
               </Typography>
              </Grid>
            )
          }
          {
            activeButton === 'awards' &&(
              <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
                <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="row">
                   <Box sx={{marginLeft:'-60%',marginTop:'50%',height:'100%'}}>
                    <img src="images/silver.png" alt="silver"/>
                  </Box>
        
                <Box sx={{marginLeft:'10%',marginTop:'63%',height:'100%',display:'flex',flexDirection:'column',alignItems:'left'}}>
                  <Typography 
                    style={{fontFamily:'urbanist',
                    fontSize:'30px',fontStyle:'normal',
                    fontWeight:'600',lineHeight:'36px',
                    color:'#000000'}}>
                      Congratulations!!!
                  </Typography>
                    <Box sx={{marginLeft:'2%',marginTop:'3%',width:'100%'}}>
                    <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'15px',fontStyle:'normal',
                      fontWeight:'400',lineHeight:'18px',
                      color:'#000000'}}>
                        You have been awarded <b>Silver Medal</b> 
                    </Typography>
                    <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'15px',fontStyle:'normal',
                      fontWeight:'400',lineHeight:'18px',
                      color:'#000000'}}>
                        for scoring <b>Rank 2</b>
                    </Typography>
                    <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'15px',fontStyle:'normal',
                      fontWeight:'400',lineHeight:'18px',
                      color:'#000000'}}>
                        in the <b>Regional Maths Olympiad.</b>
                    </Typography>
                  </Box>
                  <Box sx={{marginLeft:'2%',width:'100%'}}>
                    <Box>
                      <img src="images/certificate.png" alt="certificate"/>
                    </Box>
                    <Box sx={{marginLeft:'35%',marginTop:'-22%',height:'100%',width:'100%'}}>
                      <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'18px',fontStyle:'normal',
                        fontWeight:'600',lineHeight:'22px',
                        color:'#000000'}}>
                          Download Certificate
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                

                </Grid>
                
              </Grid>
            )
          }
        </Box> 
        </div>

          </Grid>
        </Grid>
       </Box>
       </HomeLayout>
    );
}
export default SilverCard;