import React, {useState} from 'react'
import CustomTabs from '../../components/CustomTabs'
import { AuthLayout } from '../../designs/AuthLayout'
import {useParams} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
export const AuthPage = () => {
    const params=useParams();
    const [val,setVal]=useState(params.index?0:1);

    const tabArr = [
        { label: "Login", component: <Login /> },
        { label: "Signup", component: <SignUp /> },
    ]

    return <AuthLayout>
        <CustomTabs
            tabArr={tabArr}
            label="auth"
            type="2"
            indicatorColor="red"
            textColor="white"
            scrollButtons="auto"
            activeIndex={val}
        />
    </AuthLayout>
}
