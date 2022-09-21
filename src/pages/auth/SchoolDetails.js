import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '.';
import { CustomButton } from '../../components/Button';
import { CustomSnackbar } from '../../components/CustomSnackbar';
import { CustomTextField } from '../../components/TextField';
import { afterValidate } from '../../utils/commonService';
import { getErrorMsz } from '../../utils/validator';

const SchoolDetails = () => {
    const navigate = useNavigate();
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({
        postalCode: "",
        school: "",
        class: "",
        section: "",
    });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        console.log('pageData', pageData);
        setSnakeBarProps({ snackbarFlag: true, msz: "School Details saved.", type: "success" })
    }

    return <AuthLayout>
        <Grid container spacing={1} sx={{ height: "100%" }}>
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
                        variant="filled"
                        value={pageData.postalCode}
                        onChange={(event) => { setPageData({ ...pageData, postalCode: event.target.value }) }}
                        required
                        error={submitFlag && getErrorMsz('postal_code', pageData.postalCode) != ""}
                        errorMsz={getErrorMsz('postal_code', pageData.postalCode)}
                    />
                </Box>
            </Grid>
            <Grid xs={12}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="School"
                        variant="filled"
                        value={pageData.school}
                        onChange={(event) => { setPageData({ ...pageData, school: event.target.value }) }}
                        required
                        error={submitFlag && getErrorMsz('student_school', pageData.school) != ""}
                        errorMsz={getErrorMsz('student_school', pageData.school)}
                    />
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Class"
                        variant="filled"
                        value={pageData.class}
                        onChange={(event) => { setPageData({ ...pageData, class: event.target.value }) }}
                        required
                        error={submitFlag && getErrorMsz('student_class', pageData.class) != ""}
                        errorMsz={getErrorMsz('student_class', pageData.class)}
                    />
                </Box>
            </Grid>
            <Grid xs={6}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Section"
                        variant="filled"
                        value={pageData.section}
                        onChange={(event) => { setPageData({ ...pageData, section: event.target.value }) }}
                        required
                        error={submitFlag && getErrorMsz('student_section', pageData.section) != ""}
                        errorMsz={getErrorMsz('student_section', pageData.section)}
                    />
                </Box>
            </Grid>

            <Grid xs={12}>
                <Box mb={16}>
                    <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
                </Box>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </Grid>
    </AuthLayout>
};

export default SchoolDetails;