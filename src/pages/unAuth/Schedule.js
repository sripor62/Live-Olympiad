import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import DashboardLayout from '../auth/DashboardLayout';
import { CalendarPickerSkeleton } from '@mui/x-date-pickers-pro';

const Schedule = () => {
    return (
        <DashboardLayout>
            <Box p={3} sx={{ backgroundColor: 'pink' }}>
                <Grid container sx={{ backgroundColor: 'white' }}>
                    <Grid xs={12} mb={2}>
                        <Stack direction="row" spacing={2}>
                            <Chip label="All" variant="outlined" sx={{ color: '#F9BB47', border: '2px solid #F9BB47' }} />
                            <Chip label="Mock Tests" variant="outlined" sx={{ color: '#F9BB47', border: '2px solid #F9BB47' }} />
                            <Chip label="Olympiads" variant="outlined" sx={{ color: '#F9BB47', border: '2px solid #F9BB47' }} />
                        </Stack>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid container item xs={7}>
                            <Grid xs={12} mb={2}>
                                <Box mr={2} sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
                                    <Grid container p={3}>
                                        <Grid container xs={12} mb={2} >
                                            <Grid xs={2}><Typography variant='h6'><Box>Mock Test</Box></Typography></Grid>
                                            <Grid xs={2}>
                                                <Stack direction="row">
                                                    <Chip label="Mathematics" variant="filled" sx={{ color: 'white', backgroundColor: "#4545A5" }} />
                                                </Stack>
                                            </Grid>
                                            <Grid xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}><Typography variant='body2'><Box>3 October 2022</Box></Typography></Grid>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Typography variant='body2'><Box>Venue : School Auditorium</Box></Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <Box mr={2} sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
                                    <Grid container p={3}>
                                        <Grid container xs={12} mb={2} >
                                            <Grid xs={2}><Typography variant='h6'><Box>Olympiad</Box></Typography></Grid>
                                            <Grid xs={2}>
                                                <Stack direction="row">
                                                    <Chip label="Science" variant="filled" sx={{ color: 'white', backgroundColor: "#42BBEF" }} />
                                                </Stack>
                                            </Grid>
                                            <Grid xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}><Typography variant='body2'><Box>3 October 2022</Box></Typography></Grid>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Typography variant='body2'><Box>Venue : School Auditorium</Box></Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item xs={12} mb={2}>
                                <Box mr={2} sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
                                    <Grid container p={3}>
                                        <Grid container xs={12} mb={2} >
                                            <Grid xs={2}><Typography variant='h6'><Box>Olympiad</Box></Typography></Grid>
                                            <Grid xs={2}>
                                                <Stack direction="row">
                                                    <Chip label="English" variant="filled" sx={{ color: 'white', backgroundColor: "#EF4255" }} />
                                                </Stack>
                                            </Grid>
                                            <Grid xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}><Typography variant='body2'><Box>To be Scheduled</Box></Typography></Grid>
                                        </Grid>
                                        <Grid xs={12}>
                                            <Typography variant='body2'><Box>Venue : School Auditorium</Box></Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} sx={{ backgroundColor: 'yellow' }}>
                            <Box ml={2} sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
                                <Grid container>
                                    <Grid xs={12}>
                                        <CalendarPickerSkeleton/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </DashboardLayout>
    );
};

export default Schedule;