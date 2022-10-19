import React from 'react';
import { Box, Button, Grid, Select, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (<>
        {/* <Grid container mb={1} style={{ backgroundColor: "red", height: "100%" }}> */}
        <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
            <Grid container md={2} lg={2} ml={2} mt={4} sx={{ display: { xs: 'none', sm:'none', md:'block', lg: 'block' } }}>
                <Button onClick={() => {navigate("/dashboard")}}><Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AutoAwesomeMosaicOutlinedIcon /><Typography variant='body2' fontWeight='bold'><Box sx={{ ml: 2 ,fontFamily:"Urbanist",fontSize:'15px' }}>Dashboard </Box></Typography></Grid></Button>
                <Button onClick={() => {navigate("/profile")}}><Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon /><Typography><Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px' }}>Profile</Box></Typography></Grid></Button>
                <Button onClick={() => {navigate("/")}}><Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><WorkspacePremiumOutlinedIcon/><Typography><Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px'  }}>Subscriptions</Box></Typography></Grid></Button>
                <Button onClick={() => {navigate("/schedule")}}><Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon /><Typography><Box sx={{ ml: 2 ,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px' }}>Schedule</Box></Typography></Grid></Button>
            </Grid>
        </Grid>
    </>
    )
}

export default Sidebar;       