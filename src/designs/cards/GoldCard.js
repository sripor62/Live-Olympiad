import { Box, Button, Grid, Typography } from "@mui/material";
import "./card.css";
import HomeLayout from "../Dashboard/HomeLayout";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import GoldHeader from "./headers/Gold";
import GoldResult from "./Results/goldRes";
import GoldAward from "./awardsAndCertf/GoldAward";

const GoldCard = () => {
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
              <GoldHeader/>

        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
       
            <Button onClick={handleResultClick}
              sx={{backgroundColor:activeButton === "result" ? "rgba(69, 69, 165, 0.3)": "rgba(69, 69, 165, 0.1)",
                  width:{xs:'30%',sm:'287px'},height:'44px',borderRadius:'0px 0px 10px 10px',
                  marginLeft:{xs:'10%',sm:'29%'}}}>
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
                  width:{xs:'50%',sm:'287px'},height:'44px',borderRadius:'0px 0px 10px 10px',boxshadow:'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                  marginLeft:{xs:'6%',sm:'6px'}}}>
              <Typography 
                style={{fontFamily:'urbanist',
                fontSize:{xs:'10px',sm:'18px'},fontStyle:'normal',
                fontWeight:'500',lineHeight:{xs:'14px',sm:'22px'},
                color:'#000000'}}>
                      Awards & Certificates  
              </Typography>
            </Button>
            <Button startIcon={<img src="images/eye.png" alt="eye" />} 
                    sx={{width:'151px',height:'36px',
                    borderRadius:'10px 10px 10px 10px',border:'1px solid black',
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
             <GoldResult/>
              
            )
          }
          {
            activeButton === 'awards' &&(
              <GoldAward/>
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
export default GoldCard;