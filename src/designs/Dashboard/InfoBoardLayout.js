import { ArrowBackIos, FiberManualRecord, Refresh } from "@mui/icons-material"
import { Grid, Typography, List } from "@mui/material"
export const InfoBoardLayout = () => {
    return <Grid container>
        <Grid item>
            <Grid container spacing={2} sx={{ pl: { xs: 4, sm: 4, md: 6, lg: 10 }, pr: { xs: 4, sm: 4, md: 4, lg: 10 } }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <Typography variant='h4' sx={{ fontFamily: 'Urbanist' }}>LiveOlympiad General Guidelines:</Typography>
                            <List sx={{ ml:1 }}>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 1. Mock test in each subject will stay available for all participants on January 21, 2023 from 8am till 11:59pm. Students can attempt the mock tests in any subject sequence</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 2. Purpose of mock test is to replicate the real-Olympiad test session and help a child get complete familiarity with the test and proctoring environment</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 3. Webcam based Proctoring system will keep a track of all unusual activity and we will document the same to the school</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 4. Main LiveOlympiad Exam for all subjects (Math, Science & English) will be held on January 22, 2023 on the same website link</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 5. The main LiveOlympiad Exam will also be accessible through the same login credentials</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 6. For students of classes 3 &4, exam window will stay open from 9am till 12pm </Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 7. For students of classes 5-9, exam window will stay open from 1pm till 4pm</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 8. Participants can attempt the exams in any sequence of subjects</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 9. Two hour window listed above is the permissible login-window for participants. For example a student wanting to take test within 4pm - 6pm time window cannot login before 4pm or after 6pm. It is necessary that one logs-in within the defined time window</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 10. If the given time schedule is not suitable to a student, an additional test window will be made available as an exception, during the early hours and late hours of the same day (January 22, 2023). Parents of such students are requested to send an Email at program@liveolympiad.org and WhatsApp / call our representative at 9401047520 to inform latest by January 21, 2023 (5pm). We will make the required arrangements</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 11. For any support before or during the exam (On January 21st & January 22nd), parents can contact either of these support lines Support Options (Before & during the exam): WhatsApp or Call Victor: 9401047520)</Typography>
                            <Typography variant='body1' sx={{ fontFamily: 'Urbanist' }}><FiberManualRecord sx={{ fontSize: '8px' }} /> 12. Here’s the link to our Privacy Policy: https://liveolympiad.org/privacy-policy/</Typography>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}