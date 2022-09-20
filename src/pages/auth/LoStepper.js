import { Box, Step, StepContent, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const LoStepper = () => {
    return (
        <Box>
            <Stepper orientation="vertical" activeStep={0}>
                <Step>
                    <StepLabel>School Details</StepLabel>
                    <StepContent></StepContent>
                </Step>
                <Step>
                    <StepLabel>Personal Details</StepLabel>
                    <StepContent></StepContent>
                </Step>
                <Step>
                    <StepLabel>Choose Your Plan</StepLabel>
                    <StepContent></StepContent>
                </Step>
            </Stepper>
        </Box>
    );
};

export default LoStepper;