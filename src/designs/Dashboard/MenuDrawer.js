import { Box, Drawer, Grid, Typography } from '@mui/material';
import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const MenuDrawer = ({ setDrawerFlag }) => {
    return (
        <Drawer anchor="right" open={true} onClose={() => setDrawerFlag(false)}>
            <>
                <Box style={{ minWidth: '250px', width: '70%', maxWidth: '350px', padding: '20px' }}>
                    <Grid container mb={1} style={{ height: "100%" }}>
                        <Grid container md={2} lg={2} ml={2} mt={4} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}>{<img src='./images/space_dashboard.png' />}<Typography variant='body2'><Box sx={{ ml: 2, fontFamily: "Urbanist", fontSize: '15px', color: "#FCBD42", textTransform: "none" }}>Dashboard </Box></Typography></Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon /><Typography><Box sx={{ ml: 2, fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color: "#1E232C", textTransform: "none" }}>Profile</Box></Typography></Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><WorkspacePremiumOutlinedIcon /><Typography><Box sx={{ ml: 2, fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color: "#1E232C", textTransform: "none" }}>Subscriptions</Box></Typography></Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon /><Typography><Box sx={{ ml: 2, fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color: "#1E232C", textTransform: "none" }}>Schedule</Box></Typography></Grid>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </Drawer>
    )
}

export default MenuDrawer;