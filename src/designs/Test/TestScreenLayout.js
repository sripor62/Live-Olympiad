import { ArrowBackIos, FiberManualRecord, Memory, Refresh } from "@mui/icons-material"
import { Box, Grid, List, Typography, Button } from "@mui/material"
import { CustomButton } from "../../components/CustomButton"
import Header from "../Dashboard/Header"
import AccessAlarmsOutlinedIcon from '@mui/icons-material/AccessAlarmsOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
export const TestScreenLayout = ({
    pageData, startTest, navigateBack, stuName, logOutHandler
}) => {

    return <Grid container>
        <Grid item xs={12} mb={2}>
            <Header stuName={stuName} logOutHandler={logOutHandler} />
        </Grid>
        <Grid item>
            <Grid container spacing={2} sx={{ pl: { xs: 4, sm: 4, md: 6, lg: 10 }, pr: { xs: 4, sm: 4, md: 4, lg: 10 } }}>
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={12} alignItems='center'>
                            <CustomButton btnText="BACK" onClick={navigateBack} variant="outlined" startIcon={<ArrowBackIos />} sx={{ color: 'rgba(106,112,124,1)', border: '1px solid rgba(106,112,124,1)' }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container item xs={12} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '20px' }}>
                        <Grid item xs={4} style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Typography variant='h4'><Box sx={{ fontFamily: 'Urbanist', fontWeight: 'bold', fontSize: { lg: "36px", xs: "20px" }, display: "flex", width: { xs: "200px", lg: "400px" } }} mb={1}>{pageData?.packageName}</Box></Typography>
                            <Typography variant='subtitle2'><Box sx={{ fontFamily: 'Urbanist', fontWeight: 'medium', fontSize: '20px', display: "flex", width: { xs: "200px", lg: "400px" } }} mb={1}>Practice Test</Box></Typography>
                        </Grid>
                        {pageData.testStatus && pageData.attemptedQuestions!==pageData.totalMarks && <Grid item xs={8} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: "20px", display: 'flex' }}><Box sx={{ fontSize: '50px', color: 'green' }}>{pageData.attemptedQuestions ? pageData?.attemptedQuestions : 0}</Box><Box sx={{ mt: 1, fontFamily: 'Urbanist', fontWeight: 600, fontSize: '28px' }}>/{pageData?.totalMarks}</Box></Typography>
                        </Grid>}
                        <Grid container spacing={2} alignItems='center' mt={2}>
                            <Grid item xs={12} lg={1.5}>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px 10px 0px 0px", backgroundColor: 'white', display: 'flex', p: 2, fontSize: '14px', fontFamily: 'Urbanist', fontWeight: 600, alignItems: 'center' }}><QuizOutlinedIcon />Questions</Box>
                                </Typography>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px", backgroundColor: "#F9BB47", color: 'white', p: 2 }}>{pageData?.questions?.length}</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={1.5}>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px 10px 0px 0px", backgroundColor: 'white', display: 'flex', p: 2, fontSize: '14px', fontFamily: 'Urbanist', fontWeight: 600, alignItems: 'center' }}><AccessAlarmsOutlinedIcon />Time Limit</Box>
                                </Typography>
                                <Typography variant='Subtitle2' align='center'>
                                    <Box sx={{ borderRadius: "10px", backgroundColor: "#F9BB47", color: 'white', p: 2 }}>{pageData?.totalDurationMin} Min</Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={9} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                {pageData.testStatus
                                    ? pageData.attemptedQuestions===pageData.totalMarks ? <Button onClick={() => startTest(pageData)} endIcon={<Refresh />} variant="contained" borderRadius="5px" sx={{ width: '170px', height: '54px', backgroundColor: "rgba(131, 139, 161, 1)", color: "white", fontFamily: "Urbanist", borderRadius: "15px" }}>RETAKE</Button>
                                    : <Button onClick={() => startTest(pageData)} endIcon={<Refresh />} variant="contained" borderRadius="5px" sx={{ width: '170px', height: '54px', backgroundColor: "#53D064", color: "white", fontFamily: "Urbanist", borderRadius: "15px" }}>RETAKE</Button> : 
                                    <Button onClick={() => startTest(pageData)} endIcon={<PlayArrowOutlinedIcon />} variant="contained" borderRadius="5px" sx={{ width: '170px', height: '54px', backgroundColor: "#53D064", color: "white", fontFamily: "Urbanist", borderRadius: "15px" }}>START</Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography variant='h4' sx={{ fontFamily: 'Urbanist' }}>Instructions</Typography>
                            <List sx={{ ml:1 }}>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} />  This assessment has {pageData?.questions?.length} questions</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  The allotted duration for this assessment is  {pageData?.totalDurationMin} minute and the timer will be visible on the top to show remaining time</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  This is Objective type of assessment</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}>  <FiberManualRecord sx={{ fontSize: '8px' }} />  Different question carries different marks which are visible when you attempt, plan your time accordingly to score maximum marks</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  In subjective questions, you need to either type in your responses in as detail as possible or write your solution on paper and take a picture and attach it to the question</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  You can toggle between questions as you wish and you will see which questions you have attempted and which are remaining</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  After you submit the assessment, you can see your scores and speed and accuracy in the report card</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  You can also see detailed "answer key" to check solutions and where you went wrong</Typography>
                                <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}> <FiberManualRecord sx={{ fontSize: '8px' }} />  For subjective assessments, teachers will first check and give you marks, that might take some time after you submit your assessment.</Typography>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}