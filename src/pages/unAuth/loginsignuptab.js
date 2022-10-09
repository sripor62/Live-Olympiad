import React, {useState} from 'react'
import CustomTabs from '../../components/customTabs'
import { UnAuthLayout } from './layout/UnAuthLayout'
import LoginPage from './LoginPage'
import SignUp from './SignUp'
import {useParams} from "react-router-dom";
export const LoginSignTabGroup = () => {
    const params=useParams();
    const [val,setVal]=useState(params.index?0:1);

    const tabArr = [
        { label: "Login", component: <LoginPage /> },
        { label: "Signup", component: <SignUp /> },
    ]

    return <UnAuthLayout>
        <CustomTabs
            tabArr={tabArr}
            label="auth"
            type="2"
            indicatorColor="red"
            textColor="white"
            scrollButtons="auto"
            activeIndex={val}
        />
    </UnAuthLayout>
}
