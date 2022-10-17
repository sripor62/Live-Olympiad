import { Chip, Grid, Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { CustomButton } from '../../components/CustomButton';
import { OnboardingLayout } from '../../designs/OnboardingLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { ChoosePlanLayout } from '../../designs/ChoosePlanLayout';


const ChooseYourPlan = () => {
    return (
        <OnboardingLayout> 
            <ChoosePlanLayout
                responsiveStype={responsiveStype}
            />
        </OnboardingLayout>
    );
};

export default ChooseYourPlan;