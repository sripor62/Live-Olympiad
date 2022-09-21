import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '.';
import { CustomButton } from '../../components/Button';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';

const SchoolDetails = () => {
    const navigate = useNavigate();
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({
        postalCode: "",
        school: "",
        class: "",
        section: "",
    });

    const submitHandler = () => {
        setsubmitFlag(true);
        console.log('pageData', pageData)
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData)
    }

    return <AuthLayout>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
            <Grid xs={12} >
                <Typography variant='h3'><Box mb={3} mt={9}>School Details</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Typography variant='body2'><Box mb={3}>Enter the details of the school the student is enrolled in,</Box></Typography>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="School Area Postal Code"
                        value={pageData.postalCode}
                        variant="filled"
                        required
                        error={submitFlag && getErrorMsz('postal_code', pageData.postalCode) != ""}
                        errorMsz={getErrorMsz('postal_code', pageData.postalCode)}
                        onChange={(event) => { setPageData({ ...pageData, postalCode: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="School"
                        value={pageData.school}
                        variant="filled"
                        required
                        error={submitFlag && getErrorMsz('school', pageData.school) != ""}
                        errorMsz={getErrorMsz('school', pageData.school)}
                        onChange={(event) => { setPageData({ ...pageData, school: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Class"
                        value={pageData.class}
                        variant="filled"
                        required
                        error={submitFlag && getErrorMsz('class', pageData.class) != ""}
                        errorMsz={getErrorMsz('class', pageData.class)}
                        onChange={(event) => { setPageData({ ...pageData, class: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Section"
                        value={pageData.section}
                        variant="filled"
                        required
                        error={submitFlag && getErrorMsz('section', pageData.section) != ""}
                        errorMsz={getErrorMsz('section', pageData.section)}
                        onChange={(event) => { setPageData({ ...pageData, section: event.target.value }) }}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={16}>
                    <CustomButton btnText="Next" color="primary" variant="contained" onClick={submitHandler} />
                </Box>
            </Grid>
        </Grid>
    </AuthLayout>
};

export default SchoolDetails;