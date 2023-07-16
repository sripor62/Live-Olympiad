import { Grid, Typography, Box, List } from "@mui/material";
import { CustomListItem } from "../../components/CustomListItem";
import { SubjectSelector } from "../Onboarding/SubjectSelector";
import { useState } from "react";

export const DashboardLayout = (props) => {
  const [click, setClick] = useState(false);
  const [math, setMath] = useState(false);
  const [english, setEnglish] = useState(false);
  console.log(props.data);
  return (
    <Grid container mt={1}>
      <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
        <Typography variant="h6">{props.seriesName}</Typography>
        <Grid item xs={12}>
          <Box
            fontWeight={600}
            sx={{ fontSize: { xs: "12px", lg: "14px" }, color: "#838BA1" }}
          >
            <Box mb={3}>
              Clicking on these buttons will take you to {props.seriesName} test
            </Box>
          </Box>
        </Grid>
        <Grid container mb={5} alignItems="center">
          <Grid item xs={12} md={12} lg={8}>
            <SubjectSelector setPage={props.setPage} text={props.seriesName} />
          </Grid>
        </Grid>
        {props.seriesName === "Screening" &&
          props.page === 1 &&
          props?.testsLists
            ?.filter((item) => {
              return item.packageName.search("Technology") !== -1;
            })
            .map((option) => {
              return (
                <CustomListItem
                  testSend={props.testSend}
                  option={option}
                  key={option._id}
                  testScreen={props.testScreen}
                  seriesName={props.seriesName}
                />
              );
            })}

        {props.seriesName === "Practice" &&
          props.page === 1 &&
          props?.testsLists
            ?.filter((item) => {
              return item.packageName.search("Science") !== -1;
            })
            .map((option) => {
              return (
                <Box>
                  {click && (
                    <CustomListItem
                      testSend={props.testSend}
                      option={option}
                      key={option._id}
                      testScreen={props.testScreen}
                      seriesName={props.seriesName}
                    />
                  )}
                  {props?.data?.map((domain, i) => {
                    return (
                      <Box>
                        <CustomListItem
                          testSend={props.testSend}
                          option={domain}
                          key={i}
                          testScreen={props.testScreen}
                          seriesName={props.seriesName}
                        />
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
        {props.seriesName === "Practice" &&
          props.page === 2 &&
          props?.testsLists
            ?.filter((item) => {
              return item.packageName.search("Math") !== -1;
            })
            .map((option) => {
              return (
                <Box>
                  {math && (
                    <CustomListItem
                      testSend={props.testSend}
                      option={option}
                      key={option._id}
                      testScreen={props.testScreen}
                      seriesName={props.seriesName}
                    />
                  )}
                  {props?.data?.map((domain, i) => {
                    return (
                      <Box>
                      <CustomListItem
                        testSend={props.testSend}
                        option={domain}
                        key={i}
                        testScreen={props.testScreen}
                        seriesName={props.seriesName}
                      />
                    </Box>
                    );
                  })}
                </Box>
              );
            })}
        {props.seriesName === "Practice" &&
          props.page === 3 &&
          props?.testsLists
            ?.filter((item) => {
              return item.packageName.search("English") !== -1;
            })
            .map((option) => {
              return (
                <Box>
                  {english && (
                    <CustomListItem
                      testSend={props.testSend}
                      option={option}
                      key={option._id}
                      testScreen={props.testScreen}
                      seriesName={props.seriesName}
                    />
                  )}
                  {props?.data?.map((domain, i) => {
                    return (
                      <Box>
                      <CustomListItem
                        testSend={props.testSend}
                        option={domain}
                        key={i}
                        testScreen={props.testScreen}
                        seriesName={props.seriesName}
                      />
                    </Box>
                    );
                  })}
                </Box>
              );
            })}
      </Grid>
    </Grid>
  );
};
