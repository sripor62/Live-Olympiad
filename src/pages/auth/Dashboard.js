import React from 'react'
import { Chip, Box, Grid, Link, Typography } from '@mui/material'
import { AuthLayout } from '.'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import RefreshIcon from '@mui/icons-material/Refresh';

const Dashboard = () => {
    return (
        <Box sx={{ height: "100vh" }}>
            <Grid container sx={{ height: "100%" }}>
                <Grid xs="7">
                    <Box width={1} height={1} sx={{}}>
                        <Grid container sx={{ height: "100%" }} alignItems="center" justifyContent="center">
                            <Grid xs="10">
                                <Chip label="Science" color="primary" />
                                <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                                    <Grid xs={6} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Typography variant='body1'><Box mb={1}>Test Name</Box></Typography>
                                        <Typography variant='body2'><Box mb={1}>Practice Test</Box></Typography>
                                    </Grid>
                                    <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: "20px" }}><Box sx={{ m: 2 }}>18/20</Box></Typography>
                                        <CustomButton btnText="RE-TAKE" endIcon={<RefreshIcon />} variant="contained" />
                                    </Grid>
                                </Grid>
                                <Chip label="Maths" color="primary" />
                                <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                                    <Grid xs={6} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Typography variant='body1'><Box mb={1}>Test Name</Box></Typography>
                                        <Typography variant='body2'><Box mb={1}>Practice Test</Box></Typography>
                                    </Grid>
                                    <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: "20px" }}><Box sx={{ m: 2 }}>15/20</Box></Typography>
                                        <CustomButton btnText="RE-TAKE" endIcon={<RefreshIcon />} variant="contained" />
                                    </Grid>
                                </Grid>
                                <Chip label="English" color="primary" />
                                <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                                    <Grid xs={6} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Typography variant='body1'><Box mb={1}>Test Name</Box></Typography>
                                        <Typography variant='body2'><Box mb={1}>Practice Test</Box></Typography>
                                    </Grid>
                                    <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <Typography sx={{ fontSize: "20px" }}><Box sx={{ m: 2 }}>19/20</Box></Typography>
                                        <CustomButton btnText="RE-TAKE" endIcon={<RefreshIcon />} variant="contained" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid xs="5">
                    <Grid container xs="12" direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <Grid xs="10">
                            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                                <Grid container xs={12} mt={2} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '30px', marginBottom: '20px' }}>
                                    <Grid xs={12} >
                                        <Typography variant='subtitle'justifyContent="center" alignItems="center"><Box mb={3} mt={1}>You're Currently on 2 Subjects Subscription,   upgrade license to avail more benefits!</Box></Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box mb={1} width={1}>
                                            <CustomTextField
                                                type="text"
                                                placeholder="Mathematics"
                                                variant="outlined"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box mb={1} width={1}>
                                            <CustomTextField
                                                type="text"
                                                placeholder="Science"
                                                variant="outlined"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Box mb={2} width={1}>
                                            <CustomTextField
                                                type="text"
                                                placeholder="English"
                                                variant="outlined"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} ml={12}>
                                        <CustomButton btnText="Upgrade" color="secondary" variant="contained" />
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '30px', marginBottom: '20px' }}>
                                    <Grid xs={12}>
                                        <Typography variant='h4'><Box mb={1} mt={1} ml={2} width={300} align="center">LiveOlympiad Knowledge Tree</Box></Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Typography variant='body2' align="center"><Box mb={3} mt={1}>Learn about Exempler & Challenger Series,Evaluation Criteria.About Live Olympiad,Queries & FAQs,Syllabus through an automated Chatbot. </Box></Typography>
                                    </Grid>
                                    <Grid xs={12} ml={12}>
                                        <CustomButton btnText="GET STARTED" color="primary" variant="contained" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Dashboard