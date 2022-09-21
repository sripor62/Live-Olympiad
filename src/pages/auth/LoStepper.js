import { Box, Grid, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { AuthLayout } from '.';

const LoStepper = () => {

    const [activeStep, setActiveStep] = useState(0);

    return (
        <AuthLayout>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid xs={12}>
                    <Box sx={{ display: 'flex',justifyContent:'center', alignItems: "center" }}>
                        <Stepper orientation="vertical" activeStep={activeStep}>
                            <Step>
                                <StepLabel StepIconComponent={MenuBookTwoToneIcon} ><Typography variant='subtitle2'><Box>School Details</Box></Typography></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={MenuBookTwoToneIcon}><Typography variant='subtitle2'><Box>Personal Details</Box></Typography></StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={MenuBookTwoToneIcon}><Typography variant='subtitle2'><Box>Choose Your Plan</Box></Typography></StepLabel>
                            </Step>
                        </Stepper>
                    </Box>
                </Grid>
            </Grid>

        </AuthLayout>
    );
};

export default LoStepper;