import { Box, Button, Grid, Typography } from "@mui/material";
import "./card.css";
import { UilTimes } from "@iconscout/react-unicons"
import HomeLayout from "../Dashboard/HomeLayout";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import BronzeHeader from "./headers/Bronze";

const BronzeCard = () => {
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
           
                <BronzeHeader/>
     

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
               
                
              </Grid>
              
            )
          }
          {
            activeButton === 'awards' &&(
              <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
                <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="row">
                   <Box sx={{marginLeft:'-5%',marginTop:'-14%',height:'100%'}}>
                    <img src="images/bronze.png" alt="bronze"/>
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
                        You have been awarded <b>Bronze Medal</b> 
                    </Typography>
                    <Typography 
                      style={{fontFamily:'urbanist',
                      fontSize:'15px',fontStyle:'normal',
                      fontWeight:'400',lineHeight:'18px',
                      color:'#000000'}}>
                        for scoring <b>Rank 3</b>
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
export default BronzeCard;