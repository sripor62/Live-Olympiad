import { Box, Grid, Typography } from "@mui/material"
import { CenterText } from "./CenterText"

export const PastOrder = (props) => {
    return <Grid item xs={12} sm={12} md={10} lg={4} mt={3} p={2}>
        <Typography variant="body1" fontSize="20px" fontWeight={600} ml={2} fontFamily="Urbanist">Past order details </Typography>
        <Grid container mt={2} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '10px' }} >
            <Grid item xs={12} ><Typography fontWeight="bold"><Box sx={{fontSize:"20px",fontFamily:"Urbanist"}}>Single Subject Subscription </Box></Typography></Grid>
            <Grid item xs={6} mt={1}>
                <Typography><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Subjects : English {props.subscriptionList?.subscribedCourses.map((item) => (item + ","))}</Box></Typography>
                <Typography><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Amount: Rs.300{props.paymentInfo ? props.paymentInfo?.amount : 0}</Box></Typography>
            </Grid>
            <Grid item xs={6} mt={1}>
                <Typography  fontWeight="bold"><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Date: 16/08/22{props.paymentInfo?.updatedAt}</Box></Typography>
                <Typography  fontWeight="bold"><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Mode: Cash {props.paymentInfo?.paymentType}</Box></Typography>
            </Grid>
        </Grid>
    </Grid>
}