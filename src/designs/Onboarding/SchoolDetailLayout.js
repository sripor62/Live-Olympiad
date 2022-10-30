import { Box, Grid, Typography, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';
import { CustomSnackbar } from '../../components/CustomSnackbar';
import { CustomTextField } from '../../components/CustomTextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const SchoolDetailLayout = (props) => {
    const [classes, setClasses] = React.useState('');

    const handleChange = (event) => {
        setClasses(event.target.value);
    };
    return <Grid container>
        <Grid item xs={12} >
            <Typography variant='h3' sx={{ fontSize: { xs: "32px", lg: "40px" } }}><Box mb={3} mt={5} fontWeight="bold" sx={props.responsiveStype.School.Typo}>School Details</Box></Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='body2' fontWeight="medium" sx={{ color: "rgba(131,139,161,1)", fontSize: { xs: "12px", lg: "14px" } }}><Box mb={3} sx={props.responsiveStype.School.Typo}>Enter the details of the school the student is enrolled in.</Box></Typography>
        </Grid>
        <Grid item xs={12}>
            <Box mb={2} width={1}>
                <CustomTextField
                    placeholder="School Area Postal Code"
                    type="tel"
                    variant="filled"
                    value={props.pageData?.postalCode}
                    onChange={(event) => { props.setPageData({ ...props.pageData, postalCode: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('postal_code', props.pageData.postalCode) != ""}
                    errorMsz={props.getErrorMsz('postal_code', props.pageData?.postalCode)}
                    inputProps={{ sx: { color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' } }}
                />
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box mb={2} width={1}>
                <FormControl fullWidth>
                    <InputLabel>School</InputLabel>
                    <Select label="School" selected={props.pageData?.school} onChange={props.selectionChangeHandler}>
                        {props.schoolsList?.map((option) => (

                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>
                <Box mb={2} width={1}>
                    <FormControl fullWidth>
                        <InputLabel>Class</InputLabel>
                        <Select label="Class" value={props.pageData?.grade} onChange={(event) => { props.setPageData({ ...props.pageData, grade: event.target.value }) }}>
                            <MenuItem value={10}>10th</MenuItem>
                            <MenuItem value={20}>11th</MenuItem>
                            <MenuItem value={30}>12th</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Box mb={2} width={1}>
                <CustomTextField
                    placeholder="Section"
                    type="tel"
                    variant="filled"
                    value={props.pageData?.section}
                    onChange={(event) => { props.setPageData({ ...props.pageData, section: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('postal_code', props.pageData.section) != ""}
                    errorMsz={props.getErrorMsz('postal_code', props.pageData?.section)}
                    inputProps={{ sx: { color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' } }}
                />
            </Box>
            </Grid>
        </Grid>

        <Grid item xs={12}>
            <Box mb={16} sx={{ justifyContent: { xs: 'center', lg: 'left' }, alignItems: { xs: 'center', lg: 'left' }, display: "flex" }}>
                <CustomButton btnText="Next" color="primary" variant="contained" className="minWidth240" onClick={props.submitHandler} sx={{ borderRadius: "50px" }} />
            </Box>
        </Grid>
        {
            Object.keys(props.snakeBarProps).length > 0 &&
            <CustomSnackbar {...props.snakeBarProps} setSnakeBarProps={props.setSnakeBarProps} />
        }
    </Grid>
}