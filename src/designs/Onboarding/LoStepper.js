import { Box, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const LoStepper = (props) => {

    const [activeStep, setActiveStep] = useState(props.activeStep);

    return <Grid container xs={12} justifyContent='center' alignItems='center'>
        <Grid xs={5} sx={{display:{xs:'none',lg:"block"}}}>
            <Stepper orientation="vertical" activeStep={activeStep}>
                <Step>
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon}  sx={{color:"white"}}><Typography variant='subtitle2' color="white"><Box>School Details</Box></Typography></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={ BadgeOutlinedIcon} sx={{color:"white"}}><Typography variant='subtitle2' color="white"><Box>Personal Details</Box></Typography></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={WorkspacePremiumOutlinedIcon}  sx={{color:"white"}}><Typography variant='subtitle2'color="white"><Box>Choose Your Plan</Box></Typography></StepLabel>
                </Step>
            </Stepper>
        </Grid>
    </Grid>
};

export default LoStepper;