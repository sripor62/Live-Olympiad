import React from 'react';
import { Box, Grid, Select, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Sidebar = () => {
    return (<>
        {/* <Grid container mb={1} style={{ backgroundColor: "red", height: "100%" }}> */}
        <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
            <Grid item xs={2} ml={2} mt={4}>
                <Grid style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon /><Typography variant='body2'><Box sx={{ ml: 2 }}>Dashboard </Box></Typography></Grid>
                <Grid style={{ display: 'flex', alignItems: 'center' }} mb={3}><AutoAwesomeMosaicOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Profile</Box></Typography></Grid>
                <Grid style={{ display: 'flex', alignItems: 'center' }} mb={3}><QueuePlayNextOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Subscriptions</Box></Typography></Grid>
                <Grid style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon /><Typography><Box sx={{ ml: 2 }}>Schedule</Box></Typography></Grid>
            </Grid>
        </Grid>
    </>
    )
}

export default Sidebar;       