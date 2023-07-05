import {  Grid, Typography } from "@mui/material";
import { CustomListItem } from "../../components/CustomListItem";
import { SubjectSelector } from "../Onboarding/SubjectSelector";
import { useState, useEffect } from "react";
import React from "react";



let numericalGrade = 0;

export const BookletLayout = (props) => {
  const [grade, setGrade] = useState("");

  // Extract the numerical part from the grade string
  useEffect(() => {
    let stud = JSON.parse(sessionStorage.getItem("current_student"));

    if (stud && stud["grade"]) setGrade(stud["grade"]);

    console.log(`grade: ${grade}`);

    if (grade) {
      const numericalPart = grade.match(/\d+/);
      if (numericalPart) {
        numericalGrade = parseInt(numericalPart[0], 10);
        console.log("Numerical Grade:", numericalGrade);
      } else {
        console.log("Numerical Grade not found");
      }
    } else {
      console.log("Student Grade not found");
    }
  }, [grade]);

  return (
    <Grid container mt={1}>
      <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
        <Typography variant="h6">Click on one of the subjects to view its booklet</Typography>
        <Grid container mb={5} alignItems="center">
          <Grid item xs={12} md={12} lg={8}>
            <SubjectSelector setPage={props.setPage} text={props.seriesName}/>
          </Grid>
          <Grid item xs={12} md={12} lg={4}></Grid>
        </Grid>
        {props.page === 0 &&
          props?.testsLists?.map((option) => {
            return (
              <CustomListItem
                testSend={props.testSend}
                option={option}
                key={option._id}
                testScreen={props.testScreen}
              />
            );
          })}

        {props.page === 2 && (
          window.location.replace(props.links.get(`math${numericalGrade}`))
        )}

        {props.page === 1 && (
          window.location.replace(props.links.get(`science${numericalGrade}`))
        )}

        {props.page === 3 && (
          window.location.replace(props.links.get(`eng${numericalGrade}`))
        )}
      </Grid>
    </Grid>
  );
};
