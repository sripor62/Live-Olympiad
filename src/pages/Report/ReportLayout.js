import React from 'react'
import Header from '../../designs/Header'
import ReportAction from '../../designs/ReportAction'
import ReportSider from '../../designs/ReportSider'
import { Box, Grid } from '@mui/material';

const ReportLayout = () => {
  return (
    <>
    <Grid container>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={12}>
            <ReportAction/> 
        </Grid>
        <Grid item xs={7}>
        
        </Grid>
        <Grid item xs={5}>
            <ReportSider/>
        </Grid>
    </Grid> 
    </>
  )
}

export default ReportLayout