import { Avatar, Box, Button, Grid, Pagination, Typography } from "@mui/material";
import { responsiveStype } from "../beautifiers/responsive";
import { AuthLayout } from "../designs/Auth/AuthLayout";
import { AddCircle } from "@mui/icons-material";
import { useState } from "react";

const childrenData =[{id: 1, name: "Aneysha Das", school: "Cambridge School", class: "V", section: "B" },  
                    { id: 2, name: "John Doe", school: "St. Mary's School", class: "VI", section: "A" },
                    { id: 3, name: "James", school: "Oxford", class: "IV", section: "C" },
                    { id: 4, name: "Tom Brown", school: "Harvard School", class: "III", section: "D" },
                    { id: 5, name: "Sarah Lee", school: "Stanford School", class: "IV", section: "A" },
                    { id: 6, name: "Peter Parker", school: "Midtown School of Science and Technology", class: "IX", section: "B" },
                    { id: 7, name: "Bruce Wayne", school: "Gotham Academy", class: "X", section: "C" },
                    { id: 8, name: "Tony Stark", school: "MIT", class: "XI", section: "D" },
                    ]

const ParentPage = () => {
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 2;
    const startIndex =(page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const handlePageChange = (event, value) => {
        setPage(value);
    }
    const children = childrenData.slice(startIndex, endIndex);
    return(
    <AuthLayout responsiveStype={responsiveStype}>
        <Box sx={{marginTop:'-10%',marginLeft:'-18%'}}>
           <Typography sx={{fontFamily:'urbanist',fontStyle:'normal',fontWeight:'500',
                        fontSize:'22px',lineHeight:'26px',color:'#060606'}}>
            My Childrens</Typography> 
        </Box>
        <Grid container spacing={2} sx={{marginTop:'6%',display:'flex',justifyContent:'space-between'}} >
        {children.map((child)=>(  
            <Grid key={child.id}  > 
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
                   <Button>
                    <img src='./images/Arrow5.png' alt='arrow'/>
                   </Button>
                
            </Box>
          </Box>
        </Grid> 
        ))}
        </Grid>
        <Pagination 
        count={Math.ceil(childrenData.length/PAGE_SIZE)}
        page={page}
        onChange={handlePageChange}
        sx={{mt:2}}/>
        <Box sx={{width:'97px',height:'45px',color:'#FFFFFF',backgroundColor:'#F9BB47',boxShadow:'0px 4px 11px rgba(0, 0, 0, 0.25)',
                borderRadius:'10px', marginTop:'10%',marginLeft:'6%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
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