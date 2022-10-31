import { Box, Grid, MenuItem, Typography, Select } from "@mui/material"
import { CustomTextField } from "../../components/CustomTextField"
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useStudent } from "../../hooks/useStudent"
import { AppConstants } from "../../environments/app-constants";
import { CustomButton } from "../../components/CustomButton"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const UserProfileForm = (props) => {
    const [classes, setClasses] = React.useState(props.pageData.grade);
    const [gender, setGender] = React.useState('');

  
    const handleChange = (event) => {
        setClasses(event.target.value);
    };  

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    return <>
        <Grid container p={4} alignItems='center' justifyContent='center' >
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>

                <Typography variant='h6' fontWeight="bold" ><Box sx={{ fontFamily: "Urbanist" }}>Edit Information</Box></Typography>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>

                    <CustomTextField
                        type="tel"
                        placeholder="Full Name"
                        variant="filled"
                        value={props.pageData.fullName}
                        onChange={(event) => { props.setPageData({ ...props.pageData, fullName: event.target.value }) }}
                        required
                        error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.fullName) !== ""}
                        errorMsz={props.getErrorMsz('student_section', props.pageData.fullName)}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select label="Gender" 
                         value={gender} 
                         onChange={handleGenderChange}
                         inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}>
                            <MenuItem value={"Female"}>F</MenuItem>
                            <MenuItem value={"Male"}>M</MenuItem>
                    </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    type="tel"
                    placeholder="Roll No."
                    variant="filled"
                    value={props.pageData.rollNumber}
                    onChange={(event) => { props.setPageData({ ...props.pageData, rollNumber: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.rollNumber) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.rollNumber)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid container spacing={1}>

                <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
                    <FormControl fullWidth>
                        <InputLabel>Class</InputLabel>
                        <Select label="Class" 
                        value={classes} 
                        onChange={handleChange}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}>
                            <MenuItem value={"1"}>1st</MenuItem>
                            <MenuItem value={"2"}>2nd</MenuItem>
                            <MenuItem value={"3"}>3rd</MenuItem>
                            <MenuItem value={"4"}>4th</MenuItem>
                            <MenuItem value={"5"}>5th</MenuItem>
                            <MenuItem value={"6"}>6th</MenuItem>
                            <MenuItem value={"7"}>7th</MenuItem>
                            <MenuItem value={"8"}>8th</MenuItem>
                            <MenuItem value={"9"}>9th</MenuItem>
                            <MenuItem value={"9"}>10th</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                <CustomTextField
                    type="tel"
                    placeholder="Section."
                    variant="filled"
                    value={props.pageData.section}
                    onChange={(event) => { props.setPageData({ ...props.pageData, section: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.section) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.section)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="Date of Birth"
                    id="date"
                    type="tel"
                    required
                    variant="filled"
                    value={props.pageData.dob}
                    onChange={(event) => { props.setPageData({ ...props.pageData, dob: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('dob', props.pageData.dob) !== ""}
                    errorMsz={props.getErrorMsz('dob', props.pageData.dob)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    type="email"
                    placeholder="Email Address (Optional)"
                    variant="filled"
                    value={props.pageData.email}
                    required
                    onChange={(event) => { props.setPageData({ ...props.pageData, email: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('email', props.pageData.email) !== ""}
                    errorMsz={props.getErrorMsz('email', props.pageData.email)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    type="tel"
                    placeholder="School Area Postal Code"
                    variant="filled"
                    value={props.pinCode.length>=0 ? props.pinCode : props.pageData?.schoolCode.substring(0,6)}
                    onChange={(event) => {
                        props.setPageData({ ...props.pageData, pinCode: event.target.value }) 
                        props.setPinCode(event.target.value)
                    }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.pinCode) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.pinCode)}
                    inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <FormControl fullWidth>
                    <InputLabel>School</InputLabel>
                    <Select label="School" selected={props.pageData?.school} value={props.pageData?.school}  onChange={(event) => { props.setPageData({ ...props.pageData, school: event.target.value }) }}>
                    {props?.schoolsList?.length>0 && props?.schoolsList?.map((option) => (

                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} mt={2} sx={{ justifyContent: 'center', alignItems: 'center', display: "flex" }}><CustomButton btnText="Save" className="minWidth240" variant="contained" onClick={props.profileSubmit} style={{ marginRight: 10 }} sx={{ borderRadius: "50px" }} /></Grid>
        </Grid >
    </>
}