import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';
import { CustomSnackbar } from '../../components/CustomSnackbar';
import { CustomTextField } from '../../components/CustomTextField';
import { afterValidate } from '../../services/commonService';
import { getErrorMsz } from '../../services/validator';
import { OnboardingLayout } from './OnboardingLayout';
import { responsiveStype } from '../../beautifiers/responsive';

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

    return <OnboardingLayout stepperIndex="0">
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h3'><Box mb={3} mt={5} fontWeight="bold" sx={responsiveStype.School.Typo}>School Details</Box></Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' fontWeight="medium" sx={{color:"rgba(131,139,161,1)"}}><Box mb={3} sx={responsiveStype.School.Typo}>Enter the details of the school the student is enrolled in.</Box></Typography>
            </Grid>
            <Grid item xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        placeholder="School Area Postal Code"
                        variant="filled"
                        value={pageData.postalCode}
                        onChange={(event) => { setPageData({ ...pageData, postalCode: event.target.value }) }}
                        required
                        error={submitFlag && getErrorMsz('postal_code', pageData.postalCode) != ""}
                        errorMsz={getErrorMsz('postal_code', pageData.postalCode)}
                        inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                    />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box mb={2} width={1}>
                    <CustomTextField
                        placeholder="School"
                        variant="filled"
                        value={pageData.school}
                        onChange={(event) => { setPageData({ ...pageData, school: event.target.value }) }}
                        required
                        error={submitFlag && getErrorMsz('student_school', pageData.school) != ""}
                        errorMsz={getErrorMsz('student_school', pageData.school)}
                        inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                    />
                </Box>
            </Grid>
            <Grid container  spacing={1}>
                <Grid item xs={12} lg={6}>
                    <Box mb={2} width={1}>
                        <CustomTextField
                            placeholder="Class"
                            variant="filled"
                            value={pageData.class}
                            onChange={(event) => { setPageData({ ...pageData, class: event.target.value }) }}
                            required
                            error={submitFlag && getErrorMsz('student_class', pageData.class) != ""}
                            errorMsz={getErrorMsz('student_class', pageData.class)}
                            inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Box mb={3} width={1}>
                        <CustomTextField
                            placeholder="Section"
                            variant="filled"
                            value={pageData.section}
                            onChange={(event) => { setPageData({ ...pageData, section: event.target.value }) }}
                            required
                            error={submitFlag && getErrorMsz('student_section', pageData.section) != ""}
                            errorMsz={getErrorMsz('student_section', pageData.section)}
                            inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                        />
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Box mb={16} sx={responsiveStype.School.Typo}>
                    <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={submitHandler} />
                </Box>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </Grid>
    </OnboardingLayout>
};

export default SchoolDetails;