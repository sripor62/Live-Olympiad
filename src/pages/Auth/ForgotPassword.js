import React, { useState } from 'react';
import { afterValidate } from '../../services/commonService';
import { getErrorMsz } from '../../services/validator';
import { AuthLayout } from '../../designs/Auth/AuthLayout';
import { responsiveStype } from '../../beautifiers/responsive';
import { ForgotPWLayout } from '../../designs/Auth/ForgotPWLayout';

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