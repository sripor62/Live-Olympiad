import React, { useEffect } from "react";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { useState } from "react";
import { BookletLayout } from "../../designs/Dashboard/BookletLayout";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import { useStore } from "../../stores";
import { useSchool } from "../../hooks/useSchool";

let links = new Map([
  ["eng1", "https://drive.google.com/file/d/1WIImmdwSxCcY2dDnZi8HigKN3dwj3n-F/view?usp=sharing"],
  ["eng2", "https://drive.google.com/file/d/1YIgliF2uURSB0mBerRUskLcFYXESpPdL/view?usp=sharing"],
  ["eng3", "https://drive.google.com/file/d/1LN2yAWFvx9al1eDi9kdT0SZTv304XgCI/view?usp=sharing"],
  ["eng4", "https://drive.google.com/file/d/1LN2yAWFvx9al1eDi9kdT0SZTv304XgCI/view?usp=sharing"],
  ["math1", "https://drive.google.com/file/d/1BVDwx_gaiSmBh-w7-Zf5hms6Df_8kuLt/view?usp=sharing"],
  ["math2", "https://drive.google.com/file/d/1h2pg8zruG8ROSjBhG49V7DRxNW6N8aMx/view?usp=sharing"],
  ["math3", "https://drive.google.com/file/d/1AA9IapDIFi1vyoYVI-984hF_PnNhWtuH/view?usp=sharing"],
  ["math4", "https://drive.google.com/file/d/17vTd7nEFzk6F2g9v6KrM2YGmfd2S7N9Q/view?usp=sharing"],
  ["math5", "https://drive.google.com/file/d/1iYSkrDbVylKckLFDoAxmwVlj-kcFoiHQ/view?usp=sharing"],
  ["math6", "https://drive.google.com/file/d/1vw8DyaOOmX5X4Sh0J1YKaou_t9HlG4EH/view?usp=sharing"],
  ["math7", "https://drive.google.com/file/d/1GzxBVdVAaMBKh4tEpDtPb8CJcGtbEF24/view?usp=sharing"],
  ["math8", "https://drive.google.com/file/d/1Qkx4zLBnvuhBjDOld5SUECw8QXM0HBeQ/view?usp=sharing"],
  ["math9", "https://drive.google.com/file/d/1OH3Z2aLbLC9mFpZQeBb04kIF4ru0LkhK/view?usp=sharing"],
  ["math10", "https://drive.google.com/file/d/1pXPvX6tHO_hSBr8xxnUacPsVwa23V0tQ/view?usp=sharing"],
  ["science1", "https://drive.google.com/file/d/1IqsJ3ShhP39_gXo516YR88CMHv0bZ2SB/view?usp=sharing"],
  ["science2", "https://drive.google.com/file/d/1ufmFpDtlxB4a9bFtb_570mP2PHf28gV8/view?usp=sharing"],
  ["science3", "https://drive.google.com/file/d/1z8IzL-2uDUhv8d6mjE1bP4MH6GxJpF22/view?usp=sharing"],
  ["science4", "https://drive.google.com/file/d/1mfmTKpLd-9lJykx-kxMBI-58S0Fl_Wg7/view?usp=sharing"],
  ["science5", "https://drive.google.com/file/d/1zfWLRY7uyNg4f9K-5BOce5-0O6DBNZcp/view?usp=sharing"],
  ["science6", "https://drive.google.com/file/d/1qo9uNdKlZYxWB_2-IK8lKJzzGI38Mu7S/view?usp=sharing"],
  ["science7", "https://drive.google.com/file/d/1xiXlV9Dt_7VOC4e23RjPVSe9SZD_gAzl/view?usp=sharing"],
  ["science8", "https://drive.google.com/file/d/1x3G9TKxBsga6hEw5p7iFUCYOJFVBnUM2/view?usp=sharing"],
  ["science9", "https://drive.google.com/file/d/1x_SQPxPVpuifCElna_zR7kuO8wJiaP6k/view?usp=sharing"],
  ["science10", "https://drive.google.com/file/d/1_zoq4XO5B0RuLpEfJAu5rW-xdM8ySI8Y/view?usp=sharing"]
]);





const Booklet = () => {
  let curentUser = useStore((state) => state.currentUser);
  const student = JSON.parse(sessionStorage.getItem("current_student"));
  useEffect(() => {
    navigateAsPerSessionValidity(true);
  });
  

  
  const [page, setPage] = useState(0);

  
  let schoolId = student.schoolId;
  const [schoolType, setSchoolType] = useState();
  const {getSchoolById} = useSchool();
  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await getSchoolById(schoolId);
        setSchoolType(response.data.data.type);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
    };

    fetchSchool();
  }, [schoolId]);
  let seriesName = (schoolType === "Tech") ? "Screening" : "Practice";

 

  const clearCurrentUser = useStore((state) => state.clearCurrentUser);
  const currentUser = useStore((state) => state.currentUser);

  

  

  return (
    <HomeLayout logOutHandler={clearCurrentUser} seriesName={seriesName}>
      <BookletLayout
        setPage={setPage}
        page={page}
        seriesName={seriesName}
        links={links}
      />
    </HomeLayout>
  );
};
export default Booklet;