import { Avatar, Box, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header = (props) => {

    const [drawerFlag, setDrawerFlag] = useState(false);

    return (

        <Grid container px={4} py={2} alignItems='center' sx={{ backgroundColor: "#4545A5" }}>
            <Grid item xs={6} sm={7} md={7} lg={9}>
                <Box>
                    <img src='../images/brand.svg' style={{ minWidth: '100px', width: '70%', maxWidth: '180px' }} />
                </Box>
            </Grid>
            <Grid item xs={5} sm={4} md={4} lg={2} sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' } }}>
                <Box sx={{ backgroundColor: "white", borderRadius: '50px', padding: '7px,7px,7px,14px', width: {lg:"283px",xs:"115px",sm:"235px"}, height: {lg:"70px",xs:"50px"} }}>
                    <Grid container alignItems='center'>
                        <Grid item xs={7} md={10} lg={9} sm={9}>
                            <Grid container>
                                <Grid item md={12} lg={12} xs={8} sx={{pl:{lg:4,xs:1,sm:2}}}>
                                    <Typography variant='subtitle2'><Box sx={{ fontFamily: "Urbanist", fontWeight: 450, fontSize: {lg:"18px",xs:"16px"},marginTop:{lg:"0px",xs:"10px"}}}>{props.stuName}</Box></Typography>
                                </Grid>
                               
                            </Grid>
                        </Grid>
                        <Grid item md={2} lg={3} xs={5} sm={3}>
                            <Box sx={{mt:"6px",ml:"6px"}}>
                                <Avatar sx={{ width: {lg:"56px",xs:"30px"}, height: {lg:"56px",xs:"30px"},marginTop:{lg:"0px",xs:"10px"} }} />
                                
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} alignItems='center'>
                <Box mr={2}>
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'flex-end'}} >
                    <LogoutOutlinedIcon style={{color:"#F9BB47"}} onClick={props.logOutHandler}/>
                        {/* <Chip label="Free Plan" variant="outlined" sx={{ color: 'white', border: '3px solid white', borderRadius: '10px' ,fontFamily:"Urbanist"}} /> */}
                        {/* <Chip label="1 Subjects Subscription" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} />
                        <Chip label="2 Subjects Subscription" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} /> */}
                    </Stack>
                </Box>
            </Grid>
           
                
            {/* <Grid item xs={2} sm={1} md={1} lg={1} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                <IconButton onClick={() => { setDrawerFlag(true) }}>
                    <MenuIcon sx={{ color: '#FFFFFF', fontSize: '40px' }} />
                </IconButton>
            </Grid> */}
            {/* {
                drawerFlag &&
                // <MenuDrawer
                //     open={drawerFlag}
                //     setDrawerFlag={setDrawerFlag}
                // />
            } */}
        </Grid>


    );
};

export default Header;