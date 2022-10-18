import { CurrencyRupee } from "@mui/icons-material"
import { Avatar, Box, Grid, Typography } from "@mui/material"

export const UserDetails = () => {
    return <Grid xs={12} sm={12} md={4} lg={4} p={2}>
        <Grid container xs={12} sm={12} md={12} lg={12} p={1} alignItems='center' justifyContent='center' sx={{ backgroundColor: "#F7F8F9", borderRadius: '15px' }}>
            <Grid container xs={12} sm={8} md={12} lg={8} mb={2} mt={3} justifyContent='center' alignItems='center'>
                <Grid xs={12} sm={12} md={12} lg={12} mb={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar sx={{ width: '133px', height: '133px' }} />
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='subtitle2'><Box>Emily <Typography variant='subtitle2' sx={{ color: '#838BA1', display: 'inline' }}>|</Typography> VII-A</Box></Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant='body2' sx={{ color: '#838BA1' }}><Box>Amity International School, Noida</Box></Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} sm={8} md={12} lg={8} p={1} mb={3} justifyContent='center' alignItems='center'>
                <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                    <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Urbanist', fontFamily: 'Urbanist',fontWeight:"bold" }}>Total Fees Paid</Box></Typography>
                    <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ fontFamily: 'Urbanist', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CurrencyRupee sx={{ fontSize: '16px' }} />600</Box></Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                    <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Urbanist',fontWeight:"bold" }}>Subject Subscriptions</Box></Typography>
                    <Typography variant='body1' align="center" sx={{ fontWeight: '600' }}><Box sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Urbanist', justifyContent: 'center' }}>English, Science</Box></Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                    <Typography variant='body2' align="center"><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Urbanist',fontWeight:"bold" }}>Date of Joining</Box></Typography>
                    <Typography variant='body1' align="center" sx={{ fontWeight: '600', fontFamily: 'Urbanist' }}><Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>14/06/2022</Box></Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}