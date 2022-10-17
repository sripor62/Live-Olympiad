import { Box, Grid, MenuItem, Typography } from "@mui/material"
import { CustomTextField } from "../../components/CustomTextField"

export const UserProfileForm = (props) => {
    return <Grid xs={12} sm={12} md={8} lg={8} p={2}>
        <Grid container xs={12} sm={12} md={12} lg={12} p={1} alignItems='center' justifyContent='center'>
            <Grid xs={12} sm={12} md={12} lg={12} mb={2}>
                <Typography variant='h6'><Box>Edit Information</Box></Typography>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
                    <CustomTextField
                        type="text"
                        placeholder="Full Name"
                        variant="filled"
                        required
                        onChange={(event) => { props.setPageData({ ...props.pageData, fullname: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('fullname', props.pageData.fullname) != ""}
                        errorMsz={props.getErrorMsz('fullname', props.pageData.fullname)}
                        inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                        />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                    <CustomTextField
                        placeholder="Gender"
                        variant="filled"
                        required
                        onChange={(event) => { props.setPageData({ ...props.pageData, gender: event.target.value }) }}
                        error={props.submitFlag && props.getErrorMsz('gender', props.pageData.gender) != ""}
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
                    required
                    onChange={(event) => { props.setPageData({ ...props.pageData, rollno: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('rollno', props.pageData.rollno) != ""}
                    errorMsz={props.getErrorMsz('rollno', props.pageData.rollno)} 
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                    />
            </Grid>
            <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
                <CustomTextField
                    placeholder="Class"
                    variant="filled"
                    value={props.pageData.class}
                    onChange={(event) => { props.setPageData({ ...props.pageData, class: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_class', props.pageData.class) != ""}
                    errorMsz={props.getErrorMsz('student_class', props.pageData.class)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
                <CustomTextField
                    placeholder="Section"
                    variant="filled"
                    value={props.pageData.section}
                    onChange={(event) => { props.setPageData({ ...props.pageData, section: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_section', props.pageData.section) != ""}
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
                    onChange={(event) => { props.setPageData({ ...props.pageData, dob: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('dob', props.pageData.dob) != ""}
                    errorMsz={props.getErrorMsz('dob', props.pageData.dob)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
            <Grid  item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    type="email"
                    placeholder="Email Address (Optional)"
                    variant="filled"
                    required
                    onChange={(event) => { props.setPageData({ ...props.pageData, email: event.target.value }) }}
                    error={props.submitFlag && props.getErrorMsz('email', props.pageData.email) != ""}
                    errorMsz={props.getErrorMsz('email', props.pageData.email)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="School Area Postal Code"
                    variant="filled"
                    value={props.pageData.postalCode}
                    onChange={(event) => { props.setPageData({ ...props.pageData, postalCode: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('postal_code', props.pageData.postalCode) != ""}
                    errorMsz={props.getErrorMsz('postal_code', props.pageData.postalCode)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                <CustomTextField
                    placeholder="School"
                    variant="filled"
                    value={props.pageData.school}
                    onChange={(event) => { props.setPageData({ ...props.pageData, school: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('student_school', props.pageData.school) != ""}
                    errorMsz={props.getErrorMsz('student_school', props.pageData.school)}
                    inputProps={{sx:{color:'#838BA1',fontFamily:'urbanist',fontSize:'16px',fontWeight:600}}}
                />
            </Grid>
        </Grid>
    </Grid>
}