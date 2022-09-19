import { Grid } from '@mui/material'
import React from 'react'
import { AuthLayout } from '.'
import CustomTabs from '../../components/customTabs'
import LoginPage from './login'
import SignUp from './SignUp'

export const LoginSignTabGroup = () => {
    const tabArr = [
        { label: "Signup", component: <SignUp/> },
        { label: "Login", component: <LoginPage /> },
    ]

    return <AuthLayout>
        <Grid container sx={{ height: "100%" }}>
            <Grid container xs="12" direction="row" justifyContent="center" alignItems="center" >
                <Grid xs="8">
                    <CustomTabs
                        tabArr={tabArr}
                        label="auth"
                        type="2"
                        indicatorColor="red"
                        textColor="white"
                        scrollButtons="auto"
                        activeIndex={0}
                    />
                </Grid>
            </Grid>
        </Grid>
    </AuthLayout>
}
