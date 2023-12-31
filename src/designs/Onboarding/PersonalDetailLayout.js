import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { CustomButton } from "../../components/CustomButton";
import { CustomSnackbar } from "../../components/CustomSnackbar";
import { CustomTextField } from "../../components/CustomTextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { IconButton } from "@mui/material";

export const isValidEmail = (email) => {
  const validEmailRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  return validEmailRegex.test(email);
};



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

export const PersonalDetailLayout = (props) => {
  const [gender, setGender] = React.useState("");
  // const [profilePicture, setProfilePicture] = React.useState(null);
  // const [isProfilePictureUpdated, setProfilePictureUpdated] = React.useState(false);


  // const handleImageChange = (event) => {
  //   const file = event.target.file;
  //   setProfilePicture(file);
  //   //setProfilePictureUpdated(true);
  //   };

  const handleChange = (event) => {
    setGender(event.target.value);
  };


  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Trigger the submitHandler function and pass the selected file
  //   props.submitHandler(profilePicture);
  // };

  return (
    <>
      <Grid container xs={10}>
        <Grid xs={12}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "32px", lg: "40px" } }}
          >
            <Box
              mb={3}
              mt={5}
              fontWeight="bold"
              sx={props.responsiveStype.Personal.Typo}
            >
              Personal Details
            </Box>
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="body2"
            fontFamily="urbanist"
            fontWeight="medium"
            sx={{
              color: "rgba(131,139,161,1)",
              fontSize: { xs: "12px", lg: "14px" },
            }}
          >
            <Box mb={3} sx={props.responsiveStype.Personal.Typo}>
              Enter the personal details of the student.{" "}
            </Box>
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box mb={3} width={1}>
              <CustomTextField
                onKeyPress={(event) => {
                  if (event.code == "Enter") {
                    document.getElementById("clicked").click();
                  }
                }}
                type="text"
                label="Full Name"
                value={props.pageData.fullName}
                onChange={(event) => {
                  props.setPageData({
                    ...props.pageData,
                    fullName: event.target.value,
                  });
                }}
                required={true}
                error={
                  props.submitFlag &&
                  props.getErrorMsz("fullname", props.pageData.fullName) !== ""
                }
                //helperText={props.getErrorMsz('fullname', props.pageData.fullName)}
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
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box mb={3} width={1}>
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
                  input={<BootstrapInput />}
                  inputProps={{
                    sx: {
                      color: "rgba(131,145,161,1)",
                      fontFamily: "urbanist",
                      fontWeight: 600,
                      fontSize: "16px",
                    },
                  }}
                >
                  <MenuItem value={"FEMALE"}>Female</MenuItem>
                  <MenuItem value={"MALE"}>Male</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box mb={3} width={1}>
            <CustomTextField
              inputLabel={true}
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
          </Box>
        </Grid>

        {/* <Grid item xs={12}>
  <Box mb={3} width={1} display="flex" alignItems="center">
  <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload Profile Picture</button>
    </form>
    <Typography
      variant="body2"
      fontFamily="urbanist"
      fontWeight="medium"
      sx={{
        color: "rgba(131,139,161,1)",
        fontSize: { xs: "12px", lg: "14px" },
      }}
    >
    </Typography>
  </Box>
</Grid> */}


        <Grid item xs={12}>
          <Box mb={3} width={1}>
            <CustomTextField
              onKeyPress={(event) => {
                if (event.code == "Enter") {
                  document.getElementById("clicked").click();
                }
              }}
              label="Date of Birth"
              id="date"
              type="date"
              required
              onChange={(event) => {
                props.setPageData({
                  ...props.pageData,
                  dob: event.target.value,
                });
              }}
              error={
                props.submitFlag &&
                props.getErrorMsz("dob", props.pageData.dob) != ""
              }
              errorMsz={props.getErrorMsz("dob", props.pageData.dob)}
              inputProps={{
                sx: {
                  color: "rgba(131,145,161,1)",
                  fontFamily: "urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
                },
              }}
              InputLabelProps={{ shrink:true, sx: {
                color: "rgba(131,145,161,1)",
                fontFamily: "urbanist",
                fontWeight: 600,
                fontSize: "16px",
              }, }}
              sx={{  "& fieldset": { border: 'none' },}}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={3} width={1}>
            <CustomTextField
              onKeyPress={(event) => {
                if (event.code === "Enter") {
                  document.getElementById("clicked").click();
                }
              }}
              type="email"
              label="Email Address (Optional)"
              required={false}
              value={props.pageData.email}
              onChange={(event) => {
                props.setPageData({
                  ...props.pageData,
                  email: event.target.value,
                });
              }}
              error={
                props.pageData.email !== "" &&
                !isValidEmail(props.pageData.email)
              }
              errorMsz={props.getErrorMsz("email", props.pageData.email)}
              inputProps={{
                sx: {
                  color: "rgba(131,145,161,1)",
                  fontFamily: "urbanist",
                  fontWeight: 600,
                  fontSize: "16px",
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
          </Box>
        </Grid>
        <Grid
          xs={12}
          sx={{
            justifyContent: { xs: "center", lg: "left" },
            alignItems: { xs: "center", lg: "left" },
            display: "flex",
          }}
        >
          <CustomButton
            id="clicked"
            btnText="Next"
            color="primary"
            variant="contained"
            className="minWidth240"
            onClick={props.submitHandler}
            sx={{ borderRadius: "50px" }}
          />
        </Grid>
      </Grid>
      {Object.keys(props.snakeBarProps).length > 0 && (
        <CustomSnackbar
          {...props.snakeBarProps}
          setSnakeBarProps={props.setSnakeBarProps}
        />
      )}
    </>
  );
};
