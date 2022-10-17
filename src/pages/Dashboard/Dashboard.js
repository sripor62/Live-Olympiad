import React from 'react'
import { Grid } from '@mui/material'
import DashboardLayout from '../../designs/DashboardLayout';
import { useState } from 'react'
import { CustomListItem } from '../../components/CustomListItem'
import { KnowledgeTree } from '../../designs/KnowledgeTreeBox'
import { UpgradeBox } from '../../designs/UpgradeBox'
import { SubjectSelector } from '../../designs/SubjectSelector'
import { FilterByStatus } from '../../components/FilterByStatus'

const Dashboard = () => {
    const [drawerFlag, setDrawerFlag] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <DashboardLayout>
        <Grid container mt={2} style={{ padding: 10 }}>
            <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
                {/* <Grid container p={2} mb={2} xs={12} sm={12} alignItems='center' sx={{ display: { xs: 'flex', sm:'flex', md:'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }} >
                    <Grid  item xs={8} sm={10} >
                        <Typography variant='subtitle'>
                            <Box>You're Currently on the free plan, upgrade for more benefits!</Box>
                        </Typography>
                    </Grid>
                    <Grid xs={4} sm={2}>
                        <Button endIcon={<KeyboardArrowDownIcon />} sx={{ backgroundColor: '#FCBD42', color: '#FFFFFF' }}>Upgrade</Button>
                    </Grid>
                </Grid>
                <Grid container xs={12} sm={12} mb={4} pl={2} alignItems='center' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }, backgroundColor: '#F7F8F9', borderRadius: '20px' }}>
                    <Grid xs={7} sm={11} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='subtitle' sx={{ color: '#4545A5', fontWeight: '600' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                KNOWLEDGE TREE
                                <Tooltip title='Learn about Exempler & Challenger Series, Evaluation Criteria, About Live Olympiad, Queries & FAQs, Syllabus through an automated Chatbot.' arrow>
                                    <IconButton>
                                        <InfoOutlinedIcon sx={{ color: '#4545A5' }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid xs={5} sm={1} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button sx={{ backgroundColor: '#4545A5', color: '#FFFFFF' }}><ArrowForwardIosIcon /></Button>
                    </Grid>
                </Grid> */}
                <Grid container mb={5} xs={12} sm={12} md={12} lg={12} alignItems='center'>
                    <SubjectSelector/>
                    <FilterByStatus open={open} anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose}/>
                </Grid>
                {
                    [1, 1, 1, 1, 1, 1].map((option) => {
                        return <CustomListItem/>
                    })
                }
            </Grid>
            <Grid p={2} md={4} lg={5} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                <UpgradeBox />
                <KnowledgeTree/>
            </Grid>
        </Grid>
        
    </DashboardLayout>
}

export default Dashboard