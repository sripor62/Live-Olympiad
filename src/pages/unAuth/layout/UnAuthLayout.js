import { Box, Grid } from '@mui/material'
import React from 'react'

export const UnAuthLayout = (props) => {
    return <Box sx={{ height: "100vh" }}>
        <Grid container sx={{ height: "100%" }}>
            <Grid xs={12} lg="7" sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Box width={1} height={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Grid container sx={{ height: "100%" }} alignItems="center" justifyContent="center">
                        <Grid xs={10}  lg="10">
                            <img src='../images/unauthbg.svg' style={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={12} lg="5">
                <Grid container xs={12} lg="12" direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                    <Grid xs={12} lg="10">
                        {props.children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}
