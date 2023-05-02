import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AddCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { CustomButton } from "../../components/CustomButton";
import { AuthLayout } from "../Auth/AuthLayout";

const childrenData = [
  {
    id: 1,
    name: "Aneysha Das",
    school: "Cambridge School",
    class: "V",
    section: "B",
  },
  {
    id: 2,
    name: "John Doe",
    school: "St. Mary's School",
    class: "VI",
    section: "A",
  },
  { id: 3, name: "James", school: "Oxford", class: "IV", section: "C" },
  {
    id: 4,
    name: "Tom Brown",
    school: "Harvard School",
    class: "III",
    section: "D",
  },
  {
    id: 4,
    name: "Tom Cruise",
    school: "Harvard School",
    class: "II",
    section: "E",
  },
];

export const ParentLog = (props) => {
  return (
    <AuthLayout responsiveStype={props.responsiveStype}>
      <Box sx={{ display: "flex", ml: 3, mt: 1 }}>
        <CustomButton
          onClick={props.logOutHandler}
          btnText="LOGOUT"
          variant="contained"
          sx={{
            color: "black",
            borderRadius: "20px",
            width: "70px",
            height: { xs: "34px", lg: "36px" },
            fontSize: { xs: "8px", lg: "12px" },
            backgroundColor: "#F9BB47",
            fontWeight: 600,
            marginLeft: { xs: "80%", sm: "80%" },
            marginTop: { xs: "-30%", sm: "-50%" },
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: { sm: "-10%" },
          marginLeft: { xs: "28%", sm: "-18%" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "urbanist",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "22px",
            lineHeight: "26px",
            color: "#060606",
          }}
        >
          My Childrens
        </Typography>
      </Box>
      <Box sx={{ top: 0, marginLeft: { xs: "35%", sm: "45%", lg: "65%" } }}>
        <IconButton disabled={props.page === 1} onClick={props.handleClickPrev}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          disabled={props.page === props.numPages}
          onClick={props.handleClickNext}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: "2%",
          marginLeft: { xs: "25%", sm: "-10%" },
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Stack direction="row" spacing={2}>
          {props.children.map((child) => (
            <Grid container>
              <Grid item lg={12} key={child.id}>
                <Box
                  sx={{
                    backgroundColor: "#4545A5",
                    width: "195px",
                    height: "108px",
                    borderRadius: "8px",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)",
                    marginTop: "10%",
                    marginLeft: "-18%",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#FFFFFF",
                      marginLeft: "5%",
                      marginTop: "8%",
                    }}
                  >
                    {props.schoolsData?.data?.data &&
                      props.schoolsData?.data?.data.filter(
                        (school) => school._id == child.schoolId
                      )[0]?.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "8px",
                      lineHeight: "10px",
                      color: "#FFFFFF",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  >
                    class: {child.grade}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "8px",
                      lineHeight: "10px",
                      color: "#FFFFFF",
                      marginLeft: "5%",
                      marginTop: "5%",
                    }}
                  >
                    Section: {child.section}
                  </Typography>
                  <Box
                    sx={{
                      width: "90px",
                      height: "50px",
                      borderRadius: "8px",
                      marginTop: "-28%",
                      marginLeft: "55%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar variant="rounded" sx={{marginTop:2}}></Avatar>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "8px",
                        lineHeight: "10px",
                        color: "#FFFFFF",
                        marginTop: "2%",
                      }}
                    >
                      Name: {child.fullName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "90px",
                      height: "50px",
                      borderRadius: "8px",
                      marginTop: "0%",
                      marginLeft: "25%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "8px",
                        lineHeight: "10px",
                        color: "#FFFFFF",
                        marginRight: "25%",
                        marginTop:2
                      }}
                    >
                      Enter
                    </Typography>
                    <Button
                    sx={{marginTop:"-13%"}}
                      onClick={() => {
                        props.onHandleClickNavigate(child);
                      }}
                    >
                      <img src="./images/Arrow5.png" alt="arrow" />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Grid>

      <Box
        sx={{
          width: "97px",
          height: "45px",
          color: "#FFFFFF",
          backgroundColor: "#F9BB47",
          boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          marginTop: "10%",
          marginLeft: { xs: "33%", sm: "6%", lg: "57%" },
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
        onClick={() => {
          props.onHandleClickCreate();
        }}
      >
        <AddCircle />
        <Typography
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "9px",
            lineHeight: "11px",
            color: "#FFFFFF",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          Add Children
        </Typography>
      </Box>
    </AuthLayout>
  );
};
