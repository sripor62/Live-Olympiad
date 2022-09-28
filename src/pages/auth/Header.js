import { Avatar, Box, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    return (

        <Grid container px={4} py={2} alignItems='center' sx={{ backgroundColor: "#4545A5" }}>
            <Grid xs={6} sm={9} md={5} lg={7}>
                <Box>
                    <img src='../images/brand.svg' style={{ minWidth:'100px', width:'70%', maxWidth: '250px' }} />
                </Box>
            </Grid>
            <Grid xs={4} sm={2} md={2} lg={2} alignItems='center'>
                <Box mr={2}>
                    <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <Chip label="Free Plan" variant="outlined" sx={{ color: 'white', border: '2px solid white', borderRadius: '10px' }} />
                        {/* <Chip label="1 Subjects Subscription" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} />
                        <Chip label="2 Subjects Subscription" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} /> */}
                    </Stack>
                </Box>
            </Grid>
            <Grid xs={12} sm={12} md={5} lg={3} sx={{ display: { xs: 'none', sm:'none', md:'block', lg: 'block' }}}>
                <Box p={1} sx={{ backgroundColor: "white", borderRadius: '50px' }}>
                    <Grid container alignItems='center'>
                        <Grid container md={10} lg={10} pl={3}>
                            <Grid md={12} lg={12}>
                                <Typography variant='subtitle2'><Box>Emily | VII-A</Box></Typography>
                            </Grid>
                            <Grid md={12} lg={12}>
                                <Typography variant='body2'><Box>Amity International School, Noida</Box></Typography>
                            </Grid>
                        </Grid>
                        <Grid md={2} lg={2}>
                            <Box sx={{ width: '100%', height: '100%' }}>
                                <Avatar sx={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={2} sm={1} md={1} lg={1} sx={{ display: { xs: 'block', sm:'block', md:'none', lg: 'none' } }}>
                <IconButton>
                    <MenuIcon sx={{ color: '#FFFFFF', fontSize: '40px' }} />
                </IconButton>
            </Grid>
        </Grid>

    );
};

export default Header;