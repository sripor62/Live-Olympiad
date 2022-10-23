import { Box, Grid, Hidden } from '@mui/material'
import React from 'react'
import MobileHeader from '../Onboarding/MobileHeader'
import { responsiveStype } from '../../beautifiers/responsive';

export const AuthLayout = (props) => {

    return <Box  sx={responsiveStype.AuthLayout.MaincWarpper}>
        <Grid container className="height_100">
            <Grid item xs={12} lg={7} sx={responsiveStype.default.hide_mobile}>
                <Box width={1} height={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Grid container  className="height_100" alignItems="center" justifyContent="center">
                        <Grid item xs={10} lg={10}>
                            <img src='../images/unauthbg.svg' className="width_100"/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} sx={responsiveStype.default.hide_desktop}>
               <MobileHeader/>
            </Grid>
            <Grid item xs={12} lg={5}>
                <Grid container  direction="row" justifyContent="center" alignItems="center" className="height_100">
                    <Grid item xs={10} lg={8}>
                        {props.children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}
