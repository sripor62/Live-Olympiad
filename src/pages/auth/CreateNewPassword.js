import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'

export default function ResetPassword() {
    return <Box>
        <Grid container>
            <Grid xs={12}>
                <Typography variant='h3'><Box mb={3} mt={9}>Create New Password</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>Create on Unique 6 Digit Numeric Password </Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField type="Password" placeholder="New Password" variant="filled" />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField type="Password" placeholder="Confirm Password" variant="filled" />
                </Box>
            </Grid>
            <Grid xs={12}>
                <CustomButton btnText="Confirm Password" color="primary" variant="contained" />
            </Grid>
        </Grid>
    </Box>
}
