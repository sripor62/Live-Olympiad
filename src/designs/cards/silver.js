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
          <Box
            sx={{
                background:"rgba(217, 217, 217, 0.3)",width:'100%',height:'100%',marginTop:'2%',borderRadius:'10px 10px 10px 10px;'
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
                            <img src="images/target.png" alt="target"/>
                            <Typography 
                            style={{fontFamily:'Inter',
                            fontSize:'14px',fontStyle:'normal',
                            fontWeight:'700',lineHeight:'17px',
                            color:'#FFFFFF'}}>
                               Try Again Next Time
                        </Typography> 
                      </Box>  
                    </Box>
                   </Grid>
                </Grid>
     

        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
       
            <Button onClick={handleResultClick}
              sx={{backgroundColor:activeButton === "result" ? "rgba(69, 69, 165, 0.3)": "rgba(69, 69, 165, 0.1)",width:'287px',height:'44px',borderRadius:'0px 0px 10px 10px',marginLeft:'26%'}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      Result
              </Typography>
            </Button>
            <Button onClick={handleAwardsClick}
              sx={{backgroundColor:activeButton === "awards" ? "rgba(69, 69, 165, 0.3)": "rgba(69, 69, 165, 0.1)",width:'287px',height:'44px',borderRadius:'0px 0px 10px 10px',boxshadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',marginLeft:'6px'}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      Awards & Certificates  
              </Typography>
            </Button>
            <Button startIcon={<img src="images/eye.png" alt="eye" />} sx={{width:'151px',height:'36px',borderRadius:'10px 10px 10px 10px',border:'1px solid black',marginLeft:'70px',marginTop:'18px'}}>
             
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      VIEW TEST
              </Typography>
            </Button>
         
        </Grid>    
        <Box>
          {
            activeButton === 'result' &&(
              <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
                <Box sx={{ marginTop:'-6%',marginLeft:'62%'}}>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'18px',fontStyle:'normal',
                      fontWeight:'700',lineHeight:'22px',
                      color:'#000000'}}>
                        Comparative Scores
                  </Typography>
                  </Box>
                <Grid  item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="row">
                <Box marginRight='6%' marginTop='-16%'>
                 <Box sx={{height:'100%',flexDirection:'row',display:'flex',justifyContent:'center'}}>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'18px',fontStyle:'normal',
                      fontWeight:'700',lineHeight:'22px',
                      color:'#000000'}}>
                        Score Summary
                  </Typography>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'24px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'29px',
                      color:'#000000',marginLeft:'68px'}}>
                        28/30
                  </Typography>
                  </Box>
                
                  <Box sx={{marginTop:'4%',display:'flex',flexDirection:'row',borderRadius:'5px',backgroundColor:'rgba(69, 69, 165, 0.1)',width:'288px',height:'40px',justifyContent:'center',alignItems:'center'}}>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'14px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'17px',
                      color:'#000000'}}>
                        Total Questions
                  </Typography>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'21px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'25px',
                      color:'#000000',marginLeft:'36%'}}>
                        30
                  </Typography>
                  </Box>
                  <Box sx={{marginTop:'2%',display:'flex',flexDirection:'row',borderRadius:'5px',backgroundColor:'#42BBEF',width:'288px',height:'40px',justifyContent:'center',alignItems:'center'}}>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'14px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'17px',
                      color:'#000000'}}>
                        Attempted Questions
                  </Typography>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'21px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'25px',
                      color:'#000000',marginLeft:'25%'}}>
                        30
                  </Typography>
                  </Box>
                  <Box sx={{marginTop:'2%',display:'flex',flexDirection:'row',borderRadius:'5px',backgroundColor:'#FFD000',width:'288px',height:'40px',justifyContent:'center',alignItems:'center'}}>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'14px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'17px',
                      color:'#000000'}}>
                        Unattempted Questions
                  </Typography>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'21px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'25px',
                      color:'#000000',marginLeft:'24%'}}>
                        0
                  </Typography>
                  </Box>
                  <Box sx={{marginTop:'2%',display:'flex',flexDirection:'row',borderRadius:'5px',backgroundColor:'rgba(69, 69, 165, 0.1)',width:'288px',height:'40px',justifyContent:'center',alignItems:'center'}}>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'14px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'17px',
                      color:'#000000'}}>
                        Score Percentage
                  </Typography>
                  <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'21px',fontStyle:'normal',
                      fontWeight:'500',lineHeight:'25px',
                      color:'#000000',marginLeft:'23%'}}>
                        99.33%
                  </Typography>
                  </Box>
                </Box>
                
                <Box sx={{marginRight:'1%',marginTop:"-8%" ,height:'100%',display:'flex',flexDirection:'column',alignItems:'right'}}> 
                  <Box  display="flex" justifyContent='right' alignItems="right">
                  <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                          Rank
                    </Typography>
                  </Box>
                  <Box marginTop="40%" display="flex" justifyContent='right' alignItems="right">
                  <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                          Percentage (%)
                    </Typography>
                  </Box>
                   <Box marginTop="40%" display="flex" justifyContent='right' alignItems="right">
                   <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                          Percentile
                    </Typography>
                   </Box>
                </Box>
                <Box sx={{borderRadius:'40px', border:'1px solid #838BA1', width:'83px',height:'233px', marginRight:'1%',marginTop:'-13%'}}>
                <Box  marginTop="20%" display="flex" justifyContent='center' alignItems="center">
                  <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                          You
                    </Typography>
                  </Box>
                  <Box sx={{borderRadius:'50px', backgroundColor:'rgba(69, 69, 165, 0.1)', width:'50px',height:'50px', marginLeft:'20%',marginTop:'31%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          7
                    </Typography>
                    </Box>
                    <Box sx={{borderRadius:'50px', backgroundColor:'rgba(69, 69, 165, 0.1)', width:'50px',height:'50px', marginLeft:'20%',marginTop:'6%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          92
                    </Typography>
                    </Box>
                    <Box sx={{borderRadius:'50px', backgroundColor:'rgba(69, 69, 165, 0.1)', width:'50px',height:'50px', marginLeft:'20%',marginTop:'6%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                         40
                    </Typography>
                    </Box>
                </Box>
                <Box sx={{borderRadius:'40px', border:'1px solid #838BA1', width:'83px',height:'233px', marginRight:'1%',marginTop:'-13%'}}>
                <Box  marginTop="9%" display="flex" justifyContent='center' alignItems="center" flexDirection='column'>
                  <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                          Top 
                    </Typography>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                         Performer
                    </Typography>
                  </Box>
                  <Box sx={{borderRadius:'50px', backgroundColor:'rgba(83, 208, 100, 0.3)', width:'50px',height:'50px', marginLeft:'20%',marginTop:'20%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          1
                    </Typography>
                    </Box>
                    <Box sx={{borderRadius:'50px', backgroundColor:'rgba(83, 208, 100, 0.3)', width:'50px',height:'50px', marginLeft:'20%',marginTop:'6%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          97
                    </Typography>
                    </Box>
                    <Box sx={{borderRadius:'50px', backgroundColor:'rgba(83, 208, 100, 0.3)', width:'50px',height:'50px', marginLeft:'20%',marginTop:'6%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          53
                    </Typography>
                    </Box>
                </Box>
                <Box sx={{borderRadius:'40px', border:'1px solid #838BA1', width:'83px',height:'233px', marginLeft:'1%',marginTop:'-13%'}}>
                <Box  marginTop="9%" display="flex" justifyContent='center' alignItems="center" flexDirection='column'>
                  <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                          Avg. 
                    </Typography>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'14px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'17px',
                        color:'#000000'}}>
                         Performer
                    </Typography>
                  </Box>
                  <Box sx={{borderRadius:'50px', backgroundColor:'#F6EDC3', width:'50px',height:'50px', marginLeft:'20%',marginTop:'18%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          14
                    </Typography>
                    </Box>
                    <Box sx={{borderRadius:'50px', backgroundColor:'#F6EDC3', width:'50px',height:'50px', marginLeft:'20%',marginTop:'6%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          84
                    </Typography>
                    </Box>
                    <Box sx={{borderRadius:'50px', backgroundColor:'#F6EDC3', width:'50px',height:'50px', marginLeft:'20%',marginTop:'6%', display:"flex", justifyContent:'center', alignItems:"center"}}>
                    <Typography 
                        style={{fontFamily:'urbanist',
                        fontSize:'21px',fontStyle:'normal',
                        fontWeight:'500',lineHeight:'25px',
                        color:'#000000'}}>
                          24
                    </Typography>
                    </Box>
                </Box>
                </Grid>
                
              </Grid>
              
            )
          }
          {
            activeButton === 'awards' &&(
              <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
                <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="row">
                   <Box sx={{marginLeft:'-5%',marginTop:'-14%',height:'100%'}}>
                    <img src="images/silver.png" alt="silver"/>
                  </Box>
        
                <Box sx={{marginLeft:'3%',marginTop:'-14%',height:'100%',display:'flex',flexDirection:'column',alignItems:'left'}}>
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
                  <Box sx={{marginLeft:'2%',width:'100%',marginTop:'20%'}}>
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
        </Box>

          </Grid>
        </Grid>
       </Box>
       </HomeLayout>
    );
}
export default SilverCard;