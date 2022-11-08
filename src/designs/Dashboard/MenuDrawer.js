import { Box, Drawer, Grid, Typography } from '@mui/material';
import React, {useEffect,useState} from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from "../../components/CustomButton"
const MenuDrawer = ({ setDrawerFlag }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState()

    useEffect(() => {
        console.log("PAGE: ", page, location.pathname)
        if (location.pathname == "/dashboard") setPage(0)
        if (location.pathname == "/profile") setPage(1)
        if (location.pathname == "/subscription") setPage(2)
        if (location.pathname == "/schedule") setPage(3)
    }, [page])
    return (
        <Drawer anchor="right" open={true} onClose={() => setDrawerFlag(false)}>
            <>
                <Box style={{ minWidth: '250px', width: '70%', maxWidth: '350px', padding: '20px' }}>
                    <Grid container mb={1} style={{ height: "100%" }}>
                        <Grid item>
                            <Grid container md={2} lg={2} ml={2} mt={4} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                                <Grid onClick={() => {navigate("/dashboard")}} item xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center',color: (page == 0) ? "#FCBD42": "#1E232C" }} mb={3}>{(page == 0) ? <img src='../images/space_dashboard.png' />: <img src='../images/space_dashboardblack.png'/>}<Typography variant='body2'><Box sx={{ ml: 2,fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color:  (page == 0) ? "#FCBD42": "#1E232C", textTransform: "none" }}>Dashboard </Box></Typography></Grid>
                                <Grid onClick={() => {navigate("/profile")}} item xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center',color:(page == 1) ? "#FCBD42": "#1E232C" }} mb={3}><AccountCircleOutlinedIcon /><Typography><Box sx={{ ml: 2, fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color:(page == 1) ? "#FCBD42": "#1E232C", textTransform: "none" }}>Profile</Box></Typography></Grid>
                                <Grid onClick={() => {navigate("/subscription")}} item xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center',color: (page == 2) ? "#FCBD42": "#1E232C" }} mb={3}><WorkspacePremiumOutlinedIcon /><Typography><Box sx={{ ml: 2, fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color: (page == 2) ? "#FCBD42": "#1E232C", textTransform: "none" }}>Subscriptions</Box></Typography></Grid>
                                <Grid onClick={() => {navigate("/schedule")}} item xs={12} sm={12} md={12} lg={12} style={{ display: 'flex', alignItems: 'center',color: (page == 3) ? "#FCBD42": "#1E232C" }} mb={2}><CalendarMonthOutlinedIcon /><Typography><Box sx={{ ml: 2, fontWeight: 'bold', fontFamily: "Urbanist", fontSize: '15px', color: (page == 3) ? "#FCBD42": "#1E232C", textTransform: "none" }}>Schedule</Box></Typography></Grid>
                                <Box sx={{display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },ml:2,mt:1}}><CustomButton  btnText="LOGOUT"  variant="contained" sx={{ color: "black", borderRadius: "20px", width: '70px', height: { xs: "34px", lg: '36px' }, fontSize: { xs: "8px", lg: '12px' }, backgroundColor:"#F9BB47", fontWeight: 600 }}/></Box> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </Drawer>
    )
}

export default MenuDrawer;