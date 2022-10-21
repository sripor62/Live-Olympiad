import { Grid } from '@mui/material'
import React,{useEffect} from 'react'
import Header from './Header'
import Sidebar from '../../components/Sidebar'
import { KnowledgeTree } from './KnowledgeTreeBox'
import { ChoosePlanLayout } from '../Onboarding/ChoosePlanLayout'
import {  Typography } from "@mui/material"
import { SubscriptionSubject } from './SubscriptionSubject'
import { checkAuthCookie } from "../../services/helpers";
export default function Subscription(props) {
    useEffect(() => {
        checkAuthCookie();
    });
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
            <Typography variant="body1" fontSize="20px" fontWeight={600} ml={2} fontFamily="Urbanist">Post order details </Typography>
        </Grid>
    </Grid>
}