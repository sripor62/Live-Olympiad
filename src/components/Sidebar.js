import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { environment } from '../environments/environment';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

const Sidebar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [page, setPage] = useState(location.pathname === "/dashboard" ? 0 : 2)

    useEffect(() => {
        if (location.pathname === "/infoboard") setPage(0)
        if (location.pathname === "/dashboard") setPage(1)
        if (location.pathname === "/subscription") setPage(3)
        //if (location.pathname === "/schedule") setPage(3)
        //if (location.pathname === "/booklet") setPage(4)
    }, [page, location.pathname])

    return (<>
        {/* <Grid container mb={1} style={{ backxgroundColor: "red", height: "100%" }}> */}
        <Grid container mb={1} style={{ backgroundColor: "#F7F8F9", height: "100%" }}>
            <Grid item>
            <Grid container  ml={2} mt={4}>
                <Grid item md={2} lg={2}>
                    <Button onClick={() => {navigate("/infoboard")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><MenuBookTwoToneIcon sx={{color:(page == 3) ? "#FCBD42": "#1E232C"}} />
                            <Box variant='body2' fontWeight='bold'>
                                <Box sx={{ ml: 2 ,fontFamily:"Urbanist",fontSize:'15px' ,color: (page === 0) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Olympiad</Box>
                            </Box>
                        </Grid>
                    </Button>
                    <Button onClick={() => {navigate("/dashboard")}}>
                        <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}>{(page === 1) ? <img alt="" src='../images/space_dashboard.png' />: <img alt="" src='../images/space_dashboardblack.png' />}
                            <Box variant='body2' fontWeight='bold'>
                                <Box sx={{ ml: 2 ,fontFamily:"Urbanist",fontSize:'15px' ,color: (page === 1) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Practice</Box>
                            </Box>
                        </Grid>
                    </Button>
                    {/*environment.env !== "school" && 
                        <Button onClick={() => {navigate("/profile")}}>
                            <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><AccountCircleOutlinedIcon sx={{color:(page === 2) ? "#FCBD42": "#1E232C"}}/>
                                <Typography>
                                    <Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page === 2) ? "#FCBD42": "#1E232C",textTransform:"none" }}>Profile</Box>
                                </Typography>
                            </Grid>
                        </Button>
                    */}
                    {environment.env !== "school" && 
                        <Button onClick={() => {navigate("/subscription")}}>
                            <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={3}><WorkspacePremiumOutlinedIcon sx={{color:(page === 2) ? "#FCBD42": "#1E232C"}}/>
                                <Box>
                                    <Box sx={{ ml: 2,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page === 2) ? "#FCBD42": "#1E232C",textTransform:"none"  }}>Subscriptions</Box>
                                </Box>
                        </Grid>
                        </Button>
                    }
                    {/* {environment.env!="school" && 
                        <Button onClick={() => {navigate("/schedule")}}>
                            <Grid md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}><CalendarMonthOutlinedIcon sx={{color:(page == 3) ? "#FCBD42": "#1E232C"}} />
                                <Typography>
                                    <Box sx={{ ml: 2 ,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page == 3) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Schedule</Box>
                                </Typography>
                            </Grid>
                        </Button>} */}
                    {/* environment.env !== "school" && 
                        <Button onClick={() => {navigate("/booklet")}}>
                            <Grid item md={12} lg={12} style={{ display: 'flex', alignItems: 'center' }} mb={2}>
                                <MenuBookTwoToneIcon sx={{color:(page === 3) ? "#FCBD42": "#1E232C"}} />
                                <Typography>
                                    <Box sx={{ ml: 2 ,fontWeight:'bold',fontFamily:"Urbanist",fontSize:'15px',color: (page === 3) ? "#FCBD42": "#1E232C",textTransform:"none"}}>Booklets</Box>
                                </Typography>
                            </Grid>
                        </Button>
                    */}
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    </> 
    )
}

export default Sidebar;       