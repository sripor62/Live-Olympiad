import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/CustomButton';
import { CustomTextField } from '../../components/CustomTextField';
import { afterValidate } from '../../services/commonService';
import { getErrorMsz } from '../../services/validator';
import { AuthLayout } from '../../designs/AuthLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { ForgotPWLayout } from '../../designs/ForgotPWLayout';

const ForgotPassword = () => {
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ phoneNumber: "", });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
    }

    return <AuthLayout>
        <ForgotPWLayout
            responsiveStype={responsiveStype}
            pageData={pageData}
            submitFlag={submitFlag}
            submitHandler={submitHandler}
            getErrorMsz={getErrorMsz}
        />
    </AuthLayout>
};
export default ForgotPassword;