import { Grid } from '@mui/material'
import React from 'react'
import { AuthLayout } from '.'
import CustomTabs from '../../components/customTabs'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

export const LoginSignTabGroup = () => {
    const tabArr = [
        { label: "Login", component: <LoginPage /> },
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
            activeIndex={1}
        />
    </AuthLayout>
}
