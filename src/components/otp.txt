import { Box, Grid, Typography } from '@mui/material'

import React, { useState } from 'react'
import { CustomButton } from '../Components/Button'
import { CustomOtp } from '../Components/Otp'
import Layout from './layout'

export const Otp = () => {
    const savedOtp = 1234;
    const [otp, setOtp] = useState();
    const [hasErrored, setHasErrored] = useState(false);
    const [errorMsz, setErrorMsz] = useState("");
    const handleChangeOtp = (value) => {
        setOtp(value)
    }

    const onClick = () => {
        // console.log('otp', otp)
        setHasErrored(otp == undefined ? true : otp.length == 4 ? false : true);
        setErrorMsz(otp == undefined ? "Enter Otp" : otp.length == 4 ? "" : "Enter empty otp")
        // if (savedOtp!=""){
        //     setHasErrored(otp == undefined ? true : otp.length == 4 ? false : true);
        //     setErrorMsz(otp == undefined ? "Enter Otp" : otp.length == 4 ? "" : "Enter empty otp")

        // }
        // setErrorMsz(otp == undefined ? "Enter Otp" : otp.length == 4 ? "" : "Enter empty otp")
        if (otp != undefined && otp.length == 4) {
            console.log('otp', otp)
        }
    }

    return <Layout>
        <Grid container direction="row" justifyContent="center">
            <Grid item sm={4}>
                <Grid container >
                    <Grid item sm={12} className="d-flex" justifyContent="center">
                        <Box my={3}>
                            <CustomOtp value={otp} handleChange={handleChangeOtp} hasErrored={hasErrored} errorMsz={errorMsz} />
                        </Box>
                    </Grid>
                    <Grid item sm={12} className="d-flex" justifyContent="center">
                        <Box my={3}>
                            <CustomButton btnText="Submit" variant="contained" onClick={onClick} />
                        </Box>
                    </Grid>
                    <Grid item sm={12} className="d-flex" justifyContent="center">
                        <Typography><Box>{otp}</Box></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    </Layout >
}
