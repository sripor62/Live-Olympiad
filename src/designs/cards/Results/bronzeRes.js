import { Box, Button, Grid, Typography } from "@mui/material"
import React from 'react';
const BronzeResult = () => {
return(
    
    <Grid container spacing={1} minHeight={{ xs: 160, sm: 240 }}>
    <Grid item xs={12} sm={12}>
    <Box sx={{marginTop:{xs:'0%',sm:'-10%'},marginLeft:{xs:'-90%',sm:'1%'},display:"flex",flexDirection:'column'}}>
    <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'18px',fontStyle:'normal',
          fontWeight:'700',lineHeight:'22px',
          color:'#000000',marginTop:{xs:'0%',sm:'-10%'},marginLeft:'61%'}}>
            Comparative Scores
      </Typography>
      </Box>
    <Box sx={{marginLeft:{xs:'0%',sm:'21%'}}}>
     <Box sx={{marginTop:'2rem',marginLeft:{xs:'15%',sm:'0%'},display:"flex",flexDirection:'row'}}>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'18px',fontStyle:'normal',
          fontWeight:'700',lineHeight:'22px',
          color:'#000000',marginLeft:'2%'}}>
            Score Summary
      </Typography>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'24px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'29px',
          color:'#000000',marginLeft:'6%'}}>
            28/30
      </Typography>
      </Box>
    
      <Box sx={{marginTop:'1rem',display:'flex',flexDirection:'row',
                borderRadius:'5px',backgroundColor:'rgba(69, 69, 165, 0.1)',
                width: { xs: '100%', sm: '288px' },height:'40px',justifyContent:'center',alignItems:'center'}}>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'14px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'17px',
          color:'#000000',marginRight:'10%'}}>
            Total Questions
      </Typography>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'21px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'25px',
          color:'#000000',marginLeft:'29%'}}>
            30
      </Typography>
      </Box>
      <Box sx={{marginTop:'0.5rem',display:'flex',flexDirection:'row',borderRadius:'5px',
                backgroundColor:'#42BBEF',width: { xs: '100%', sm: '288px' },height:'40px',
                justifyContent:'center',
                alignItems:'center'}}>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'14px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'17px',
          color:'#000000',marginRight:'8%'}}>
            Attempted Questions
      </Typography>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'21px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'25px',
          color:'#000000',marginLeft:'20%'}}>
            30
      </Typography>
      </Box>
      <Box sx={{marginTop:'0.5rem',display:'flex',flexDirection:'row',
                borderRadius:'5px',backgroundColor:'#FFD000',width: { xs: '100%', sm: '288px' },
                height:'40px',justifyContent:'center',alignItems:'center'}}>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'14px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'17px',
          color:'#000000',marginRight:'6%'}}>
            Unattempted Questions
      </Typography>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'21px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'25px',
          color:'#000000',marginLeft:'20%'}}>
            0
      </Typography>
      </Box>
      <Box sx={{marginTop:'0.5rem',display:'flex',flexDirection:'row',borderRadius:'5px',
                backgroundColor:'rgba(69, 69, 165, 0.1)',width: { xs: '100%', sm: '288px' },height:'40px',
                justifyContent:'center',alignItems:'center'}}>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'14px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'17px',
          color:'#000000',marginRight:'4%'}}>
            Score Percentage
      </Typography>
      <Typography 
          style={{fontFamily:'urbanist',
          fontSize:'21px',fontStyle:'normal',
          fontWeight:'500',lineHeight:'25px',
          color:'#000000',marginLeft: '20%'}}>
            99.33%
      </Typography>
      </Box>
      </Box>
    
    <Box sx={{marginRight:{xs:'75%',sm:'45%'},marginTop:{xs:'30%',sm:"-10%"},display:'flex',flexDirection:'column',alignItems:'right'}}> 
      <Box  display="flex" justifyContent='right' alignItems="right">
      <Typography 
            style={{fontFamily:'urbanist',
            fontSize:'14px',fontStyle:'normal',
            fontWeight:'500',lineHeight:'17px',
            color:'#000000'}}>
              Rank
        </Typography>
      </Box>
      <Box sx={{marginTop:{xs:'25%',sm:"5%"}}} display="flex" justifyContent='right' alignItems="right">
      <Typography 
            style={{fontFamily:'urbanist',
            fontSize:'14px',fontStyle:'normal',
            fontWeight:'500',lineHeight:'17px',
            color:'#000000'}}>
              Percentage (%)
        </Typography>
      </Box>
       <Box sx={{marginTop:{xs:'25%',sm:"5%"}}} display="flex" justifyContent='right' alignItems="right">
       <Typography 
            style={{fontFamily:'urbanist',
            fontSize:'14px',fontStyle:'normal',
            fontWeight:'500',lineHeight:'17px',
            color:'#000000'}}>
              Percentile
        </Typography>
       </Box>
    </Box>
    <Box sx={{borderRadius:'40px', border:'1px solid #838BA1', width:'83px',
                height:'233px', marginLeft:{xs:'28.5%',sm:'58%'},marginTop:{xs:'-48%',sm:'-16%'}}}>
    <Box sx={{marginTop:{xs:'10%',sm:"20%"}}} display="flex" justifyContent='center' alignItems="center">
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
    <Box sx={{borderRadius:'40px', border:'1px solid #838BA1', width:'83px',
            height:'233px',  marginLeft:{xs:'52.5%',sm:'66%'},marginTop:{xs:'-62.5%',sm:'-18.5%'}}}>
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
    <Box sx={{borderRadius:'40px', border:'1px solid #838BA1', width:'83px',
              height:'233px', marginLeft:{xs:'76%',sm:'74%'},marginTop:{xs:'-62%',sm:'-18.5%'}}}>
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
export default BronzeResult;