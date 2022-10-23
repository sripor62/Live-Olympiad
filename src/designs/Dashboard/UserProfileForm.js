import { Box, Grid, MenuItem, Typography,Select } from "@mui/material"

import { CustomTextField } from "../../components/CustomTextField"
import React, {useState,useEffect} from 'react'
import { useMutation, useQuery } from 'react-query';
import { Button} from '@mui/material';
import {useStudent} from "../../hooks/useStudent"
import {useSchool} from "../../hooks/useSchool"
import { AppConstants } from "../../environments/app-constants";
import { SettingsPhoneOutlined } from "@mui/icons-material";
export const UserProfileForm = (props) => {
    const [pageData,setPageData]=useState({
    "fullName": "",
    "email": "",
    "rollNumber": "",
    "dob": "",
    "gender": "",
    "pinCode": "",
    "school": "",
    "grade": "",
    "section": ""

    })
    const [pinCode,setPinCode]=useState(208017);
    const [schoolsList,setSchoolsList]=useState( [
        {
            "id": "8bbcf6c6-3255-43b3-a17c-4dfa6ba5c690",
            "active": false,
            "createdAt": null,
            "modifiedAt": null,
            "name": "momo highschool",
            "address": "mo Address",
            "city": null,
            "contactemail": null,
            "milestone": null,
            "othercontactnumbers": null,
            "contactpersons": null,
            "pincode": 0,
            "zone": null,
            "district": null,
            "state": null,
            "salesChannelId": null,
            "sentiment": null,
            "studentCount": 0
        }
    ]);
    const [schoolsId,setSchoolsId]=useState("")
    const {getProfile}=useStudent();
    const {getSchool}=useSchool();
   

    const { data: profileData, isLoading: contentLoader, refetch } = useQuery([`ProfileData`], () => getProfile(), { enabled: true, retry: false })
    
    const {profileDataDetails}=useStudent();
    useEffect(()=>{
        setPinCode(pageData.pinCode)
         
        setSchoolsId()
        var pdata = {
            ...profileData?.data.data,
        }

        setPageData({ ...pageData, ...pdata })
        
    },[profileData])

    


    const profileSubmit = () => {
     
        var pdata = {
            ...pageData,
            fullName: pageData.fullName,
            email: pageData.email,
            rollNumber: pageData.rollNumber,
            dob: pageData.dob,
            gender: pageData.gender,
            pinCode: pageData.pinCode,
            school:pageData.school,
            grade: pageData.grade,
            section: pageData.section

        }
        
        addProfileMutate({ data: pdata })
        
    }
  
    const { mutate: addProfileMutate, isLoading: addProfileLoading } = useMutation(profileDataDetails, {
        onSuccess: (data, variables, context) => onSuccessAddAssessment(data, variables, context),
        onError: (data, variables, context) => onErrorAddAssessment(data, variables, context)
    })
    const onSuccessAddAssessment=()=> {
        refetch();
    }
    const onErrorAddAssessment=()=> {
        
    }
    const { data: schoolData, isLoading: schoolLoader, refetch:schoolFetch } = useQuery([`SchoolData`], () => getSchool(517002), { enabled: true, retry: false })

    useEffect(()=>{
        schoolFetch();  
        setSchoolsList(schoolData?.data.data) 
    
    },[pinCode])

    const selectionChangeHandler=(event)=>{
    
    setPageData({...pageData,school:event.target.value})
    

    }
    return <Grid xs={12} sm={12} md={8} lg={8} p={2}>
        <Grid container xs={12} sm={12} md={12} lg={12} p={1} alignItems='center' justifyContent='center'>
            <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                <Typography variant='h6' fontWeight="bold"><Box>Edit Information</Box></Typography>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
                    
                    <CustomTextField
                    placeholder="Full Name"
                    variant="filled"
                    value={pageData.fullName}
                    onChange={(event) => { setPageData({ ...pageData, fullName: event.target.value }) }}
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
                        value={pageData.gender}
                      
                        required
                        onChange={(event) => { setPageData({ ...pageData, gender: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('gender', props.pageData.gender) !== ""}
                        errorMsz={props.getErrorMsz('gender', props.pageData.gender)}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}>
                        {props.category.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </CustomTextField>
                </Grid>
            </Grid>
        
            <Grid item  xs={12} sm={12} md={12} lg={12} mb={2}>
                    <CustomTextField
                    placeholder="Roll No."
                    variant="filled"
                    value={pageData.rollNumber}
                    onChange={(event) => { setPageData({ ...pageData, rollNumber: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.rollNumber) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.rollNumber)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
            </Grid>
            <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
                    <CustomTextField
                    placeholder="Class"
                    variant="filled"
                    value={pageData.grade}
                    onChange={(event) => { setPageData({ ...pageData, grade: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.grade) !== ""}
                    errorMsz={props.getErrorMsz('student_section', props.pageData.grade)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                <CustomTextField
                    placeholder="Section"
                    variant="filled"
                    value={pageData.section}
                    onChange={(event) => { setPageData({ ...pageData, section: event.target.value }) }}
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
                    value={pageData.dob}
                    onChange={(event) => {setPageData({ ...pageData, dob: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('dob', props.pageData.dob) !== ""}
                    errorMsz={props.getErrorMsz('dob', props.pageData.dob)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
            <Grid  item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    type="email"
                    placeholder="Email Address (Optional)"
                    variant="filled"
                    value={pageData.email}
                    required
                    onChange={(event) => { setPageData({ ...pageData, email: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('email', props.pageData.email) !== ""}
                    errorMsz={props.getErrorMsz('email', props.pageData.email)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
            <CustomTextField
                    placeholder="School Area Postal Code"
                    variant="filled"
                    value={pageData.pinCode}
                    onChange={(event) => { setPageData({ ...pageData, pinCode: event.target.value });setPinCode(event.target.value); }}
                    
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.pinCode) !== ""}
                    errorMsz={props.getErrorMsz('student_section', pageData.pinCode)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <Select style={{width:"757px"}} selected={pageData.school} onChange={selectionChangeHandler}>
                {schoolsList?.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))
                }   
                
       
        
      </Select>
            </Grid>
            <Button variant="contained" onClick={profileSubmit} style={{ marginRight: 10 }}>Save</Button>
        </Grid>
    </Grid>
}