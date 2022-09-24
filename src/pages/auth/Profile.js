import { Box, Grid, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CustomButton } from '../../components/Button'
import { CustomTextField } from '../../components/TextField'
import { afterValidate } from '../../utils/commonService'
import { getErrorMsz } from '../../utils/validator'
import MenuItem from '@mui/material/MenuItem';
import { CustomSnackbar } from '../../components/CustomSnackbar'
import DashboardLayout from './DashboardLayout'
import { Avatar } from '@mui/material';
const category = [
    {
        label: "F",
        value: 1
    },
    {
        label: "M",
        value: 2
    }
]

const Profile = () => {
    const [snakeBarProps, setSnakeBarProps] = useState({});
    const [submitFlag, setsubmitFlag] = useState(false)
    const [pageData, setPageData] = useState({ fullname: "", gender: "", rollno: "", dob: "", email: "" });

    const submitHandler = () => {
        setsubmitFlag(true);
        afterValidate(afterValidateCallBack)
    };

    const afterValidateCallBack = (second) => {
        setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" })
    }
    return (
        <DashboardLayout>
            <Grid container spacing={4} style={{ padding: 10, justifyContent: "center", alignItems: "center" }}>
                <Grid item xs="4">
                    <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: "#F7F8F9", borderRadius: 20 }}>
                        <Grid xs={2}>
                            <Box sx={{ width: '120%', height: '120%', mt: 2 }}>
                                <Avatar sx={{ width: '120%', height: '120%' }} src="../girl.jpeg" />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' align="center"><Box sx={{ mt: 2 }}>Emily | VII-A</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' align="center"><Box>Amity International School, Noida</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' align="center"><Box sx={{ mt: 3 }}>Total Fees Paid</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' align="center"><Box>Rs.600</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' align="center"><Box sx={{ mt: 3 }}>Subject Subscriptions</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' align="center"><Box>English,Science</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' align="center"><Box sx={{ mt: 3 }}>Date of Joining</Box></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2' align="center"><Box sx={{ mb: 5 }}>14/06/2022</Box></Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs="7" sx={{ mt: 6 }}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
                        <Grid xs={12}>
                            <Typography variant='h6'><Box mb={1}>Edit Information</Box></Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Box mb={1} width={1}>
                                    <CustomTextField
                                        type="text"
                                        placeholder="Full Name"
                                        variant="filled"
                                        required
                                        onChange={(event) => { setPageData({ ...pageData, fullname: event.target.value }) }}
                                        error={submitFlag && getErrorMsz('fullname', pageData.fullname) != ""}
                                        errorMsz={getErrorMsz('fullname', pageData.fullname)} />
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box mb={1} width={1}>
                                    <CustomTextField
                                        placeholder="Gender"
                                        variant="filled"
                                        required
                                        onChange={(event) => { setPageData({ ...pageData, gender: event.target.value }) }}
                                        error={submitFlag && getErrorMsz('gender', pageData.gender) != ""}
                                        errorMsz={getErrorMsz('gender', pageData.gender)}>
                                        {category.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}

                                    </CustomTextField>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={1} width={1}>
                                <CustomTextField
                                    placeholder="RollNo"
                                    variant="filled"
                                    required
                                    onChange={(event) => { setPageData({ ...pageData, rollno: event.target.value }) }}
                                    error={submitFlag && getErrorMsz('rollno', pageData.rollno) != ""}
                                    errorMsz={getErrorMsz('rollno', pageData.rollno)} />
                            </Box>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Box mb={1} width={1}>
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
                            <Grid item  xs={4}>
                                <Box mb={1} width={1}>
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
                        </Grid>
                        <Grid item  xs={12}>
                            <Box mb={1} width={1}>
                                <CustomTextField
                                    placeholder="Date of Birth"
                                    id="date"
                                    type="date"
                                    required
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    onChange={(event) => { setPageData({ ...pageData, dob: event.target.value }) }}
                                    error={submitFlag && getErrorMsz('dob', pageData.dob) != ""}
                                    errorMsz={getErrorMsz('dob', pageData.dob)} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={1} width={1}>
                                <CustomTextField
                                    type="email"
                                    placeholder="Email Address"
                                    variant="filled"
                                    required
                                    onChange={(event) => { setPageData({ ...pageData, email: event.target.value }) }}
                                    error={submitFlag && getErrorMsz('email', pageData.email) != ""}
                                    errorMsz={getErrorMsz('email', pageData.email)} />
                            </Box>
                        </Grid>
                        <Grid item  xs={12}>
                            <Box mb={1} width={1}>
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
                        <Grid item  xs={12}>
                            <Box mb={1} width={1}>
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
                    </Grid>
                </Grid>
            </Grid>
            {
                Object.keys(snakeBarProps).length > 0 &&
                <CustomSnackbar {...snakeBarProps} setSnakeBarProps={setSnakeBarProps} />
            }
        </DashboardLayout>

    );
};

export default Profile