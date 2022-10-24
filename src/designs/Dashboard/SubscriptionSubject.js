import React from 'react'
import { Chip, Grid, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CustomButton } from '../../components/CustomButton';
import { responsiveStype } from '../../beautifiers/responsive';

export const  SubscriptionSubject=(props)=> {
    return <Grid container style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '10px' }}>
        <Grid item xs={12}>
            <Typography variant='body2' sx={{fontSize:"16px",fontWeight:500,fontFamily:"Urbanist"}}>
                <Box mb={2}  sx={{textAlign:"center"}}>You are Currently on 1 Subject Subscription, upgrade license to avail more benefits!</Box>
            </Typography>
        </Grid>
        <Grid container  style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '10px' }}>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{fontSize:{xs:"14px",lg:"16px"},fontFamily:"Urbanist"}}>Any Two Subjects</Box></Typography>
                    </Grid>
                    <Grid item  xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Typography variant='body2' ><Box mb={2} sx={{fontSize:{xs:"14px",lg:'20px'},fontFamily:'Urbanist',fontWeight:"700",display:{xs:"center",sm:"center",lg:"left"}}}>₹550</Box></Typography>
                        <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{fontFamily:'Urbanist',fontWeight:"700",color:'rgba(131,139,161,1)'}}>for Year</Box></Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box p={1}>
                            <Stack direction="row" spacing={2}>
                                <Chip label="Mathematics" sx={{fontSize:'12px', color: '#ffffff', border: '3px solid #838BA1', backgroundColor: '#838BA1',fontSize:'12px' ,fontFamily:"Urbanist" ,fontWeight:600}}/>
                                <Chip label="English" variant="outlined" sx={{fontSize:'12px',fontFamily:"Urbanist", color: '#838BA1', border: '3px solid #838BA1',fontWeight:600}}/>
                                <Chip label="Science" variant="outlined" sx={{fontSize:'12px',fontFamily:"Urbanist", color: '#838BA1', border: '3px solid #838BA1',fontWeight:600}} />
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '10px' }}>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{fontSize:{xs:"14px",lg:"16px"},fontFamily:"Urbanist"}}>All Three Subjects</Box></Typography>
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Typography variant='body2' ><Box mb={2} sx={{fontSize:{xs:"14px",lg:'20px'},fontFamily:'Urbanist',fontWeight:"700"}}>₹800</Box></Typography>
                        <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{fontFamily:'Urbanist',fontWeight:"700",color:'rgba(131,139,161,1)'}}>for Year</Box></Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box p={1}>
                            <Stack direction="row" spacing={2}>
                                <Chip label="Mathematics" sx={{color: '#ffffff', border: '3px solid #838BA1', backgroundColor: '#838BA1',fontSize:'12px',fontFamily:"Urbanist",fontWeight:600}}/>
                                <Chip label="English" variant="outlined" sx={{ color: '#ffffff', border: '3px solid#838BA1', backgroundColor: '#838BA1',fontSize:'12px',fontFamily:"Urbanist" ,fontWeight:600}}/>
                                <Chip label="Science" variant="outlined" sx={{ border: '3px solid #838BA1',color: '#838BA1',fontSize:'12px',fontFamily:"Urbanist",fontWeight:600 }} />
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
    
                <Grid container  style={{ borderRadius: '20px', padding: ' 20px 25px', marginBottom: '10px',border: '3px solid #FCBD42' }}>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{fontSize:{xs:"14px",lg:"16px"},fontFamily:"Urbanist"}}>All Three Subjects</Box></Typography>
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Typography variant='body2' ><Box mb={2} sx={{fontSize:{xs:"14px",lg:'20px'},fontFamily:'Urbanist',fontWeight:"bold"}}>₹800</Box></Typography>
                        <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{fontFamily:'Urbanist',fontWeight:"700",color:'rgba(131,139,161,1)'}}>for Year</Box></Typography>
                    </Grid>
                    <Grid item xs={10} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Box p={1}>
                            <Stack direction="row" spacing={2}>
                                <Chip label="Mathematics"  sx={{fontSize:'12px', backgroundColor: '#4545A5', color:"white",fontFamily:"Urbanist" ,fontWeight:"bold"}} />
                                <Chip label="English" variant="outlined" sx={{ backgroundColor:'#EF4255', border: '3px solid #EF4255', color:"white",fontSize:'12px',fontFamily:"Urbanist",fontWeight:600}}/>
                                <Chip label="Science" variant="outlined"sx={{backgroundColor:'#42BBEF', color:"white", border: '3px solid #42BBEF',fontSize:'12px' ,fontFamily:"Urbanist",fontWeight:600}}  />
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
        
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} lg={6} sx={{justifyContent:'center',alignItems:'center',display:"flex"}}>
                <CustomButton btnText="UPGRADE" color="primary" variant="contained" sx={{width:"228px",height:"48px",fontSize:"14px",fontWeight:"700",fontFamily:'Urbanist'}}/>
            </Grid>
        </Grid>
        
    </Grid>
}
