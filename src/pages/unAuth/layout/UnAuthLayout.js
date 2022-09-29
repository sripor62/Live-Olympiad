import { Box, Grid, Hidden } from '@mui/material'
import React from 'react'
import MobileHeader from '../../../components/MobileHeader'
import { responsiveStype } from '../../../theme/responsive';

export const UnAuthLayout = (props) => {

    return <Box  sx={responsiveStype.UnAuthLayout.MaincWarpper}>
        <Grid container className="height_100">
            <Grid item xs={12} lg={7} sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Box width={1} height={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Grid container xs={12} lg={12} className="height_100" alignItems="center" justifyContent="center">
                        <Grid item xs={10} lg={10}>
                            <img src='../images/unauthbg.svg' style={{ width: "100%" }} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ display: { xs: 'block', lg: 'none' } }}>
               <MobileHeader/>
            </Grid>
            <Grid item xs={12} lg={5}>
                <Grid container xs={12} lg={12} direction="row" justifyContent="center" alignItems="center" className="height_100">
                    <Grid item xs={10} lg={10}>
                        {props.children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}
