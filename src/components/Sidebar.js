import { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { CustomButton } from './CustomButton';
const Sidebar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState(location.pathname === "/dashboard" ? 0 : 2)
    let school = window.localStorage.getItem("school");
    const [examType] = useState("Dashboard");
    useEffect(() => {
        //if (location.pathname === "/infoboard") setPage(0)
        if (location.pathname === "/dashboard") setPage(0)
        //if (location.pathname === "/profile") setPage(1)
        if (location.pathname === "/subscription") setPage(2)
        if (location.pathname === "/subjects") setPage(3)
        if (location.pathname === "/syllabusMath") setPage(3)
        if (location.pathname === "/syllabusScience") setPage(3)
        if (location.pathname === "/syllabusEnglish") setPage(3)
        //if (location.pathname === "/schedule") setPage(3)
        if (location.pathname === "/booklet") setPage(4)
    }, [page, location.pathname])

    return (<>
        {/* <Grid container mb={1} style={{ backxgroundColor: "red", height: "100%" }}> */}
        <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
            <Grid item>
            <Grid container  ml={2} mt={4}>
                <Grid item md={2} lg={2}>
                    {/*
                    <Button onClick={() => {navigate("/infoboard")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><MenuBookIcon sx={{color:(page == 3) ? "#FCBD42": "#1E232C"}} />
                            <Box variant='body2' fontWeight='bold'>
                                <Box sx={{ ml: 2 ,fontFamily:"Urbanist",fontSize:'15px' ,color: (page === 0) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Important!</Box>
                            </Box>
                        </Grid>
                    </Button>
                    */}
                    <Button onClick={() => {navigate("/dashboard")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}>
                            {(page === 0) ? <img alt="" src='../images/space_dashboard.png' />: <img alt="" src='../images/space_dashboardblack.png' />}
                            <Box variant='body2' fontWeight='bold'>
                                <Box sx={{ ml: 2 ,fontFamily:"Urbanist",fontSize:'15px' ,color: (page === 0) ? "#FCBD42": "#1E232C",textTransform:"none"}}>{examType}</Box>
                            </Box>
                        </Grid>
                    </Button>
                    {/* <Button onClick={() => {navigate("/profile")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon sx={{color:(page === 1) ? "#FCBD42": "#1E232C"}}/>
                            <Box>
                                <Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page === 1) ? "#FCBD42": "#1E232C",textTransform:"none" }}>Profile</Box>
                            </Box>
                        </Grid>
                    </Button> */}
                    <Button onClick={() => {navigate("/subjects")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}>
                            <AccountCircleOutlinedIcon sx={{color:(page === 3) ? "#FCBD42": "#1E232C"}} />
                            <Box variant='body2' fontWeight='bold'>
                                <Box sx={{ ml: 2,fontFamily:"Urbanist",fontSize:'15px',color: (page === 3) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Syllabus</Box>
                            </Box>
                        </Grid>
                    </Button>
                    {/* <Button onClick={() => {navigate("/subscription")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><WorkspacePremiumOutlinedIcon sx={{color:(page === 2) ? "#FCBD42": "#1E232C"}}/>
                            <Box>
                                <Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page === 2) ? "#FCBD42": "#1E232C",textTransform:"none"  }}>Subscriptions</Box>
                            </Box>
                        </Grid>
                    </Button> */}
                    {/*
                    <Button onClick={() => {navigate("/schedule")}}>
                        <Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon sx={{color:(page == 3) ? "#FCBD42": "#1E232C"}} />
                            <Typography>
                                <Box sx={{ ml: 2 ,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page == 3) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Schedule</Box>
                            </Typography>
                        </Grid>
                    </Button>} 
                    */}
                    
                    <Button onClick={() => {navigate("/booklet")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}>
                            <MenuBookIcon sx={{color:(page === 4) ? "#FCBD42": "#1E232C"}} />
                            <Typography>
                                <Box sx={{ ml: 2 ,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page === 4) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Booklets</Box>
                            </Typography>
                        </Grid>
                    </Button>
                   
{/*                     
                    <Box sx={{display:'flex',ml:2,mt:1}}>
                        <CustomButton  onClick={()=>{navigate('/Parent')}} btnText="Switch Child"  variant="contained" 
                        sx={{ color: "#FFFFFF", borderRadius: "10px", width:'180px', 
                        height: { xs: "34px", lg: '39px' }, fontSize: { xs: "8px", lg: '12px' }, fontFamily:'urbanist',
                        backgroundColor:"#F9BB47", fontWeight: 700,marginLeft:{xs:'80%',sm:'80%'} ,
                        marginTop:{xs:'0%',sm:'20rem'}}}/>
                    </Box> */}
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    </> 
    )
}

export default Sidebar;       