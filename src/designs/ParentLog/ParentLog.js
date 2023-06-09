import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AddCircle } from "@mui/icons-material";
import { useQuery } from "react-query";
import useSessionHelper from "../../hooks/useSession";
import { useStore } from "../../stores";
import { useSchool } from "../../hooks/useSchool";
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
    id: 5,
    name: "Tom Cruise",
    school: "Harvard School",
    class: "II",
    section: "E",
  },
];

export const ParentLog = (props) => {

  const [schoolName, setSchoolName] = useState("");

  // const currentUser = useStore((state) => state.currentUser);
	// const { getReportFilter } = useSessionHelper();
	// const { data: ReportFilter } = useQuery(
	// 	[`ReportData`],
	// 	() => getReportFilter({ userId: currentUser.id }),
	// 	{ enabled: true, retry: false }
	// );

  // console.log(currentUser);

	const { getSchoolById } = useSchool();
  useEffect(() => {
	  const response = getSchoolById("4bc089bd-4041-4146-8c1d-517d7551d394")
    .then((res) => { console.log(res.data?.data?.name); setSchoolName(res.data?.data?.name);})
	}, []);
  
	// const { data: SchoolData } = useQuery(
	// 	[`School`, ReportFilter?.data?.data[0]],
	// 	() => getSchoolById(ReportFilter?.data?.data[0].schoolId),
	// 	{ enabled: !!ReportFilter, retry: false }
	// );
  
  return (
    <AuthLayout responsiveStype={props.responsiveStype}>
      <Grid container sx={{marginTop:{lg:"0%",md:"0%",sm:"-60%",xs:"0%"}}}>
        <Grid
          item
          xs={12}
          sm={12}
          mt={1}
          md={12}
          lg={12}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <CustomButton
            onClick={props.logOutHandler}
            btnText="LOGOUT"
            variant="contained"
            sx={{
              color: "black",
              borderRadius: "20px",
              width: "70px",
              height: { xs: "34px", lg: "36px" },
              fontSize: { xs: "10px", lg: "12px" },
              backgroundColor: "#F9BB47",
              fontWeight: 600,
              marginBottom: 5,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
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
            My Children
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            disabled={false} //props.page === 1}
            onClick={props.handleClickPrev}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            disabled={false} //props.page === props.numPages}
            onClick={props.handleClickNext}
          >
            <ChevronRightIcon />
          </IconButton>
        </Grid>
        <Grid
          item
		  lg={12}
		  md={12}
		  sm={12}
		  xs={12}
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.children.map((child) => (
            <Box m={1} key={child.id}>
              <Box
                sx={{
                  padding:2,
                  backgroundColor: "#4545A5",
                  width: "195px",
                  height: "108px",
                  borderRadius: "8px",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)",
                  marginTop: "10%",
                  marginLeft: "-1%",
                  
                }}
              >
                <Box style={{display:"flex",  paddingTop:1,}}>
                <Stack direction="column" style={{width:"100%"}}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#FFFFFF",
                  
                    
                  }}
                >
                  {schoolName}   

                </Typography>
                <Box style={{display:"flex",marginTop:10}}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "8px",
                    lineHeight: "10px",
                    color: "#FFFFFF",
                  }}
                >
                  {child.grade}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "8px",
                    lineHeight: "10px",
                    color: "#FFFFFF",
                   
                  }}
                >
                 -{child.section}
                </Typography>
                
                </Box>
                </Stack>
                <Box style={{marginRight:"",alignItems:"center",justifyContent:"center" }}>
                <Avatar variant="rounded" src={child.profilePicture} />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "8px",
                      lineHeight: "10px",
                      color: "#FFFFFF",
                      
                    }}
                  >
                    {child.fullName}
                  </Typography>
                </Box>
                </Box>
                <Box
                  sx={{
                    borderRadius: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    marginTop:"-6%"
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "8px",
                      color: "#FFFFFF",
                      marginBottom:"-5%",
                      marginRight:2
                    }}
                  >
                    Enter
                  </Typography>
                  <Button
                    sx={{ }}
                    onClick={() => {
                      props.onHandleClickNavigate(child);
                    }}
                  >
                    <img src="./images/Arrow5.png" alt="arrow" />
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          mt={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "97px",
              height: "45px",
              color: "#FFFFFF",
              backgroundColor: "#F9BB47",
              boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
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
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
