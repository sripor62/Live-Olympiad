import React from "react";
import { OnboardingLayout } from "../../designs/Onboarding/OnboardingLayout";
import { responsiveStype } from "../../beautifiers/responsive";
import { ChoosePlanLayout } from "../../designs/Onboarding/ChoosePlanLayout";
import { useNavigate } from "react-router-dom";

const ChooseYourPlan = () => {
	const navigate = useNavigate();
	const submitHandler = () => {
		navigate("/parent");
	};
	return (
		<OnboardingLayout>
			<ChoosePlanLayout
				responsiveStype={responsiveStype}
				submitHandler={submitHandler}
			/>
		</OnboardingLayout>
	);
};

export default ChooseYourPlan;
