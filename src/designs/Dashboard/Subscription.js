import { Grid } from '@mui/material'
import React,{useEffect} from 'react'
import Header from './Header'
import Sidebar from '../../components/Sidebar'
import { KnowledgeTree } from './KnowledgeTreeBox'
import { ChoosePlanLayout } from '../Onboarding/ChoosePlanLayout'
import {  Typography } from "@mui/material"
import { SubscriptionSubject } from './SubscriptionSubject'
export default function SubscriptionLayout(props) {
    
    return <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Header/>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
            <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={5} p={4}>
        < SubscriptionSubject/>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={4} mt={3} p={2}>
            <Typography variant="body1" fontSize="20px" fontWeight={600} ml={2} fontFamily="Urbanist">Past order details </Typography>
            <Typography>Subjects : {props.subscriptionList?.subscribedCourses.map((item)=> (item + ","))}</Typography>
            <Typography>Amount: {props.paymentInfo ? props.paymentInfo?.amount : 0}</Typography>
            <Typography>Date: {props.paymentInfo?.updatedAt}</Typography>
            <Typography>Mode: {props.paymentInfo?.paymentType}</Typography>
        </Grid>
       
    </Grid>
}