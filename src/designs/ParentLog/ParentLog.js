import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AddCircle } from "@mui/icons-material";
import { useSchool } from "../../hooks/useSchool";
import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Stack,
  Link
} from "@mui/material";
import { CustomButton } from "../../components/CustomButton";
import { AuthLayout } from "../Auth/AuthLayout";
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

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
  const [schoolNames, setSchoolNames] = useState([]);
  const { getSchoolById } = useSchool();

  useEffect(() => {
    const fetchSchoolNames = async () => {
      const names = await Promise.all(
        props.children.map(async (child) => {
          try {
            const response = await getSchoolById(child.schoolId);
            const schoolData = response.data?.data;
            if (schoolData) {
              return schoolData.name;
            }
          } catch (error) {
            console.error("Failed to fetch school data:", error);
          }
          return "";
        })
      );
      setSchoolNames(names);
    };

    fetchSchoolNames();
  }, [props.children]);

  const renderChildren = () => {
    return props.children.map((child, index) => {
      const schoolName = schoolNames[index];

      return (
        <Box m={1} key={child.id}>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "#4545A5",
              width: "195px",
              height: "108px",
              borderRadius: "8px",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.25)",
              marginTop: "10%",
              marginLeft: "-1%",
            }}
          >
            <Box style={{ display: "flex", paddingTop: 1 }}>
              <Stack direction="column" style={{ width: "100%" }}>
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
                <Box style={{ display: "flex", marginTop: 10 }}>
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
              <Box
                style={{
                  marginRight: "",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
                marginTop: "-6%",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "8px",
                  color: "#FFFFFF",
                  marginBottom: "-5%",
                  marginRight: 2,
                }}
              >
                Enter
              </Typography>
              <Button
                sx={{}}
                onClick={() => {
                  props.onHandleClickNavigate(child);
                }}
              >
                <img src="./images/Arrow5.png" alt="arrow" />
              </Button>
            </Box>
          </Box>
        </Box>
      );
    });
  };

  return (
    <AuthLayout responsiveStype={props.responsiveStype}>
      <Grid
        container
        sx={{ marginTop: { lg: "0%", md: "0%", sm: "-60%", xs: "0%" } }}
      >
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
              ":hover": { color: "white" },
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
          {renderChildren()}
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

           <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: "11px",
                  color: "#060606",
                  marginBottom: "2%",
                }}
              >
                Available on Play Store:
              </Typography>
              <Link
                href="https://play.google.com/store/apps/details?id=com.liveolympiad.liveolympiadapp"
                target="_blank"
              >
                {/* <img
                  //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9Gx8q2uvHLD9Jr_OzwUBvlDfjcBBFFv29DO2ZbPR2WXA9Wa0CEo_MIhGHlYwVUO_NhU&usqp=CAU"
                  src={<ShopIcon />}
                  alt="Download"
                  style={{ cursor: "pointer" }}
                /> */}
                <ShopIcon />
              </Link>
            </Box>
          </Grid>

          
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "15px",
                  lineHeight: "11px",
                  color: "#060606",
                  marginBottom: "2%",
                }}
              >
                Available soon on Apple Store:
              </Typography>
              <Link
                //href=""
                //target="_blank"
              >
                {/* <img
                  //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9Gx8q2uvHLD9Jr_OzwUBvlDfjcBBFFv29DO2ZbPR2WXA9Wa0CEo_MIhGHlYwVUO_NhU&usqp=CAU"
                  src={AppleIcon}
                  alt="Download"
                  style={{ cursor: "pointer" }}
                /> */}
                <AppleIcon />
              </Link>
            </Box>
          </Grid>

      </Grid>
    </AuthLayout>
  );
};
