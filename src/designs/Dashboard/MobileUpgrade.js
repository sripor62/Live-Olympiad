import { Box, Grid, Typography, Stack, Button } from "@mui/material"
import { CenterButton } from "../../components/CenterButton"
import { SubjectBox } from "../../components/SubjectBox"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
export const MobileUpgrade = (props) => {
    return <Grid container>
        <Grid item>
            <Grid container p={2} mb={2} xs={12} sm={12} alignItems='center' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }} >
                <Grid item xs={12} sm={12} >
                    <Typography variant='subtitle' sx={{ fontFamily: "Urbanist", fontSize: "11px", fontWeight: 500 }}>
                        <Box>You're Currently on the free plan, upgrade for more benefits!</Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} mt={1} >
                    <Grid container spacing={1}>
                        <Grid item xs={4}><SubjectBox text="Mathematics" color="#4545A5" borderRadius="10px" border="1px solid #4545A5" /></Grid>
                        <Grid item xs={4}> <SubjectBox text="Science" color="#42BBEF" borderRadius="10px" border="1px solid #42BBEF" /></Grid>
                        <Grid item xs={4}><SubjectBox text="English" color="red" borderRadius="10px" border="1px solid red" /></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} mt={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button endIcon={<KeyboardArrowDownIcon />} sx={{ backgroundColor: '#FCBD42', color: '#FFFFFF', width: "104px", height: "34px",borderRadius:"50px" }}>Upgrade</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}