import { Avatar, Box, Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';


const Header = () => {
    return (

        <Grid container px={4} py={2} alignItems='center' sx={{ backgroundColor: "#4545A5" }}>
            <Grid xs={7}>
                <Box>
                    <img src='../images/brand.svg' style={{ width: "250px" }} />
                </Box>
            </Grid>
            <Grid xs={2} alignItems='center'>
                <Box mr={2}>
                    <Stack direction="row" spacing={1} sx={{display:'flex', justifyContent:'flex-end'}} >
                        <Chip label="Free Plan" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} />
                        <Chip label="1 Subjects Subscription" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} />
                        <Chip label="2 Subjects Subscription" variant="outlined" sx={{color:'white', border:'2px solid white', borderRadius:'10px'}} />
                    </Stack>
                </Box>
            </Grid>
            <Grid xs={3}>
                <Box p={1} sx={{ backgroundColor: "white", borderRadius: '50px' }}>
                    <Grid container alignItems='center'>
                        <Grid container xs={10} pl={3}>
                            <Grid xs={12}>
                                <Typography variant='subtitle2'><Box>Emily | VII-A</Box></Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant='body2'><Box>Amity International School, Noida</Box></Typography>
                            </Grid>
                        </Grid>
                        <Grid xs={2}>
                            <Box sx={{ width: '100%', height: '100%' }}>
                                <Avatar sx={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>

    );
};

export default Header;