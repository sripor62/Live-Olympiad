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
                    <StepLabel StepIconComponent={MenuBookTwoToneIcon}  sx={{color:"rgba(255,208,0,1)"}}><Typography variant='subtitle2' color="rgba(255,208,0,1)"><Box>School Details</Box></Typography></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={ BadgeOutlinedIcon} sx={{color:"rgba(255,208,0,1)"}}><Typography variant='subtitle2' color="rgba(255,208,0,1)"><Box>Personal Details</Box></Typography></StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={WorkspacePremiumOutlinedIcon}  sx={{color:"#FFFFFF"}}><Typography variant='subtitle2'color="#FFFFFF"><Box>Choose Your Plan</Box></Typography></StepLabel>
                </Step>
            </Stepper>
        </Grid>
    </Grid>
};

export default LoStepper;