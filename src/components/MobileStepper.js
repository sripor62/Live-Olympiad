import { Box, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const MobileStepper = (props) => {
    const [activeStep, setActiveStep] = useState(props.activeStep);
    return (
        <Grid container xs={12} justifyContent='center' alignItems='center'sx={{ backgroundColor: "#4545A5"}}>
            <Grid item  xs={5} sx={{ display: { xs: 'block', lg: 'none' },p:1}}>
                <Stepper orientation="horizontal" activeStep={activeStep}>
                    <Step>
                        <StepLabel StepIconComponent={MenuBookTwoToneIcon} ></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel StepIconComponent={BadgeOutlinedIcon}></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel StepIconComponent={WorkspacePremiumOutlinedIcon}></StepLabel>
                    </Step>
                </Stepper>
            </Grid>
        </Grid>
    )
}

export default MobileStepper