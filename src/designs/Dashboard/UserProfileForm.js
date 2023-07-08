import { Box, Grid, MenuItem, Typography, Select } from "@mui/material";
import { CustomTextField } from "../../components/CustomTextField";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useStudent } from "../../hooks/useStudent";
import { AppConstants } from "../../environments/app-constants";
import { CustomButton } from "../../components/CustomButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0),
  },
  "& .MuiInputBase-input": {
    borderRadius: "10px",
    position: "relative",
    backgroundColor: "#F7F8F9",
    border: "none",
    fontSize: 16,
    padding: "15px 24px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Urbanist"].join(","),
    "&:focus": {
      borderRadius: "10px",
      border: "none",
    },
  },
}));

export const UserProfileForm = (props) => {
  const [classes, setClasses] = React.useState(props.pageData.grade);
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setClasses(event.target.value);
  };

  //console.log(props.pageData);

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
          <Typography variant="h6" fontWeight="bold">
            <Box sx={{ fontFamily: "Urbanist" }}>Edit Information</Box>
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
            <CustomTextField
              type="text"
              label="Full Name"    
              value={props.pageData.fullName}
              onChange={(event) => {
                props.setPageData({
                  ...props.pageData,
                  fullName: event.target.value,
                });
              }}
              required
              error={
                props.submitFlag &&
                props.getErrorMsz(
                  "student_section",
                  props.pageData.fullName
                ) !== ""
              }
              errorMsz={props.getErrorMsz(
                "student_section",
                props.pageData.fullName
              )}
              inputProps={{
                sx: {
                  color: "#838BA1",
                  fontFamily: "urbanist",
                  fontSize: "16px",
                  fontWeight: 600,
                },
              }}
              InputLabelProps={{  sx: {
                color: "rgba(131,145,161,1)",
                fontFamily: "urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }, }}
              sx={{  "& fieldset": { border: 'none' },}}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
            <FormControl fullWidth>
              <InputLabel
                sx={{
                  color: "rgba(131,145,161,1)",
                  fontFamily: "urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Gender
              </InputLabel>
              <Select
                label="Gender"
                selected={props.pageData?.gender}
                value={props.pageData?.gender}
                onChange={(event) => {
                  props.setPageData({
                    ...props.pageData,
                    gender: event.target.value,
                  });
                }}
                inputProps={{
                  sx: {
                    color: "rgba(131,145,161,1)",
                    fontFamily: "urbanist",
                    fontWeight: 600,
                    fontSize: "16px",
                  },
                }}
                input={<BootstrapInput />}
              >
                <MenuItem value={"FEMALE"}>Female</MenuItem>
                <MenuItem value={"MALE"}>Male</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
          <CustomTextField
            type="tel"
            label="Roll No."
            value={props.pageData.rollNumber}
            onChange={(event) => {
              props.setPageData({
                ...props.pageData,
                rollNumber: event.target.value,
              });
            }}
            required
            error={
              props.submitFlag &&
              props.getErrorMsz(
                "student_section",
                props.pageData.rollNumber
              ) !== ""
            }
            errorMsz={props.getErrorMsz(
              "student_section",
              props.pageData.rollNumber
            )}
            inputProps={{
              sx: {
                color: "#838BA1",
                fontFamily: "urbanist",
                fontSize: "16px",
                fontWeight: 600,
              },
            }}
            InputLabelProps={{  sx: {
              color: "rgba(131,145,161,1)",
              fontFamily: "urbanist",
              fontWeight: 600,
              fontSize: "16px",
            }, }}
            sx={{  "& fieldset": { border: 'none' },}}
          />
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={8} lg={7} mb={2}>
            <FormControl fullWidth>
              <InputLabel
                sx={{
                  color: "rgba(131,145,161,1)",
                  fontFamily: "urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Class
              </InputLabel>
              <Select
                label="Class"
                selected={props.pageData?.grade}
                value={props.pageData?.grade}
                onChange={(event) => {
                  props.setPageData({
                    ...props.pageData,
                    grade: event.target.value,
                  });
                }}
                inputProps={{
                  sx: {
                    color: "rgba(131,145,161,1)",
                    fontFamily: "urbanist",
                    fontWeight: 600,
                    fontSize: "16px",
                  },
                }}
                input={<BootstrapInput />}
              >
                {props.grades
                  ?.sort((a, b) => a.groupName.localeCompare(b.groupName))
                  .map((grade) => {
                    return (
                      <MenuItem value={grade.groupName} key={grade.groupName}>
                        {grade.groupName}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={5} mb={2}>
            <CustomTextField
              type="text"
              label="Section."
              value={props.pageData.section}
              onChange={(event) => {
                props.setPageData({
                  ...props.pageData,
                  section: event.target.value,
                });
              }}
              required
              error={
                props.submitFlag &&
                props.getErrorMsz("student_section", props.pageData.section) !==
                  ""
              }
              errorMsz={props.getErrorMsz(
                "student_section",
                props.pageData.section
              )}
              inputProps={{
                sx: {
                  color: "#838BA1",
                  fontFamily: "urbanist",
                  fontSize: "16px",
                  fontWeight: 600,
                },
              }}
              InputLabelProps={{  sx: {
                color: "rgba(131,145,161,1)",
                fontFamily: "urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }, }}
              sx={{  "& fieldset": { border: 'none' },}}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
          <CustomTextField
            label="Date of Birth"
            id="date"
            type="date"
            required
            value={props.pageData.dob}
            onChange={(event) => {
              props.setPageData({ ...props.pageData, dob: event.target.value });
            }}
            error={
              props.submitFlag &&
              props.getErrorMsz("dob", props.pageData.dob) !== ""
            }
            errorMsz={props.getErrorMsz("dob", props.pageData.dob)}
            inputProps={{
              sx: {
                color: "#838BA1",
                fontFamily: "urbanist",
                fontSize: "16px",
                fontWeight: 600,
              },
            }}
            InputLabelProps={{shrink:true,  sx: {
              color: "rgba(131,145,161,1)",
              fontFamily: "urbanist",
              fontWeight: 600,
              fontSize: "16px",
            }, }}
            sx={{  "& fieldset": { border: 'none' },}}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
          <CustomTextField
            type="email"
            label="Email Address (Optional)"
            value={props.pageData.email}
            required
            onChange={(event) => {
              props.setPageData({
                ...props.pageData,
                email: event.target.value,
              });
            }}
            error={
              props.submitFlag &&
              props.getErrorMsz("email", props.pageData.email) !== ""
            }
            errorMsz={props.getErrorMsz("email", props.pageData.email)}
            inputProps={{
              sx: {
                color: "#838BA1",
                fontFamily: "urbanist",
                fontSize: "16px",
                fontWeight: 600,
              },
            }}
            InputLabelProps={{  sx: {
              color: "rgba(131,145,161,1)",
              fontFamily: "urbanist",
              fontWeight: 600,
              fontSize: "16px",
            }, }}
            sx={{  "& fieldset": { border: 'none' },}}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
          <CustomTextField
            type="tel"
            label="School Area Postal Code"
            value={
              props.pinCode
                ? props.pinCode
                : props.pageData?.schoolCode?.substring(0, 6)
            }
            onChange={(event) => {
              props.setPageData({
                ...props.pageData,
                pinCode: event.target.value,
              });
              props.setPinCode(event.target.value);
            }}
            required
            error={
              props.submitFlag &&
              props.getErrorMsz("student_section", props.pageData.pinCode) !==
                ""
            }
            errorMsz={props.getErrorMsz(
              "student_section",
              props.pageData.pinCode
            )}
            inputProps={{
              sx: {
                color: "#838BA1",
                fontFamily: "urbanist",
                fontSize: "16px",
                fontWeight: 600,
              },
            }}
            InputLabelProps={{  sx: {
              color: "rgba(131,145,161,1)",
              fontFamily: "urbanist",
              fontWeight: 600,
              fontSize: "16px",
            }, }}
            sx={{  "& fieldset": { border: 'none' },}}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: "rgba(131,145,161,1)",
                fontFamily: "urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              School
            </InputLabel>
            <Select
              value={props.pageData.schoolId}
              onChange={(event) => {
                props.setPageData({
                  ...props.pageData,
                  schoolId: event.target.value,
                });
              }}
              inputProps={{
                sx: {
                  color: "rgba(131,145,161,1)",
                  fontFamily: "urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                },
              }}
              input={<BootstrapInput />}
            >
              {props.schoolsList?.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          mt={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <CustomButton
            btnText="Save"
            className="minWidth240"
            variant="contained"
            onClick={props.profileSubmit}
            style={{ marginRight: 10 }}
            sx={{ borderRadius: "50px" }}
          />
        </Grid>
      </Grid>
    </>
  );
};
