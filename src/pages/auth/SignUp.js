import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';

const SignUp = () => {

    const submitHandler =()=>{
        console.log(values)
        
    }

    const [values, setValues] = useState({
        phoneNumber: "",
    });

  return (
    <>

        <Grid container>
            <Grid item xs={12} >
                <CustomButton btnText = "Log In" />
                <CustomButton btnText = "Sign Up" />
            </Grid>
            <Grid item xs={12} >
                <Typography>Sign Up</Typography>
                <Typography>Existing User? Enter your login details below,</Typography>
            </Grid>
            <Grid item xs={12}>
                <CustomTextField placeholder ="Phone Number" name="phoneNumber" value={values.phoneNumber} type="tel"
                    onChange={(event) => {
                        console.log(event.target.value)
                        setValues({...values, phoneNumber:event.target.value})
                        }
                        }
                />
            </Grid>
            <Grid item xs={12}>
                <CustomButton btnText = "Sign Up" onClick={submitHandler}   />
            </Grid>
        </Grid>
    
    </>
  );
};


export default SignUp;