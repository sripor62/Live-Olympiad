import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components/CustomButton';
import { CustomSnackbar } from '../components/CustomSnackbar';
import { CustomTextField } from '../components/CustomTextField';

export const SchoolDetailLayout = (props) => {
    return <Grid container>
        <Grid item xs={12} >
            <Typography variant='h3'><Box mb={3} mt={5} fontWeight="bold" sx={props.responsiveStype.School.Typo}>School Details</Box></Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body2' fontWeight="medium" sx={{color:"rgba(131,139,161,1)"}}><Box mb={3} sx={props.responsiveStype.School.Typo}>Enter the details of the school the student is enrolled in.</Box></Typography>
        </Grid>
        <Grid item xs={12}>
            <Box mb={2} width={1}>
                <CustomTextField
                    placeholder="School Area Postal Code"
                    variant="filled"
                    value={props.pageData.postalCode}
                    onChange={(event) => { props.setPageData({ ...props.pageData, postalCode: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('postal_code', props.pageData.postalCode) != ""}
                    errorMsz={props.getErrorMsz('postal_code', props.pageData.postalCode)}
                    inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                />
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box mb={2} width={1}>
                <CustomTextField
                    placeholder="School"
                    variant="filled"
                    value={props.pageData.school}
                    onChange={(event) => { props.setPageData({ ...props.pageData, school: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_school', props.pageData.school) != ""}
                    errorMsz={props.getErrorMsz('student_school', props.pageData.school)}
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
                        value={props.pageData.class}
                        onChange={(event) => { props.setPageData({ ...props.pageData, class: event.target.value }) }}
                        required
                        error={props.submitFlag && props.getErrorMsz('student_class', props.pageData.class) != ""}
                        errorMsz={props.getErrorMsz('student_class', props.pageData.class)}
                        inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Box mb={3} width={1}>
                    <CustomTextField
                        placeholder="Section"
                        variant="filled"
                        value={props.pageData.section}
                        onChange={(event) => { props.setPageData({ ...props.pageData, section: event.target.value }) }}
                        required
                        error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.section) != ""}
                        errorMsz={props.getErrorMsz('student_section', props.pageData.section)}
                        inputProps={{sx:{color:"rgba(131,145,161,1)",fontFamily:'urbanist',fontWeight:600,fontSize:'16px'}}}
                    />
                </Box>
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Box mb={16} sx={props.responsiveStype.School.Typo}>
                <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} />
            </Box>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </Grid>
}