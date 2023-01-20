import React, {useState,useEffect} from 'react'
import CustomTabs from '../../components/CustomTabs'
import { AuthLayout } from '../../designs/Auth/AuthLayout'
import {useParams} from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import { navigateAsPerSessionValidity } from "../../services/helpers";
import { environment } from '../../environments/environment';


export const AuthPage = () => {
    useEffect(() => {
        navigateAsPerSessionValidity(false);
    });
    const params=useParams();
    const [val]=useState(params.index? 1:0);

    const tabArr = [
        { label: "Log In", component: <Login /> }
    ]
    if(environment.env !== "school"){
        tabArr.push({ label: "Sign Up", component: <SignUp /> });
    }

    return <AuthLayout>
        <CustomTabs
            tabArr={tabArr}
            label="auth"
            type="2"
            indicatorColor="red"
            textColor="inherit"
            scrollButtons="auto"
            activeIndex={val}
        />
    </AuthLayout>
}
