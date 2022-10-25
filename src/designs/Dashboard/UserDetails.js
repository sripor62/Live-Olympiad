import { CurrencyRupee } from "@mui/icons-material"
import { Avatar, Box, Grid, Typography } from "@mui/material"
import { propsToClassKey } from "@mui/styles"

export const UserDetails = (props) => {
    return <>
        <Grid container p={2} mt={2} alignItems='center' justifyContent='center' sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
            <Grid item xs={12} sm={8} md={12} lg={8} mb={2} mt={3} justifyContent='center' alignItems='center'>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar sx={{ width: '133px', height: '133px'}} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='subtitle2'><Box>{props.pageData.fullName} <Typography variant='subtitle2' sx={{ color: '#838BA1', display: 'inline',fontFamily:"Urbanist" }}>|</Typography>{props.pageData.grade}</Box></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='body2' sx={{ color: '#838BA1' ,fontFamily:"Urbanist"}}><Box>Amity International School, Noida</Box></Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={8} md={12} lg={8} mb={2} mt={3} justifyContent='center' alignItems='center'>
                <Grid container  p={1} mb={3} justifyContent='center' alignItems='center'>
                    <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                        <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Urbanist', fontFamily: 'Urbanist', fontWeight: "bold" }}>Total Fees Paid</Box></Typography>
                        <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CurrencyRupee sx={{ fontSize: '16px' }} />{props.paymentInfo ? props.paymentInfo?.amount : 0}</Box></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                        <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Urbanist', fontWeight: "bold" }}>Subject Subscriptions</Box></Typography>
                        <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Urbanist', justifyContent: 'center' }}>
                            {props.subscriptionList?.subscribedCourses.map((item) =>(item + ",") )}
                            </Box></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                        <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Urbanist', fontWeight: "bold" }}>Date of Joining</Box></Typography>
                        <Typography variant='body1' align="center" sx={{ fontWeight: '600', fontFamily: 'Urbanist' }}><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>14/06/2022</Box></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
}