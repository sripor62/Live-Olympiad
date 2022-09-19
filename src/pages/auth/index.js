import { Box, Grid } from '@mui/material'
import React from 'react'

export const AuthLayout = (props) => {
    return <Box sx={{ height: "100vh" }}>
        <Grid container sx={{ height: "100%" }}>
            <Grid xs="7">

            </Grid>
            <Grid xs="5">
                {props.children}
            </Grid>
        </Grid>
    </Box>
}
