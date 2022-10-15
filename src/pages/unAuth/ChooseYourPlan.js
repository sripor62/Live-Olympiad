import { Chip, Grid, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { CustomButton } from '../../components/Button';
import { OnboardingLayout } from './layout/OnboardingLayout';
import { responsiveStype } from '../../theme/responsive';


const ChooseYourPlan = () => {

    return (
        <OnboardingLayout>
            <Grid container>
                <Grid xs={12}>
                    <Typography variant='h3'>
                        <Box mb={2} mt={2} fontWeight="bold"  fontSize="40px" sx={responsiveStype.CreatePassword.Typo}>Choose Your Plan!</Box>
                    </Typography>
                </Grid>
              <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{fontSize:"16px",fontFamily:"Urbanist"}}>Single Subject</Box></Typography>
                            </Grid>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Typography variant='body2' ><Box mb={2} sx={{fontSize:'20px',fontFamily:'Urbanist',fontWeight:"bold"}}>₹300</Box></Typography>
                                <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{fontFamily:'Urbanist',fontWeight:"bold",color:'rgba(131,139,161,1)'}}>for Year</Box></Typography>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Box p={1}>
                                    <Stack direction="row" spacing={2}>
                                        <Chip label="Science" sx={{ color: '#ffffff', border: '2px solid #838BA1', backgroundColor: '#6A707C',fontSize:'12px' }}/>
                                        <Chip label="Mathematics" variant="outlined" />
                                        <Chip label="English" variant="outlined" />
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{fontSize:"16px",fontFamily:"Urbanist"}}>Any Two Subjects</Box></Typography>
                            </Grid>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Typography variant='body2' ><Box mb={2} sx={{fontSize:'20px',fontFamily:'Urbanist',fontWeight:"bold"}}>₹550</Box></Typography>
                                <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{fontFamily:'Urbanist',fontWeight:"bold",color:'rgba(131,139,161,1)'}}>for Year</Box></Typography>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Box p={1}>
                                    <Stack direction="row" spacing={2}>
                                        <Chip label="Science"  sx={{ backgroundColor: '#42BBEF', color:"white",fontSize:'12px' }} />
                                        <Chip label="Mathematics" variant="outlined" sx={{ backgroundColor: '#4545A5', color:"white",fontSize:'12px'  }}/>
                                        <Chip label="English" variant="outlined"sx={{ color: '#EF4255', border: '2px solid #EF4255',fontSize:'12px'}}  />
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{fontSize:"16px",fontFamily:"Urbanist"}}>All Three Subject</Box></Typography>
                            </Grid>
                            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Typography variant='body2' ><Box mb={2} sx={{fontSize:'20px',fontFamily:'Urbanist',fontWeight:"bold"}}>₹800</Box></Typography>
                                <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{fontFamily:'Urbanist',fontWeight:"bold",color:'rgba(131,139,161,1)'}}>for Year</Box></Typography>
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Box p={1}>
                                    <Stack direction="row" spacing={2}>
                                        <Chip label="Science" sx={{ color: '#ffffff', border: '2px solid #838BA1', backgroundColor: '#6A707C',fontSize:'12px' }}/>
                                        <Chip label="Mathematics" variant="outlined" sx={{ color: '#ffffff', border: '2px solid#838BA1', backgroundColor: '#6A707C',fontSize:'12px' }}/>
                                        <Chip label="English" variant="outlined" sx={{ color: '#ffffff', border: '2px solid #838BA1', backgroundColor: '#6A707C',fontSize:'12px' }} />
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                  
                <Grid container xs={12} justifyContent="center" alignItems="center">
                    <Grid xs={6} sx={responsiveStype.CreatePassword.Typo}>
                        <CustomButton btnText="Enter" color="primary" variant="contained" className="minWidth240" />
                    </Grid>
                    <Grid xs={5} sx={{ mb: 1,ml:3 }}>
                        <Typography variant='body2' ><Box sx={{fontFamily:'Urbanist',fontSize:'16px'}}><Link href="#" underline="none" fontWeight="bold">Skip</Link> for now</Box></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </OnboardingLayout>
    );
};

export default ChooseYourPlan;