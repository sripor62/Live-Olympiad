import { Box, Grid, Typography, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton';
import { CustomSnackbar } from '../../components/CustomSnackbar';
import { CustomTextField } from '../../components/CustomTextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(0),
    },
    '& .MuiInputBase-input': {
        borderRadius: "10px",
        position: 'relative',
        backgroundColor: "#F7F8F9",
        border: 'none',
        fontSize: 16,
        padding: "15px 24px",
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Urbanist',
        ].join(','),
        '&:focus': {
            borderRadius: "10px",
            border: "none"
        },
    },

}));


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
                    value={props.pinCode.length>=0 ? props.pinCode : props.pageData?.schoolCode?.substring(0,6)}
                    onChange={(event) => {
                        props.setPageData({ ...props.pageData, pinCode: event.target.value }) 
                        props.setPinCode(event.target.value)
                    }}
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
                    <InputLabel sx={{ color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' }}>School</InputLabel>
                    <Select label="School" selected={props.pageData?.school} value={props.pageData?.school}  
                    onChange={(event) => { props.setPageData({ ...props.pageData, school: event.target.value }) }}
                    inputProps={{ sx: { color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' } }}
                    input={<BootstrapInput />}
                    >
                    {props?.schoolsList?.length>0 && props?.schoolsList?.map((option) => (

                            <MenuItem key={option.id} value={option.id}>
                                {option.name}
                            </MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Grid>
        {/* <Grid item xs={12}>
            <Box mb={2} width={1}>
                <CustomTextField 
                    placeholder="School Area Postal Code"
                    type="tel"
                    variant="filled"
                    value={props.pinCode.length>=0 ? props.pinCode : props.pageData?.schoolCode?.substring(0,6)}
                    onChange={(event) => {
                        props.setPageData({ ...props.pageData, pinCode: event.target.value }) 
                        props.setPinCode(event.target.value)
                    }}
                    required
                    error={props.submitFlag && props.getErrorMsz('postal_code', props.pageData.postalCode) != ""}
                    errorMsz={props.getErrorMsz('postal_code', props.pageData?.postalCode)}
                    inputProps={{ sx: { color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' } }}
                /><span style={{color:"red", fontWeight:"bold"}}>*</span>
            </Box>
        </Grid> */}
        <Grid container spacing={1}>
            <Grid item xs={12} lg={6}>
                <Box mb={2} width={1}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' }}>Class</InputLabel>
                        <Select label="Class" selected={props.pageData?.grade}
                            value={props.pageData?.grade} 
                            onChange={(event) => { props.setPageData({ ...props.pageData, grade: event.target.value }) }}
                             input={<BootstrapInput />}
                            inputProps={{ sx: { color: "rgba(131,145,161,1)", fontFamily: 'urbanist', fontWeight: 600, fontSize: '16px' } }}>
                            {
                                props.grades?.map((grade)=>{
                                    return <MenuItem value={grade.groupName}>{grade.groupName}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Box mb={2} width={1}>
                <CustomTextField
                    placeholder="Section"
                    type="text"
                    variant="filled"
                    value={props.pageData?.section}
                    onChange={(event) => { props.setPageData({ ...props.pageData, section: event.target.value }) }}
                    required
                    error={props.submitFlag && props.getErrorMsz('postal_code', props.pageData.section) != ""}
                    // errorMsz={props.getErrorMsz('postal_code', props.pageData?.section)}
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
    </Grid >
}