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
function CompactCard({param,setExpanded}){
  
 return(
  <Box sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: '15px' }, width: { xs: '100%', sm: 'auto' } }}>
    <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
      <Grid item xs={12} sm={6} display='flex' justifyContent="center" alignItems="center">
      <div className="card" >
      <div className="card-body">
     <div className="left-section">
       <Typography 
       sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'700', fontSize:{xs:'10px',sm:'12px'},lineHeight:'16px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
       <Typography sx={{fontFamily:'Inter', fontStyle:'normal',fontWeight:'400', fontSize:{xs:'8px',sm:'9px'},lineHeight:'12px',color:'#FFFFFF'}}>Cambridge School</Typography>
     </div>
     <div className="right-section">
       {/* <div className="calendar">12</div> */}
       <Typography className="date" sx={{fontFamily:'Inter', fontSize:{xs:'18px',sm:'21px'},fontWeight:'400',fontStyle:'normal',lineHeight:'25px'}}>12</Typography>
       <Typography className="month" sx={{fontFamily:'Inter', fontSize:{xs:'8px',sm:'10px'},fontWeight:'400',fontStyle:'normal',lineHeight:'12px'}}>Nov</Typography>
      
     </div>
   </div>
   <div className="card-footer">
     <div className="bottom-section">
       {/* <SvgIcon /> */}
       <img src="images/maths.png" alt="maths"></img>
     </div>
     <div className="bottom-right-section" style={{marginRight:'15px'}}>
         <Typography 
         sx={{color:'#FFFFFF',fontSize:{ xs: "8px", sm: "10px" },fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',lineHeight:'12px'}}>Result</Typography>
       <img src="images/Arrow5.png" alt="Arrow" sx={{color:'#FFFFFF', fontSize:{ xs: "24px", sm: "42px" }}} onClick={setExpanded}/>
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
        <div className='ExpandedCard'
        style={{
            background:"rgba(217, 217, 217, 0.3)",
        }}   
        >
        <div className="card-header">
        <UilTimes  className="cross" onClick={setExpanded}/>
          <div className="left">
          <Typography style={{fontFamily:'Inter', fontSize:'24px',fontStyle:'normal',fontWeight:'700',lineHeight:'29px',color:'#FFFFFF'}}>MATHS OLYMPIAD - Regional</Typography>
          <Typography style={{fontFamily:'Inter', fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'17px',color:'#FFFFFF'}}>Cambridge School</Typography>
          <img src=" images/maths.png" alt="maths71"/>
          </div>
            <div className="middle">
              <div className="calendar">
                <box className="calen-box">
              <Typography  sx={{fontFamily:'Inter', fontSize:'21px',fontWeight:'400',fontStyle:'normal',lineHeight:'25px',color:'#000000'}}>12</Typography>
              <Typography  sx={{fontFamily:'Inter', fontSize:'12px',fontWeight:'400',fontStyle:'normal',lineHeight:'12px',color:'#000000'}}>Nov</Typography>
              </box>
              </div>
            </div>
            <div className="right">
              <div className="right-sect">

                <Typography style={{fontFamily:'Inter', fontSize:'10px',fontStyle:'normal',fontWeight:'500',lineHeight:'12px',color:'#FFFFFF'}}>QUALIFYING STATUS</Typography>
                 <img src="images/badge.png" alt="badge83"/>
                 <Typography style={{fontFamily:'Inter', fontSize:'14px',fontStyle:'normal',fontWeight:'700',lineHeight:'17px',color:'#FFFFFF'}}>Qualified for Nationals</Typography> 
                
                </div>
          </div>
        </div>
       
        <div className="options">
                <button className="opt-btn1"  onClick={()=> handleOptionChange('option1')}>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'500',lineHeight:'22px'}}>Result</Typography></button>
                <button className="opt-btn2"  onClick={()=> handleOptionChange('option2')}>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'500',lineHeight:'22px'}}>Awards & Certificates</Typography></button>
                <Button variant="outlined" className="eye-btn"  startIcon={<img src="images/eye.png" alt="eye95"/>}>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'600',lineHeight:'17px'}}>
                    VIEW TEST</Typography>
                    </Button>
              </div>
              {option === 'option1' &&(
                <div className="Result-content">
                  <div className="left-result">
                    <button  className="text-result">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'700',lineHeight:'22px'}}>
                    Score Summary</Typography>
                   <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'24px', fontStyle:'normal',fontWeight:'500',lineHeight:'29px'}}>
                    28/30 </Typography>
                    </button>
                  
                  <Button className="result-btn">
                  <Typography className="text-btn" style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                  Total Questions</Typography>
                  <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                    30</Typography>
                    </Button>
                    <Button className="result-btn1">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                    Attempted Questions</Typography>
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                      30</Typography>
                    </Button>
                    <Button className="result-btn2">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                    Unatempted Questions</Typography>
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                      0</Typography>
                    </Button>
                    <Button className="result-btn3">
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                    score Percentage</Typography>
                    <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                      93.33%</Typography>
                    </Button>
                  {/* <button><Typography>Total Questions</Typography></button>
                  <button><Typography>Attempted Questions</Typography></button>
                  <button><Typography>Unatempted Questions</Typography></button>
                  <button><Typography>score Percentage</Typography></button> */}
                  </div>
                  <div className="right-result">
                    <div className="right-header">
                        <Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'18px', fontStyle:'normal',fontWeight:'700',lineHeight:'22px'}}>
                        Comparative Scores</Typography></div>
                      <table className="table">
                       
                        <tbody>
                        <tr>
                          <th className="col"></th>
                          <th><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                            You</Typography></th>
                          <th><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'15px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                            Top Performer</Typography></th>
                          <th><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                            Avg Performer</Typography></th>
                        </tr>
                        <tr>
                          <td>
                            <Typography></Typography>
                          </td>

                        </tr>                       
                              <tr>
                                <td className="title-tabl"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                                  Rank</Typography></td>
                                <td><button className="col1"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  7</Typography></button></td>
                                <td><button className="col2"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  1</Typography></button></td>
                                <td><button className="col3"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  14</Typography></button></td>
                              </tr>
                              <tr>
                                <td className="title-tabl"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                                  Percentage (%)</Typography></td>
                                <td><button className="col1"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  92</Typography></button></td>
                                <td><button className="col2"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  97</Typography></button></td>
                                <td><button className="col3"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  84</Typography></button></td>
                              </tr>
                              <tr>
                                <td className="title-tabl"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'14px', fontStyle:'normal',fontWeight:'500',lineHeight:'17px'}}>
                                  Percentile</Typography></td>
                                <td><button className="col1"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  40</Typography></button></td>
                                <td><button className="col2"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  53</Typography></button></td>
                                <td><button className="col3"><Typography style={{color:'#000000',fontFamily:'Urbanist',fontSize:'21px', fontStyle:'normal',fontWeight:'500',lineHeight:'25px'}}>
                                  24</Typography></button></td>
                              </tr>
                        </tbody>
                      </table>
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
        </div>
    );
}
export default Card1;
