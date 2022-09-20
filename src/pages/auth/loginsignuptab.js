import { Grid } from '@mui/material'
import React from 'react'
import { AuthLayout } from '.'
import CustomTabs from '../../components/customTabs'
import LoginPage from './login'
import SignUp from './SignUp'

export const LoginSignTabGroup = () => {
    const tabArr = [
        { label: "Signup", component: <SignUp /> },
        { label: "Login", component: <LoginPage /> },
    ]

    return <AuthLayout>
        <CustomTabs
            tabArr={tabArr}
            label="auth"
            type="2"
            indicatorColor="red"
            textColor="white"
            scrollButtons="auto"
            activeIndex={0}
        />
    </AuthLayout>
}
