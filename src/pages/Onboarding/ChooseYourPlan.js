import React from 'react'
import { OnboardingLayout } from '../../designs/Onboarding/OnboardingLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { ChoosePlanLayout } from '../../designs/Onboarding/ChoosePlanLayout';


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