import {
	Avatar,
	Box,
	Button,
	Grid,
	IconButton,
	Typography,
  } from "@mui/material";
  import { responsiveStype } from "../beautifiers/responsive";
  import { AuthLayout } from "../designs/Auth/AuthLayout";
  import { AddCircle } from "@mui/icons-material";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { CustomButton } from "../components/CustomButton";
  
  import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
  import ChevronRightIcon from "@mui/icons-material/ChevronRight";
  import { useStore } from "../stores";
  import { useStudent } from "../hooks/useStudent";
  import { useQuery } from "react-query";
  import { useSchool } from "../hooks/useSchool";
  import { ParentLog } from "../designs/ParentLog/ParentLog";
  
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
	}
  ];
  
  const ParentView = ({ logOutHandler }) => {
	const navigate = useNavigate();
	const currentUser = useStore((state) => state.currentUser);
	const clearCurrentUser = useStore((state) => state.clearCurrentUser);
	const [children, setChildren] = useState([]);
	const { getStudentsOfUser, profileDataDetails } = useStudent();
	const { getSchools } = useSchool();
	const [page, setPage] = useState(1);
	const PAGE_SIZE = 2;
	const startIndex = (page - 1) * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;
	
  
	const { data: students } = useQuery(
	  [`students`, currentUser],
	  () => getStudentsOfUser(currentUser?.id),
	  { enabled: !!currentUser?.id, retry: false }
	);

	const numPages = Math.ceil(students?.data?.data?.length / PAGE_SIZE);
  
	const handleClickPrev = () => {
	  setPage((prevIndex) => Math.max(prevIndex - 1, 1));
	};
  
	const handleClickNext = () => {
	  setPage((prevIndex) => Math.min(prevIndex + 1, numPages));
	};
  
	useEffect(() => {
	  if (students?.data?.data) {
		setChildren(students?.data?.data?.slice(startIndex, endIndex));
	  }
	}, [students, startIndex, endIndex]);
  
	const onHandleClickCreate = async () => {
	  let res = await profileDataDetails({
		userId: currentUser?.id,
	  });
	  if (res?.data?.success) {
		navigate("/schooldetails/" + res?.data?.data?._id);
	  }
	};
  
	const onHandleClickNavigate = async (child) => {
	  sessionStorage.setItem("current_student", JSON.stringify(child));
	  navigate("/dashboard");
	};
  
	return (
	  <ParentLog
		handleClickNext={handleClickNext}
		handleClickPrev={handleClickPrev}
		responsiveStyle={responsiveStype}
		logOutHandler={clearCurrentUser}
		page={page}
		setPage={setPage}
		numPages={numPages}
		schoolsData={childrenData}
		onHandleClickNavigate={onHandleClickNavigate}
		onHandleClickCreate={onHandleClickCreate}
		children={children}
	  />
	);
  };
  
  export default ParentView;
  