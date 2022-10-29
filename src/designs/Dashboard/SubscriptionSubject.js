import React from 'react'
import { Button, Chip, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CustomButton } from '../../components/CustomButton';
import { responsiveStype } from '../../beautifiers/responsive';

let unSelectedStyle = {
    backgroundColor: 'rgba(255,252,237,1)',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '10px'
}
let selectedStyle = {
    borderRadius: '20px',
    padding: ' 20px 25px',
    marginBottom: '10px',
    border: '3px solid rgba(222,221,210,1)'
}

let selectdChip = {
    color: "white", 
    fontSize: '12px', 
    border: '3px solid #4545A5', 
    backgroundColor: '#4545A5', 
    fontSize: '12px', 
    fontFamily: "Urbanist", 
    fontWeight: 600
}
let unSelectedChip = {
    color: "#838BA1", 
    fontSize: '12px', 
    border: '3px solid #838BA1', 
    backgroundColor: 'white', 
    fontSize: '12px', 
    fontFamily: "Urbanist", 
    fontWeight: 600
}
let disabledChip = {
    color: "white", 
    fontSize: '12px', 
    border: '3px solid #838BA1', 
    backgroundColor: '#838BA1', 
    fontSize: '12px', 
    fontFamily: "Urbanist", 
    fontWeight: 600
}
export const SubscriptionSubject = ({ subscriptionList,
    loadRazorpay,
    handleModeChange,
    subjectMode,
    subjects,
    handleSubjectSelect,
    subjectList }) => {
    return <Grid container style={{ border: '2px solid lightGray', borderRadius: '20px', padding: '20px', marginBottom: '10px' }}>
        <Grid item xs={12}>
            <Typography variant='body2' sx={{ fontSize: "16px", fontWeight: 500, fontFamily: "Urbanist" }}>
                <Box mb={2} sx={{ textAlign: "center" }}>You are Currently on {subscriptionList ? subscriptionList.subscribedCourses.length : 0} Subject{subscriptionList ? subscriptionList.length > 1 ? "s" : "" : ""} Subscription, upgrade license to avail more benefits!</Box>
            </Typography>
        </Grid>
        {subscriptionList?.subscribedCourses.length<3 && <Box onClick={() => handleModeChange(1)}>
            <Grid container style={subjectMode == 1 ? selectedStyle : unSelectedStyle} >
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: "16px" }, fontFamily: "Urbanist" }}>Any One Subject</Box></Typography>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Typography variant='body2' ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: '20px' }, fontFamily: 'Urbanist', fontWeight: "400", display: { xs: "center", sm: "center", lg: "left" } }}>₹300</Box></Typography>
                    <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{ fontFamily: 'Urbanist', fontWeight: "700", color: 'rgba(131,139,161,1)' }}>for Year</Box></Typography>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box p={1}>
                        <Stack direction="row" spacing={2}>
                            {subjectList && subjectList.map((subject) => {
                                return (<Chip onClick={()=>handleSubjectSelect(subject.id)} label={subject.name} sx={subscriptionList?.subscribedCourses.includes(subject.id)?disabledChip:subjectMode==1 && subjects?.includes(subject.id)?selectdChip:unSelectedChip} />)
                            })}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>}
        {subscriptionList?.subscribedCourses.length<2 && <Box onClick={() => handleModeChange(2)}>
            <Grid container style={subjectMode == 2 ? selectedStyle : unSelectedStyle}>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: "16px" }, fontFamily: "Urbanist" }}>Any Two Subjects</Box></Typography>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Typography variant='body2' ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: '20px' }, fontFamily: 'Urbanist', fontWeight: "400" }}>₹550</Box></Typography>
                    <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{ fontFamily: 'Urbanist', fontWeight: "700", color: 'rgba(131,139,161,1)' }}>for Year</Box></Typography>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box p={1}>
                        <Stack direction="row" spacing={2}>
                            {subjectList && subjectList.map((subject) => {
                                return (<Chip onClick={()=>handleSubjectSelect(subject.id)} label={subject.name} sx={subscriptionList?.subscribedCourses.includes(subject.id)?disabledChip:subjectMode==2 && subjects?.includes(subject.id)?selectdChip:unSelectedChip} />)
                            })}
                            {/* <Chip label="Mathematics" sx={{ color: '#ffffff', border: '3px solid #838BA1', backgroundColor: '#838BA1', fontSize: '12px', fontFamily: "Urbanist", fontWeight: 600 }} />
                            <Chip label="English" variant="outlined" sx={{ color: '#ffffff', border: '3px solid#838BA1', backgroundColor: '#838BA1', fontSize: '12px', fontFamily: "Urbanist", fontWeight: 600 }} />
                            <Chip label="Science" variant="outlined" sx={{ border: '3px solid #838BA1', color: '#838BA1', fontSize: '12px', fontFamily: "Urbanist", fontWeight: 600 }} /> */}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>}
        {subscriptionList?.subscribedCourses.length<0 && <Box onClick={() => handleModeChange(3)}>
            <Grid container style={subjectMode == 3 ? selectedStyle : unSelectedStyle}>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Typography variant='body2' fontWeight={500} ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: "16px" }, fontFamily: "Urbanist" }}>All Three Subjects</Box></Typography>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Typography variant='body2' ><Box mb={2} sx={{ fontSize: { xs: "14px", lg: '20px' }, fontFamily: 'Urbanist', fontWeight: "400" }}>₹800</Box></Typography>
                    <Typography variant='body2' ><Box mb={2} mt={0.3} ml={0.5} sx={{ fontFamily: 'Urbanist', fontWeight: "700", color: 'rgba(131,139,161,1)' }}>for Year</Box></Typography>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box p={1}>
                        <Stack direction="row" spacing={2}>
                        {subjectList && subjectList.map((subject) => {
                                return (<Chip onClick={()=>handleSubjectSelect(subject.id)} label={subject.name} sx={subscriptionList?.subscribedCourses.includes(subject.id)?disabledChip:subjectMode==3 && subjects?.includes(subject.id)?selectdChip:unSelectedChip} />)
                            })}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>}
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} lg={6} sx={{ justifyContent: 'center', alignItems: 'center', display: "flex" }}>
                <CustomButton onClick={loadRazorpay} btnText="UPGRADE" color="primary" variant="contained" sx={{ width: "228px", height: "48px", fontSize: "14px", fontWeight: "700", fontFamily: 'Urbanist', borderRadius: "50px" }} />
            </Grid>
        </Grid>

    </Grid>
}
