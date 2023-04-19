import { Box, Grid, Typography } from "@mui/material";
import React from 'react';
const GoldAward=()=>{
    return(
        <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
        <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" flexDirection="row">
           <Box sx={{marginLeft:{xs:'20%',sm:'-5%'},
                    marginTop:{xs:'10%',sm:'-14%'},
                    height:'100%'}}>
            <img src="images/goldmedal.png" alt="Gold"/>
          </Box>

        <Box sx={{marginLeft:{xs:'-60%',sm:'3%'},marginTop:{xs:'35rem',sm:'-14%'},height:'100%',
                display:'flex',flexDirection:'column',alignItems:'left'}}>
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
                You have been awarded <b>Gold Medal</b> and
            </Typography>
            <Typography 
              style={{fontFamily:'urbanist',
              fontSize:'15px',fontStyle:'normal',
              fontWeight:'400',lineHeight:'18px',
              color:'#000000'}}>
                a <b>Samsung Smart Tab</b>for scoring <b>Rank 1</b>
            </Typography>
            <Typography 
              style={{fontFamily:'urbanist',
              fontSize:'15px',fontStyle:'normal',
              fontWeight:'400',lineHeight:'18px',
              color:'#000000'}}>
                in the <b>Regional Maths Olympiad.</b>
            </Typography>
          </Box>
          <Box sx={{marginLeft:'2%',marginTop:'3%',width:'100%'}}>
          <Typography 
              style={{fontFamily:'urbanist',
              fontSize:'15px',fontStyle:'normal',
              fontWeight:'400',lineHeight:'18px',
              color:'#000000'}}>
                The medal and Samsung Smart Tab shall be awarded
            </Typography>
            <Typography 
              style={{fontFamily:'urbanist',
              fontSize:'15px',fontStyle:'normal',
              fontWeight:'400',lineHeight:'18px',
              color:'#000000'}}>
                to you during the Award Ceremony scheduled on __/__/____
            </Typography>
          </Box>
          <Box sx={{marginLeft:'2%',width:'100%',marginTop:'5%'}}>
            <Box>
              <img src="images/certificate.png" alt="certificate"/>
            </Box>
            <Box sx={{marginLeft:'25%',marginTop:'-15%',height:'100%',width:'100%'}}>
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
export default GoldAward;