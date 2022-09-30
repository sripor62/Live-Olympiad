import React from 'react'
import { Box, Grid, Typography, Chip, ListItem, List } from '@mui/material';
import { CustomButton } from '../../components/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import Header from '../auth/Header';
import MemoryIcon from '@mui/icons-material/Memory';
import ReportAction from '../Report/ReportAction';

const TestScreen = () => {
    return (
        <>
            <Box>
                <Header />
                <ReportAction />
                <Box p={3}>
                    <Grid container item xs={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                        <Grid item xs={4} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Typography variant='h4'><Box mb={1}>Test Name</Box></Typography>
                            <Typography variant='subtitle2'><Box mb={1}>Practice Test</Box></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: "20px" ,display:'flex'}}><Box sx={{ fontSize:'50px',color:'green'}}>18</Box><Box sx={{mt:2}}>/20</Box></Typography>
                        </Grid>
                        <Grid container spacing={2} alignItems='center' mt={2}>
                            <Grid item xs={1.5}>
                                <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: 'white', display: 'flex', p: 1 }}><MemoryIcon />Questions</Box></Typography>
                                <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: "#F9BB47", color: 'white', p: 1 }}>30</Box></Typography>
                            </Grid>
                            <Grid item xs={1.5}>
                                <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: 'white', display: 'flex', p: 1 }}><MemoryIcon />Time Limit</Box></Typography>
                                <Typography variant='Subtitle2' align='center'><Box sx={{ borderRadius: "10px", backgroundColor: "#F9BB47", color: 'white', p: 1 }}>30 Min</Box></Typography>
                            </Grid>
                            <Grid item xs={9} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <CustomButton btnText="RE-TAKE" endIcon={<RefreshIcon />} variant="contained" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                        <Grid item >
                            <Typography variant='h4'>Instructions</Typography>
                            <List>
                                <Typography variant='body1'> img elements must have an alt prop, either with meaningful text</Typography>
                                <Typography variant='body1'> img elements must have an alt prop, either with meaningful text, either with meaningful text</Typography>
                                <Typography variant='body1'> img elements must have an alt prop, either with meaningful text, either with meaningful text</Typography>
                                <Typography variant='body1'> img elements must have an alt prop, either with meaningful text, either with</Typography>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default TestScreen