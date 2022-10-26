import { ArrowBackIos, FiberManualRecord, Memory, Refresh } from "@mui/icons-material"
import { Box, Grid, List, Typography,Button } from "@mui/material"
import { CustomButton } from "../../components/CustomButton"
import Header from "../Dashboard/Header"
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

export const TestScreenLayout = (props) => {
    return <Grid container>
        <Grid item xs={12} mb={2}>
            <Header />
        </Grid>
        <Grid item>
            <Grid container pl={10} pr={10} spacing={2}>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={12} alignItems='center'>
                            <CustomButton btnText="BACK" variant="outlined" startIcon={<ArrowBackIos />} sx={{color:'rgba(106,112,124,1)',border:'1px solid rgba(106,112,124,1)'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container item xs={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                        <Grid item xs={4} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Typography variant='h4'><Box sx={{fontFamily:'Urbanist',fontWeight:'bold',fontSize:"36px"}} mb={1}>{props.pageData?.packageName}</Box></Typography>
                            <Typography variant='subtitle2'><Box sx={{fontFamily:'Urbanist',fontWeight:'medium',fontSize:'20px'}} mb={1}>Practice Test</Box></Typography>
                        </Grid>
                        <Grid item xs={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: "20px", display: 'flex' }}><Box sx={{ fontSize: '50px', color: 'green' }}>18</Box><Box sx={{ mt: 1,fontFamily:'Urbanist',fontWeight:600,fontSize:'28px' }}>/20</Box></Typography>
                        </Grid>
                        <Grid container spacing={2} alignItems='center' mt={2}>
                            <Grid item xs={12} lg={1.5}>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px 10px 0px 0px", backgroundColor: 'white', display: 'flex', p: 2,fontSize:'14px',fontFamily:'Urbanist',fontWeight:600,alignItems:'center' }}><QuizOutlinedIcon />Questions</Box>
                                </Typography>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px", backgroundColor: "#F9BB47", color: 'white', p: 2 }}>30</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={1.5}>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px 10px 0px 0px", backgroundColor: 'white', display: 'flex', p: 2,fontSize:'14px',fontFamily:'Urbanist' ,fontWeight:600,alignItems:'center' }}><AccessAlarmsOutlinedIcon />Time Limit</Box>
                                </Typography>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px", backgroundColor: "#F9BB47", color: 'white', p: 2 }}>30 Min</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={9} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Button endIcon={<Refresh />} variant="contained" borderRadius="5px" sx={{width:'170px',height:'54px',backgroundColor:"(255,255,255,1)",color:"white",fontFamily:"Urbanist",borderRadius:"15px"}}>RE-TAKE</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography variant='h4' sx={{fontFamily:'Urbanist'}}>Instructions</Typography>
                            <List sx={{ml:1}}>
                                <Typography variant='body1' sx={{fontFamily:'Urbanist'}}><FiberManualRecord sx={{fontSize:'8px'}}/> img elements must have an alt prop, either with meaningful text</Typography>
                                <Typography variant='body1'sx={{fontFamily:'Urbanist'}}> <FiberManualRecord  sx={{fontSize:'8px'}}/> img elements must have an alt prop, either with meaningful text, either with meaningful text</Typography>
                                <Typography variant='body1'sx={{fontFamily:'Urbanist'}}> <FiberManualRecord  sx={{fontSize:'8px'}}/> img elements must have an alt prop, either with meaningful text, either with meaningful text</Typography>
                                <Typography variant='body1' sx={{fontFamily:'Urbanist'}}>  <FiberManualRecord  sx={{fontSize:'8px'}}/> img elements must have an alt prop, either with meaningful text, either with</Typography>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}