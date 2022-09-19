import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'

export default function LoginPage() {
    return <Box>
        <Grid container>
            <Grid xs={12}>
                <Typography variant='h3'><Box mb={3} mt={9}>Log In</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>Existing User? Enter your login details below,</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField placeholder="Email" variant="filled" />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField type="password" placeholder="Password" variant="filled" />
                </Box>
            </Grid>
            <Grid xs={12}>
                <CustomButton btnText="Login" color="primary" variant="contained" />
            </Grid>
        </Grid>
    </Box>
}
