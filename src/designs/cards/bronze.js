import { Box, Button, Grid, Typography } from "@mui/material";
import "./card.css";
import { UilTimes } from "@iconscout/react-unicons"
import HomeLayout from "../Dashboard/HomeLayout";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import BronzeHeader from "./headers/Bronze";
import BronzeResult from "./Results/bronzeRes";
import BronzeAward from "./awardsAndCertf/BronzeAward";
import React from 'react';
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
              sx={{backgroundColor:activeButton === "result" ? "rgba(69, 69, 165, 0.3)": "rgba(69, 69, 165, 0.1)",
                  width:{xs:'30%',sm:'287px'},height:'44px',borderRadius:'0px 0px 10px 10px',
                  marginLeft:{xs:'10%',sm:'26%'}}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      Result
              </Typography>
            </Button>
            <Button onClick={handleAwardsClick}
              sx={{backgroundColor:activeButton === "awards" ? "rgba(69, 69, 165, 0.3)": "rgba(69, 69, 165, 0.1)",
                   width:{xs:'50%',sm:'287px'},height:'44px',borderRadius:'0px 0px 10px 10px',
                   boxshadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                   marginLeft:{xs:'8%',sm:'1%'}}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:'18px',fontStyle:'normal',
                fontWeight:'500',lineHeight:'22px',
                color:'#000000'}}>
                      Awards & Certificates  
              </Typography>
            </Button>
            <Button startIcon={<img src="images/eye.png" alt="eye" />} 
                    sx={{width:'151px',height:'36px',borderRadius:'10px 10px 10px 10px',
                    border:'1px solid black',
                    marginLeft:{xs:'30%',sm:'70px'},
                    marginTop:'18px'}}>
             
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
               <BronzeResult/>               
              </Grid>
              
            )
          }
          {
            activeButton === 'awards' &&(
              <BronzeAward/>
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