import { Avatar, Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { responsiveStype } from "../beautifiers/responsive";
import { AuthLayout } from "../designs/Auth/AuthLayout";
import { AddCircle } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const childrenData =[{id: 1, name: "Aneysha Das", school: "Cambridge School", class: "V", section: "B" },  
                    { id: 2, name: "John Doe", school: "St. Mary's School", class: "VI", section: "A" },
                    { id: 3, name: "James", school: "Oxford", class: "IV", section: "C" },
                    { id: 4, name: "Tom Brown", school: "Harvard School", class: "III", section: "D" },
                    { id: 4, name: "Tom Cruise", school: "Harvard School", class: "II", section: "E" },
                     ]

const ParentPage = ( {logOutHandler}) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 2;
    const startIndex =(page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const numPages = Math.ceil(childrenData.length / PAGE_SIZE);
    const handleClickPrev = () => {
        setPage((prevIndex) => prevIndex - 1);
      };
    
      const handleClickNext = () => {
        setPage((prevIndex) => prevIndex + 1);
      };

      
  
    const children = childrenData.slice(startIndex, endIndex);
    return(
    <AuthLayout responsiveStype={responsiveStype}>
       <Box sx={{display:'flex',ml:2,mt:1}}>
        <CustomButton  onClick={logOutHandler} btnText="LOGOUT"  variant="contained" 
        sx={{ color: "black", borderRadius: "20px", width: '70px', 
        height: { xs: "34px", lg: '36px' }, fontSize: { xs: "8px", lg: '12px' }, 
        backgroundColor:"#F9BB47", fontWeight: 600,marginLeft:{xs:'80%',sm:'80%'} ,
        marginTop:{xs:'-30%',sm:'-50%'}}}/>
        </Box> 
        <Box sx={{marginTop:{sm:'-10%'},marginLeft:{xs:'28%',sm:'-18%'}}}>
           <Typography sx={{fontFamily:'urbanist',fontStyle:'normal',fontWeight:'500',
                        fontSize:'22px',lineHeight:'26px',color:'#060606'}}>
            My Childrens</Typography> 
        </Box>
        <Box sx={{top: 0, marginLeft:{xs:'35%',sm:'45%'}}} >
        <IconButton disabled={page === 1} onClick={handleClickPrev}>
            <ChevronLeftIcon />
         </IconButton>
         <IconButton disabled={page === numPages } onClick={handleClickNext}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Grid container spacing={1} sx={{marginTop:'6%',marginLeft:{xs:'25%',sm:'-10%'},display:'flex',justifyContent:'space-between',width:{xs:'50%',sm:'100%'}}} >
        {children.map((child)=>(  
            <Grid item key={child.id} > 
            <Box 
            sx={{backgroundColor:'#4545A5',width:'195px',
            height:'108px',
            borderRadius:'8px',boxShadow:'0px 6px 15px rgba(0, 0, 0, 0.25)',
            marginTop:'10%',marginLeft:'-18%',justifyContent:'center',display:'flex',flexDirection:'column'}}>
        <Typography sx={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'700',
                    fontSize:'10px',lineHeight:'12px',color:'#FFFFFF',marginLeft:'5%',
                    marginTop:'8%'}}>
            {child.school}</Typography>
            <Typography sx={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',
                    fontSize:'8px',lineHeight:'10px',color:'#FFFFFF',marginLeft:'5%',
                    marginTop:'5%'}}>
            class: {child.class}</Typography>
            <Typography sx={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',
                    fontSize:'8px',lineHeight:'10px',color:'#FFFFFF',marginLeft:'5%',
                    marginTop:'5%'}}>
            Section: {child.section}</Typography>
            <Box sx={{width:'90px',height:'50px',
                    borderRadius:'8px', marginTop:'-28%',marginLeft:'55%',
                    justifyContent:'center',alignItems:'center',display:'flex',
                    flexDirection:'column'}}>
                
                <Avatar variant="rounded">

                </Avatar>
                <Typography sx={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',
                    fontSize:'8px',lineHeight:'10px',color:'#FFFFFF',marginTop:'2%'}}>
                     Name: {child.name}</Typography>
            </Box>
            <Box sx={{width:'90px',height:'50px',
                    borderRadius:'8px', marginTop:'0%',marginLeft:'25%',justifyContent:'center',
                    alignItems:'center',display:'flex',flexDirection:'column'}}>
                <Typography sx={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'400',
                    fontSize:'8px',lineHeight:'10px',color:'#FFFFFF',marginRight:'25%'}}>
                     Enter</Typography>
                   <Button onClick={()=>{navigate('/')}}>
                    <img src='./images/Arrow5.png' alt='arrow'/>
                   </Button>
                
            </Box>
          </Box>
        </Grid> 
        ))}
        </Grid>
        
        <Box sx={{width:'97px',height:'45px',color:'#FFFFFF',backgroundColor:'#F9BB47',boxShadow:'0px 4px 11px rgba(0, 0, 0, 0.25)',
                borderRadius:'10px', marginTop:'10%',marginLeft:{xs:'33%',sm:'6%'},justifyContent:'center',alignItems:'center',display:'flex',
                flexDirection:'column'}} onClick={()=>{navigate('/:index')}}>
            <AddCircle />
            <Typography sx={{fontFamily:'Inter',fontStyle:'normal',fontWeight:'700',
                        fontSize:'9px',lineHeight:'11px',color:'#FFFFFF',marginLeft:'5%',marginTop:'2%'}}>
                Add Children
            </Typography>
        </Box>
                
    </AuthLayout>
)
}

export default ParentPage;