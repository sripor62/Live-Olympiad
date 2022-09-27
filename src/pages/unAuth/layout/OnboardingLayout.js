import React from 'react';
import { Box, Grid } from '@mui/material';
import LoStepper from '../../../components/LoStepper';

export const OnboardingLayout = (props) => {

    return <Box sx={{ height: "100vh" }}>
        <Grid container sx={{ height: "100%" }}>
            <Grid xs={12} lg={7} sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Box width={1} height={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Box width={1} py={10} ml={10}>
                        <img src='../images/brand.svg' style={{ width: "250px" }} />
                    </Box>

                    <LoStepper activeStep={props.stepperIndex} />
                </Box>
            </Grid>
            <Grid item xs={12} lg={7} sx={{ display: { xs: 'block', lg: 'none' } }}>
            <Box width={1} height={1} sx={{ backgroundColor: "#4545A5" }}>
                    <Box width={1} py={4} ml={2}>
                        <img src='../images/brand.svg' style={{ width: "150px" }} />
                    </Box>
                         <LoStepper activeStep={props.stepperIndex} />
                </Box>
            </Grid>
               
            <Grid xs={12} lg={5}>
                <Grid container xs={12} lg={12} direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                    <Grid xs="10">
                        {props.children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
}
