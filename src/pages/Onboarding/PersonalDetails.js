import React, { useState, useEffect } from "react";
import { afterValidate } from "../../services/commonService";
import { getErrorMsz } from "../../services/validator";
import { responsiveStype } from "../../beautifiers/responsive";
import { OnboardingLayout } from "../../designs/Onboarding/OnboardingLayout";
import { PersonalDetailLayout } from "../../designs/Onboarding/PersonalDetailLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { useStudent } from "../../hooks/useStudent";
import { useStore } from "../../stores";
import { isValidEmail } from "../../designs/Onboarding/PersonalDetailLayout";

export default function PersonalDetails() {
	const setCurrentUser = useStore((state) => state.setCurrentUser);
	const currentUser = useStore((state) => state.currentUser);
	const [snakeBarProps, setSnakeBarProps] = useState({});
	const [submitFlag, setsubmitFlag] = useState(false);
	  
	const [pageData, setPageData] = useState({
		fullName: "",
		email: "",
		rollNumber: "",
		profilePicture: "",
		dob: "",
		gender: "",
	});
	const navigate = useNavigate();
	const params = useParams();
	var userId = params.userId;
	const grade = params.grade;
	const { getPersonalData, sendPersonalData } = useStudent();
	const {
		data: personalData,
		isLoading: contentLoader,
		refetch,
	} = useQuery([`PersonalData`], () => getPersonalData(userId), {
		enabled: !!currentUser?.id,
		retry: false,
	});
	useEffect(() => {
		if (personalData) {
			if (
				personalData?.data.data.fullName &&
				personalData?.data.data.gender &&
				personalData?.data.data.dob &&
				personalData?.data.data.rollNumber &&
				personalData?.data.data.profilePicture
			) {
				setCurrentUser({
					...currentUser,
					fullName: personalData?.data?.data?.fullName,
				});
				navigate("/dashboard");
			}
			var pdata = {
				...personalData?.data.data,
			};
			setPageData({ ...pageData, ...pdata });
		}
	}, [personalData]);

	const submitHandler = async (file) => {
		// Generate a temporary URL for the uploaded image
		const imageURL = URL.createObjectURL(file);

		setPageData({ profilePicture: imageURL });

		var pdata = {
			...pageData,
			fullName: pageData.fullName,
			email: pageData.email,
			rollNumber: pageData.rollNumber,
			dob: pageData.dob,
			gender: pageData.gender,
		};
		//console.log(pdata);
		if(!pdata.fullName) {
			setSnakeBarProps({ snackbarFlag: true, msz: "Name field cannot be empty", type: "error" });
		}
		else if(!pdata.rollNumber) {
			setSnakeBarProps({ snackbarFlag: true, msz: "Roll number field cannot be empty", type: "error" });
		}
		else if(pdata.email!="" && !isValidEmail(pdata.email)) {
			setSnakeBarProps({ snackbarFlag: true, msz: "Invalid Email Address", type: "error" });
		}
		else if (
			pdata.fullName && pdata.rollNumber
		) {
			var userInfoVal = window.localStorage.getItem("current_user");
			var userInfo = JSON.parse(userInfoVal).state.currentUser;
			setCurrentUser({ ...userInfo, fullName: pdata.fullName });

			window.localStorage.setItem("Name", pdata.fullName);
			PersonalMutate(pdata);
			navigate("/chooseyourplan/");
		}
	};
	const { mutate: PersonalMutate, isLoading: PersonalInfoLoading } =
		useMutation(sendPersonalData);

	const afterValidateCallBack = (second) => {
		setSnakeBarProps({ snackbarFlag: true, msz: "dasdasd", type: "success" });
	};

	return (
		<OnboardingLayout>
			<PersonalDetailLayout
				responsiveStype={responsiveStype}
				pageData={pageData}
				setPageData={setPageData}
				submitFlag={submitFlag}
				getErrorMsz={getErrorMsz}
				snakeBarProps={snakeBarProps}
				setSnakeBarProps={setSnakeBarProps}
				submitHandler={submitHandler}
			/>
		</OnboardingLayout>
	);
}
