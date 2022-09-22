import { Grid } from '@mui/material'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function DashboardLayout(props) {
    return <Grid container>
        <Grid item xs="12">
            <Header />
        </Grid>
        <Grid item xs="2">
            <Sidebar />
        </Grid>
        <Grid item xs="10">
            {props.children}
        </Grid>
    </Grid>
}
