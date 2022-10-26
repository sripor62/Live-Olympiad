import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from '../../components/Sidebar'
import { KnowledgeTree } from './KnowledgeTreeBox'
import { ChoosePlanLayout } from '../Onboarding/ChoosePlanLayout'
import { Typography ,Box} from "@mui/material"
import { SubscriptionSubject } from './SubscriptionSubject'
export default function SubscriptionLayout(props) {

    return <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
            <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={5} p={4}>
            < SubscriptionSubject />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={4} mt={3} p={2}>
            <Typography variant="body1" fontSize="20px" fontWeight={600} ml={2} fontFamily="Urbanist">Past order details </Typography>
            {props.paymentInfo?.map((item)=> {return(
            <Grid container mt={2} style={{ backgroundColor: '#F7F8F9', borderRadius: '20px', padding: '20px', marginBottom: '10px' }} >
                <Grid item xs={12} ><Typography fontWeight="bold"><Box sx={{fontSize:"20px",fontFamily:"Urbanist"}}>Single Subject Subscription </Box></Typography></Grid>
                <Grid item xs={6} mt={1}>
                    <Typography><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Subjects : {props.subscriptionList?.subscribedCourses.map((item) => (item + ","))}</Box></Typography>
                    <Typography><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Amount: Rs.{item.amount ? item.amount : 0}</Box></Typography>
                </Grid>
                <Grid item xs={6} mt={1}>
                    <Typography  fontWeight="bold"><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Date: {item.updatedAt}</Box></Typography>
                    <Typography  fontWeight="bold"><Box sx={{fontSize:"16px",fontFamily:"Urbanist",fontWeight:"600",color:"#838BA1"}}>Mode:  {item.paymentType}</Box></Typography>
                </Grid>
            </Grid>)})}
        </Grid>

    </Grid>
}