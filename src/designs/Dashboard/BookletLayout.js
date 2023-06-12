import { Button, Grid, Typography } from "@mui/material";
import { CustomListItem } from "../../components/CustomListItem";
import { FilterByStatus } from "../../components/FilterByStatus";
import { Card5 } from "../cards/card5";
import { SubjectSelector } from "../Onboarding/SubjectSelector";
import Card from "./cards";
import { useNavigate } from "react-router-dom";
import { UpgradeBox } from "./UpgradeBox";
import { KnowledgeTree } from "./KnowledgeTreeBox";
import { useState, useEffect } from "react";
import React from "react";
import { useStudent } from "../../hooks/useStudent";

let links = new Map([
  ["eng1", "https://publuu.com/flip-book/159959/400586"],
  ["eng2", "https://publuu.com/flip-book/159959/400592"],
]);

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
      {/* <Grid item p={2} xs={12} sm={12} md={16} lg={12}>
				<Typography variant="h6">
					Olympiads
					<Button
						sx={{ backgroundColor: "beige", color: "black", marginLeft: "80%" }}
						onClick={() => {
							navigate("/Report");
						}}
					>
						Details Reports
					</Button>
					<Card />
				</Typography>
			</Grid> */}
      <Grid item p={2} xs={12} sm={12} md={8} lg={7}>
        <Typography variant="h6">Booklets</Typography>
        <Grid container mb={5} alignItems="center">
          <Grid item xs={12} md={12} lg={8}>
            <SubjectSelector setPage={props.setPage} />
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
        {props.page === 1 &&
          props?.testsLists
            ?.filter((item) => {
              return item.subject[0].search("Science") !== -1;
            })
            .map((option) => {
              return (
                <CustomListItem
                  testSend={props.testSend}
                  option={option}
                  key={option._id}
                  testScreen={props.testScreen}
                />
              );
            })}
        {props.page === 2 &&
          props?.testsLists
            ?.filter((item) => {
              return item.subject[0].search("Math") !== -1;
            })
            .map((option) => {
              return (
                <CustomListItem
                  testSend={props.testSend}
                  option={option}
                  key={option._id}
                  testScreen={props.testScreen}
                />
              );
            })}
        {props.page === 3 &&
          props?.testsLists
            ?.filter((item) => {
              return item.subject[0].search("English") !== -1;
            })
            .map((option) => {
              return (
                <CustomListItem
                  testSend={props.testSend}
                  option={option}
                  key={option._id}
                  testScreen={props.testScreen}
                />
              );
            })}
        {props.page === 4 &&
          props?.testsLists
            ?.filter((item) => {
              return item.testStatus === true;
            })
            .map((option) => {
              return (
                <CustomListItem
                  testSend={props.testSend}
                  option={option}
                  key={option._id}
                  testScreen={props.testScreen}
                />
              );
            })}
        {props.page === 5 &&
          props?.testsLists
            ?.filter((item) => {
              return item.testStatus === false;
            })
            .map((option) => {
              return (
                <CustomListItem
                  testSend={props.testSend}
                  option={option}
                  key={option._id}
                  testScreen={props.testScreen}
                />
              );
            })}
        {props.page === 6 &&
          props?.testsLists
            ?.filter((item) => {
              return item.testStatus === null || item.testStatus === undefined;
            })
            .map((option) => {
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
          window.location.replace(links.get(`math${numericalGrade}`))
        )}

        {props.page === 1 && (
          window.location.replace(links.get(`science${numericalGrade}`))
        )}

        {props.page === 3 && (
          window.location.replace(links.get(`eng${numericalGrade}`))
        )}
      </Grid>
      {/* <Grid
				item
				p={2}
				md={4}
				lg={5}
				sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
			>
				<UpgradeBox />
            <KnowledgeTree />
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Card5 />
				</Grid>
			</Grid> */}
    </Grid>
  );
};
