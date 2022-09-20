import { Box, Grid } from '@mui/material'
import React from 'react'

export const AuthLayout = (props) => {
    return <Box sx={{ height: "100vh" }}>
        <Grid container sx={{ height: "100%" }}>
            <Grid xs="7">
                <Box width={1} height={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Grid container sx={{ height: "100%" }} alignItems="center" justifyContent="center">
                        <Grid xs="10">
                            <img src='../images/unauthbg.svg' style={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs="5">
                {props.children}
            </Grid>
        </Grid>
    </Box>
}
