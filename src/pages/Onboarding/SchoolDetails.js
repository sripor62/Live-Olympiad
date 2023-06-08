import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { afterValidate } from "../../services/commonService";
import { getErrorMsz } from "../../services/validator";
import { OnboardingLayout } from "../../designs/Onboarding/OnboardingLayout";
import { responsiveStype } from "../../beautifiers/responsive";
import { SchoolDetailLayout } from "../../designs/Onboarding/SchoolDetailLayout";
import { useQuery, useMutation } from "react-query";
import { useStudent } from "../../hooks/useStudent";
import { useSchool } from "../../hooks/useSchool";
import { useStore } from "../../stores";
const SchoolDetails = () => {
	const navigate = useNavigate();
	const params = useParams();
	const userId = params.userId;
	const [snakeBarProps, setSnakeBarProps] = useState({});
	const currentUser = useStore((state) => state.currentUser);
	const [submitFlag, setsubmitFlag] = useState(false);
	const [pinCode, setPinCode] = useState("");
	const [schoolsList, setSchoolsList] = useState([]);
	const [pageData, setPageData] = useState({
		schoolId: "",
		section: "",
		grade: "",
	});
	const { getSchool, getSchools, getGrades } = useSchool();
	const { getEducation, sendEducation } = useStudent();
	const submitHandler = () => {
		var pdata = {
			...pageData,
			schoolId: pageData?.schoolId,
			section: pageData?.section,
			grade: pageData?.grade,
		};
		if (pdata.grade && pdata.schoolId) {
			afterValidate(afterValidateCallBack);
			addEducationMutate(pdata);
		}
	};

	const afterValidateCallBack = (second) => {
		setSnakeBarProps({
			snackbarFlag: true,
			msz: "School Details saved.",
			type: "success",
		});
		navigate("/personaldetails/" + userId);
	};
	const {
		data: schoolData,
		isLoading: schoolLoader,
		refetch: schoolFetch,
	} = useQuery([`SchoolData`], () => getSchool(pinCode), {
		enabled: true,
		retry: false,
	});
	const {
		data: schoolsData,
		isLoading: schoolsLoader,
		refetch: schoolsFetch,
	} = useQuery([`SchoolsData`], () => getSchools(), {
		enabled: true,
		retry: false,
	});

	useEffect(() => {
		schoolFetch();
	}, [pinCode]);

	useEffect(() => {
		pinCode
			? setSchoolsList(schoolData?.data.data)
			: setSchoolsList(schoolsData?.data.data);
	}, [schoolData, schoolsData]);

	const { data: grades } = useQuery(["Grades"], getGrades);
	const { mutate: addEducationMutate } = useMutation(sendEducation, {
		onSuccess: (data, variables, context) =>
			onSuccessAddAssessment(data, variables, context),
		onError: (data, variables, context) =>
			onErrorAddAssessment(data, variables, context),
	});
	const onSuccessAddAssessment = (data, variables, context) => {
		afterValidateCallBack(null);
	};
	const onErrorAddAssessment = () => {};
	const { data: EducationData } = useQuery(
		[`EducationData`],
		() => getEducation(userId),
		{ enabled: !!currentUser?.id, retry: false }
	);
	useEffect(() => {
		setPageData(EducationData?.data?.data);
		if (
			EducationData?.data?.data.schoolId &&
			EducationData?.data?.data.grade &&
			EducationData?.data?.data.section
		) {
			window.localStorage.setItem("grade", EducationData?.data?.data.grade);
			navigate("/personaldetails/" + userId);
		}
	}, [EducationData]);

	const selectionChangeHandler = (event) => {
		setPageData({ ...pageData, school: event.target.value });
	};
	return (
		<OnboardingLayout>
			<SchoolDetailLayout
				responsiveStype={responsiveStype}
				pageData={pageData}
				setPageData={setPageData}
				submitFlag={submitFlag}
				getErrorMsz={getErrorMsz}
				snakeBarProps={snakeBarProps}
				setSnakeBarProps={setSnakeBarProps}
				submitHandler={submitHandler}
				setPinCode={setPinCode}
				pinCode={pinCode}
				selectionChangeHandler={selectionChangeHandler}
				schoolsList={schoolsList}
				setSchoolsList={setSchoolsList}
				grades={grades?.data?.data}
			/>
		</OnboardingLayout>
	);
};

export default SchoolDetails;
