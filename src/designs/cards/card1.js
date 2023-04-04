import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./card.css";
import {AnimateSharedLayout} from 'framer-motion';
import {UilTimes} from "@iconscout/react-unicons";
const Card1 = (props) => {
    const [ expanded, setExpanded] = useState(false);
  return (
          <AnimateSharedLayout >
            {
          expanded? (
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
          ):(
            <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
          )
        }
          </AnimateSharedLayout>
  );
};
function CompactCard({ param, setExpanded}){
  
 return(
  <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: '10px' }, width: { xs: '100%', sm: 'auto' } }}>
    <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
      <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
      <div className="card">
            <div className="card-body">
              <div className="left-section">
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: { xs: '10px', sm: '12px' },
                    lineHeight: '16px',
                    color: '#FFFFFF'
                  }}>
                  MATHS OLYMPIAD - Regional
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: { xs: '8px', sm: '9px' },
                    lineHeight: '12px',
                    color: '#FFFFFF'
                  }}>
                  Cambridge School
                </Typography>
              </div>
              <div className="right-section">
                <Typography
                  className="date"
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '18px', sm: '21px' },
                    fontWeight: '400',
                    fontStyle: 'normal',
                    lineHeight: '25px'
                  }}>
                  12
                </Typography>
                <Typography
                  className="month"
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '8px', sm: '10px' },
                    fontWeight: '400',
                    fontStyle: 'normal',
                    lineHeight: '12px'
                  }}>
                  Nov
                </Typography>
              </div>
            </div>
            <div className="card-footer">
              <div className="bottom-section">
                <img src="images/maths.png" alt="maths" />
              </div>
              <div className="bottom-right-section" >
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontSize: { xs: '8px', sm: '10px' },
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '12px',
                    display: { xs: 'none', sm: 'block' }
                  }}>
                  Result
                </Typography>
                <img
                  src="images/Arrow5.png"
                  alt="Arrow"
                  onClick={setExpanded}
                  sx={{ color: '#FFFFFF', fontSize: { xs: "24px", sm: "42px" } }}
                />
              </div>
            </div>
          </div>
      </Grid>
    </Grid>
  </Box>
 
  )
}

  function ExpandedCard({param, setExpanded}){

    const [option,setOption ] = useState('option1');
   
    function handleOptionChange(newOption){
      setOption(newOption);
    }
    const publicUrl = process.env.PUBLIC_URL;
    return (
       <Box sx={{ flexGrow: 0.5, marginLeft: { xs: 0, sm: '10px' }, width: { xs: '100%', sm: 'auto' } }}>
        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
          <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center">
          <div className='ExpandedCard'
            style={{
                background:"rgba(217, 217, 217, 0.3)",
            }}   
            >
              <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: '10px' }, width: { xs: '100%', sm: 'auto' } }}>
                <Grid container spacing={1} minHeight={{ xs: 160, sm: 140 }}>
                  <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="column">                  
                <div className="card-header">
                <UilTimes  className="cross" onClick={setExpanded}/>
                  <div className="left">
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
                  <img src=" images/maths.png" alt="maths71"/>
                  </div>
                    <div className="middle">
                      <div className="calendar">
                        <box className="calen-box">
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
                      </box>
                      </div>
                    </div>
                    <div className="right">
                      <div className="right-sect">

                        <Typography
                         style={{fontFamily:'Inter', 
                         fontSize:'10px',fontStyle:'normal',
                         fontWeight:'500',lineHeight:'12px',
                         color:'#FFFFFF'}}>QUALIFYING STATUS</Typography>
                        <img src="images/badge.png" alt="badge83"/>
                        <Typography 
                        style={{fontFamily:'Inter',
                         fontSize:'14px',fontStyle:'normal',
                         fontWeight:'700',lineHeight:'17px',
                         color:'#FFFFFF'}}>
                          Qualified for Nationals</Typography> 
                        
                        </div>
                  </div>
                </div>
                </Grid>
          </Grid>
        </Box>
              
        <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: '10px' }, width: { xs: '100%', sm: 'auto' } }}>
          <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
            <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="column">         
        <div className="options">
                <button className="opt-btn1"  onClick={()=> handleOptionChange('option1')}>
                  <Typography
                   style={{color:'#000000',
                   fontFamily:'Urbanist',fontSize:'18px',
                    fontStyle:'normal',fontWeight:'500',
                    lineHeight:'22px'}}>Result</Typography></button>
                <button className="opt-btn2"  onClick={()=> handleOptionChange('option2')}>
                  <Typography 
                  style={{color:'#000000',
                  fontFamily:'Urbanist',
                  fontSize:'18px', 
                  fontStyle:'normal',
                  fontWeight:'500',
                  lineHeight:'22px'}}>Awards & Certificates</Typography></button>
                <Button variant="outlined" className="eye-btn" 
                 startIcon={<img src="images/eye.png" alt="eye95"/>}>
                  <Typography 
                  style={{color:'#000000',fontFamily:'Urbanist',
                  fontSize:'14px', fontStyle:'normal',
                  fontWeight:'600',lineHeight:'17px'}}>
                    VIEW TEST</Typography>
                  </Button>
              </div>
              {option === 'option1' &&(
                
                <div className="Result-content">
                  <div className="left-result">
                    <Box className="head-result" >
                      <Typography style={{color:'#000000',
                                  fontFamily:'Urbanist',
                                  fontSize:'18px', fontStyle:'normal',fontWeight:'700',
                                  lineHeight:'22px'}}>
                                    Score Summary</Typography>
                      <Typography style={{color:'#000000',
                                  fontFamily:'Urbanist',
                                  fontSize:'24px', fontStyle:'normal',fontWeight:'500',
                                  lineHeight:'29px'}}>
                        28/30</Typography>
                    </Box>
                    <Box >
                    <Button className="result-btn">
                      <Typography className="text-btn"
                                  style={{color:'#000000',
                                  fontFamily:'Urbanist',
                                  fontSize:'14px', 
                                  fontStyle:'normal',
                                  fontWeight:'500',
                                  lineHeight:'17px'}}
                      >Total Questions</Typography>
                      <Typography 
                            style={{color:'#000000',
                            fontFamily:'Urbanist',
                            fontSize:'21px', 
                            fontStyle:'normal',
                            fontWeight:'500',
                            lineHeight:'25px'}}>
                      30</Typography>
                    </Button>
                  </Box>
                    <Button className="result-btn1">
                      <Typography className="text-btn">Attempted Questions</Typography>
                      <Typography>30</Typography>
                    </Button>

                    <Button className="result-btn">
                      <Typography className="text-btn">Unattempted Questions</Typography>
                      <Typography>0</Typography>
                    </Button>

                    <Button className="result-btn">
                      <Typography className="text-btn">Score Percentage</Typography>
                      <Typography>93.33%</Typography>
                    </Button>
                  </div>

                  <div className="right-result">
                    <div className="right-header">
                      <Typography variant="h6">Comparative Scores</Typography>
                    </div>

                    <Box sx={{ padding: '15px 50px', width: '100%' }}>
                      <Typography>Rank</Typography>
                      <Typography>Percentage (%)</Typography>
                      <Typography>Percentile</Typography>
                    </Box>

                    <Box>
                      <Button>You</Button>
                    </Box>
                  </div>
                  </div>
              )}{option === 'option2' &&(
                  <div className="Award-content">
                    <div className="medal">
                    <img src={`${publicUrl}/images/goldmedal.png`} alt ="G-Medal"/>
                  </div>
                  <div style={{alignItems:'center',marginTop:'8%'}}>
                      <p style={{fontSize:'30px',fontWeight:'600',fontStyle:'normal',fontFamily:'Urbanist',lineHeight:'36px'}}>
                        Congratulations !!!</p>
                      <p style={{fontSize:'15px',fontWeight:'400',fontStyle:'mixed',fontFamily:'Urbanist',lineHeight:'18px'}}>
                        You have been awarded with a <strong>Gold Medal</strong> and</p>
                      <p style={{fontSize:'15px',fontWeight:'400',fontStyle:'mixed',fontFamily:'Urbanist',lineHeight:'18px'}}>
                        a <strong>Samsung Smart Tab</strong> for scoring <strong>Rank 1</strong></p>
                      <p style={{fontSize:'15px',fontWeight:'400',fontStyle:'mixed',fontFamily:'Urbanist',lineHeight:'18px'}}>
                        in the <strong>Regional Maths Olympiad</strong></p>
                      <p style={{fontSize:'15px',fontWeight:'400',fontStyle:'normal',fontFamily:'Urbanist',lineHeight:'18px'}}>
                        The medal and Samsung Smart Tab shall be awarded</p>
                      <p style={{fontSize:'15px',fontWeight:'400',fontStyle:'normal',fontFamily:'Urbanist',lineHeight:'18px'}}>
                        to you during the Award Ceremony scheduled on __/__/____</p>
                        <box className="certificate">
                        <img  src="images/certificate.png" alt="cert213"/></box>
                      <p style={{fontSize:'18px',fontWeight:'600',fontStyle:'normal',fontFamily:'Urbanist',lineHeight:'22px',marginLeft:'90px',marginTop:'40px'}}>
                        Download Certificate
                      </p>

                      </div>
                  </div>
              )}
              </Grid>
            </Grid>
        </Box>
        </div>
        
          </Grid>
        </Grid>
       </Box>
    );
}
export default Card1;
