import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { afterValidate } from '../../services/commonService';
import { getErrorMsz } from '../../services/validator';
import { OnboardingLayout } from '../../designs/Onboarding/OnboardingLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { SchoolDetailLayout } from '../../designs/Onboarding/SchoolDetailLayout';

const SchoolDetails = () => {
    const navigate = useNavigate();
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({
        postalCode: "",
        school: "",
        class: "",
        section: "",
    });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData);
        setSnakeBarProps({ snackbarFlag: true, msz: "School Details saved.", type: "success" })
    }

    return <OnboardingLayout stepperIndex="0">
        <SchoolDetailLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            setPageData={setPageData}
            submitFlag={submitFlag}
            getErrorMsz={getErrorMsz}
            snakeBarProps={snakeBarProps}
            setSnakeBarProps={setSnakeBarProps}
        />
    </OnboardingLayout>
};

export default SchoolDetails;