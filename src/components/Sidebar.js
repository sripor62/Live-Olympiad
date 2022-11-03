import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Select, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { useLocation, useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState(location.pathname == "/dashboard" ? 0 : 2)

    useEffect(() => {
        console.log("PAGE: ", page, location.pathname)
        if (location.pathname == "/dashboard") setPage(0)
        if (location.pathname == "/profile") setPage(1)
        if (location.pathname == "/subscription") setPage(2)
        if (location.pathname == "/schedule") setPage(3)
    }, [page])

    return (<>
        {/* <Grid container mb={1} style={{ backxgroundColor: "red", height: "100%" }}> */}
        <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
            <Grid container  ml={2} mt={4} sx={{ display: { xs: 'none', sm:'none', md:'block', lg: 'block' } }}>
                <Grid item md={2} lg={2}>
                <Button onClick={() => {navigate("/dashboard")}}><Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}>{(page == 0) ? <img src='../images/space_dashboard.png' />: <img src='../images/space_dashboardblack.png' />}<Typography variant='body2' fontWeight='bold'><Box sx={{ ml: 2 ,fontFamily:"Urbanist",fontSize:'15px' ,color: (page == 0) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Dashboard </Box></Typography></Grid></Button>
                <Button onClick={() => {navigate("/profile")}}><Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon sx={{color:(page == 1) ? "#FCBD42": "#1E232C"}}/><Typography><Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page == 1) ? "#FCBD42": "#1E232C",textTransform:"none" }}>Profile</Box></Typography></Grid></Button>
                <Button onClick={() => {navigate("/subscription")}}><Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><WorkspacePremiumOutlinedIcon sx={{color:(page == 2) ? "#FCBD42": "#1E232C"}}/><Typography><Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page == 2) ? "#FCBD42": "#1E232C",textTransform:"none"  }}>Subscriptions</Box></Typography></Grid></Button>
                <Button onClick={() => {navigate("/schedule")}}><Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon sx={{color:(page == 3) ? "#FCBD42": "#1E232C"}} /><Typography><Box sx={{ ml: 2 ,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page == 3) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Schedule</Box></Typography></Grid></Button> 
                </Grid>
            </Grid>
        </Grid>
    </> 
    )
}

export default Sidebar;       