import { Box, Grid, MenuItem, Typography,Select } from "@mui/material"
import { CustomTextField } from "../../components/CustomTextField"
import { Button} from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useStudent } from "../../hooks/useStudent"
import { AppConstants } from "../../environments/app-constants";
import { CustomButton } from "../../components/CustomButton"
export const UserProfileForm = (props) => {

    return <>
        <Grid container p={4} alignItems='center' justifyContent='center' >
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>

                <Typography variant='h6' fontWeight="bold" ><Box sx={{fontFamily:"Urbanist"}}>Edit Information</Box></Typography>
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
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}

                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                    <CustomTextField
                        placeholder="Gender"
                        variant="filled"
                        value={props.pageData.gender}
                        type="tel"
                        required
                        onChange={(event) => { props.setPageData({ ...props.pageData, gender: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('gender', props.pageData.gender) !== ""}
                        errorMsz={props.getErrorMsz('gender', props.pageData.gender)}
                        inputProps={{ sx: { color: '#838BA1', fontFamily: 'urbanist', fontSize: '16px', fontWeight: 600 } }}>
                        {props.category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </CustomTextField>
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
                    <CustomTextField
                    type="tel"
                    placeholder="Class"
                    variant="filled"
                    value={props.pageData.grade}
                    onChange={(event) => { props.setPageData({ ...props.pageData, grade: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.grade) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.grade)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                <CustomTextField
                    type="tel"
                    placeholder="Section"
                    variant="filled"
                    value={props.pageData.section}
                    onChange={(event) => { props.setPageData({ ...props.pageData, section: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.section) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.section)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="Date of Birth"
                    id="date"
                    type="date"
                    required
                    variant="filled"

                    value={props.pageData.dob}
                    onChange={(event) => {props.setPageData({ ...props.pageData, dob: event.target.value }) }}

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
                    value={props.pageData.pinCode}
                    onChange={(event) => { props.setPageData({ ...props.pageData, pinCode: event.target.value });
                    props.setPinCode(event.target.value) }}
                    
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.pinCode) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.pinCode)}

                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <Select style={{width:"737px"}} selected={props.pageData.school} onChange={props.selectionChangeHandler}>
                {props.schoolsList?.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))
                }           
                </Select>
            </Grid> 
            <Grid item xs={12} mt={2}  sx={{justifyContent:  'center',alignItems: 'center',display:"flex"}}><CustomButton btnText="Save" className="minWidth240"variant="contained" onClick={props.profileSubmit} style={{ marginRight: 10 }}/></Grid>
        </Grid>
    </>
}