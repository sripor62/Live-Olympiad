import { Grid } from '@mui/material'
import React from 'react'

const SignInWithGoogle=()=>{
    const responseGoogle =(response) =>{
        console.log(response);
    }
    return(
        <Grid>
            Sign In With Google
        </Grid>
    )
}
export default SignInWithGoogle;