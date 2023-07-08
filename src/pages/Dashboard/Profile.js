import React, { useEffect, useState } from "react";
import { afterValidate } from "../../services/commonService";
import { getErrorMsz } from "../../services/validator";
import HomeLayout from "../../designs/Dashboard/HomeLayout";
import { ProfileLayout } from "../../designs/Dashboard/ProfileLayout";
import { usePayment } from "../../hooks/usePayment";
import { checkAuthCookie } from "../../services/helpers";
import { useStudent } from "../../hooks/useStudent";
import { useSchool } from "../../hooks/useSchool";
import { useMutation, useQuery } from "react-query";
import { ControlPointDuplicateRounded } from "@mui/icons-material";
import { useStore } from "../../stores";
import { navigateAsPerSessionValidity } from "../../services/helpers";
import { isValidEmail } from "../../designs/Onboarding/PersonalDetailLayout";
import { useNavigate, useParams } from "react-router-dom";

const category = [
	{
		label: "F",
		value: 1,
	},
	{
		label: "M",
		value: 2,
	},
];

const Profile = (props) => {
	useEffect(() => {
		if (window.localStorage) {
			if (!localStorage.getItem("reload")) {
				localStorage["reload"] = true;
				//window.location.reload();
			} else {
				localStorage.removeItem("reload");
			}
		}
	}, []);
	// const { getSubjects } = usePayment();
	const curentUser = useStore((state) => state.currentUser);
	const setCurrentUser = useStore((state) => state.setCurrentUser);

	const [subscriptionList, setSubscriptionList] = useState();

	useEffect(() => {
		navigateAsPerSessionValidity(true);
	});
	// const { getUserPaymentInfo, getSubscriptions } = usePayment();
	// const { dataschoolLoader: PaymentData, isLoading: PaymentLoader } = useQuery(
	// 	[`PaymentData`],
	// 	() => getUserPaymentInfo(curentUser?.id),
	// 	{ enabled: true, retry: false }
	// );
	// const [paymentInfo, setPaymentInfo] = useState();
	// useEffect(() => {
	// 	setPaymentInfo(PaymentData?.data.data);
	// }, [PaymentData]);
	const [snakeBarProps, setSnakeBarProps] = useState({});
	const [submitFlag, setsubmitFlag] = useState(false);
	const [pageData, setPageData] = useState({
		fullName: "",
		email: "",
		rollNumber: "",
		dob: "",
		gender: "",
		pincode: "",
		schoolId: "",
		grade: "",
		section: "",
		schoolCode: "",
	});
	const { getPersonalData, sendPersonalData } = useStudent();
	const navigate = useNavigate();
	const student = JSON.parse(sessionStorage.getItem("current_student"));
	const [schoolsList, setSchoolsList] = useState([]);
	const [schoolsId, setSchoolsId] = useState("");
	const [subscribedSubjects, setSubscribedSubjects] = useState();
	const { getProfile } = useStudent();
	const { getSchool, getSchoolById, getSchools, getGrades } = useSchool();
	const [pinCode, setPinCode] = useState("");
	const { profileDataDetails } = useStudent();
	const [schoolCurrent, setCurrentSchool] = useState([]);
	const {
		data: profileData,
		isLoading: contentLoader,
		refetch,
	} = useQuery([`ProfileData`], () => getProfile(student?._id), {
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
	const {
		data: schoolData,
		isLoading: schoolLoader,
		refetch: schoolFetch,
	} = useQuery([`SchoolData`, pinCode], () => getSchool(pinCode), {
		enabled: !!pinCode,
		retry: false,
	});

	
  let schoolId = student.schoolId;
  const [schoolType, setSchoolType] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await getSchoolById(schoolId);
        setSchoolType(response.data.data.type);
      } catch (error) {
        console.error("Error fetching school data:", error);
      }
	  finally {
        setIsLoading(false);
      }
    };

    fetchSchool();
  }, [schoolId]);
  let seriesName = (schoolType === "Tech") ? "Screening" : "Practice";

	useEffect(() => {
		if (schoolsData && profileData) {
			//console.log(profileData?.data?.data);
			var pdata = {
				...profileData?.data.data,
			};
			let currentSchool = schoolsData?.data?.data?.filter((item) => {
				return profileData?.data?.data?.schoolId === item._id;
			});
			if (currentSchool) {
				setCurrentSchool(currentSchool[0]);
				setPinCode(currentSchool[0]?.pincode);
			}
			setPageData({ ...pageData, ...pdata });
		}
	}, [profileData, schoolsData]);

	useEffect(() => {
		schoolFetch();
	}, [pinCode]);

	useEffect(() => {
		pinCode
			? setSchoolsList(schoolData?.data.data)
			: setSchoolsList(schoolsData?.data.data);
	}, [schoolData, schoolsData]);

	// const { data: SubscriptionData, isLoading: subscriptionsLoader } = useQuery(
	// 	[`SubscriptionData`],
	// 	() => getSubscriptions(student?._id),
	// 	{ enabled: true, retry: false }
	// );
	// useEffect(() => {
	// 	setSubscriptionList(SubscriptionData?.data.data);
	// }, [SubscriptionData]);
	const profileSubmit = () => {
		var pdata = {
			...pageData,
			fullName: pageData.fullName,
			email: pageData.email,
			rollNumber: pageData.rollNumber,
			dob: pageData.dob,
			gender: pageData.gender,
			schoolId: pageData.schoolId,
			grade: pageData.grade,
			section: pageData.section,
		};
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
			sessionStorage.setItem("current_student",JSON.stringify(pageData))
			PersonalMutate(pdata);
		}
		// afterValidate(afterValidateCallBack);
		// addProfileMutate({ ...pdata });
	};

	const { mutate: PersonalMutate, isLoading: PersonalInfoLoading } =
		useMutation(sendPersonalData);

	// const { data: SubjectData, isLoading: SubjectLoader } = useQuery(
	// 	[`SubjectData`],
	// 	() => getSubjects(),
	// 	{ enabled: true, retry: false }
	// );

	// useEffect(() => {
	// 	let subjectMap = {};
	// 	if (SubjectData?.data?.data) {
	// 		SubjectData.data.data.forEach((subject) => {
	// 			subjectMap[subject.id] = subject.name;
	// 		});
	// 	}
	// 	if (SubscriptionData?.data?.data?.subscribedCourses) {
	// 		setSubscribedSubjects(
	// 			SubscriptionData.data.data.subscribedCourses.map(
	// 				(sub) => subjectMap[sub]
	// 			)
	// 		);
	// 	}
	// }, [SubjectData, subscriptionList]);

	const { mutate: addProfileMutate, isLoading: addProfileLoading } =
		useMutation(profileDataDetails, {
			onSuccess: (data, variables, context) =>
				onSuccessAddAssessment(data, variables, context),
			onError: (data, variables, context) =>
				onErrorAddAssessment(data, variables, context),
		});
	const onSuccessAddAssessment = (data, variables, context) => {
		setCurrentUser({ ...curentUser, fullName: pageData.fullName });
	};
	const onErrorAddAssessment = () => {};

	const selectionChangeHandler = (event) => {
		setPageData({ ...pageData, school: event.target.value });
	};

	const { data: grades } = useQuery(["Grades"], getGrades);

	const afterValidateCallBack = (second) => {
		setSnakeBarProps({
			snackbarFlag: true,
			msz: "Profile Submitted Successfully",
			type: "success",
		});
	};
	const clearCurrentUser = useStore((state) => state.clearCurrentUser);
	const getSchoolId = (schoolId) => {
		var school = schoolsData?.data?.data?.filter((item) => {
			return item.id === schoolId;
		});
		setPageData({ ...pageData, pinCode: school.pincode });
	};

	if (isLoading) {
        // Display a loading spinner or a placeholder message
        return <div>Loading...</div>;
      }
	return (
		<HomeLayout logOutHandler={clearCurrentUser} seriesName={seriesName}>
			<ProfileLayout
				subscriptionList={subscribedSubjects}
				category={category}
				getErrorMsz={getErrorMsz}
				submitFlag={submitFlag}
				profileSubmit={profileSubmit}
				setPageData={setPageData}
				pageData={pageData}
				snakeBarProps={snakeBarProps}
				setSnakeBarProps={setSnakeBarProps}
				setPinCode={setPinCode}
				pinCode={pinCode}
				selectionChangeHandler={selectionChangeHandler}
				schoolsList={schoolsList}
				setSchoolsList={setSchoolsList}
				// paymentInfo={paymentInfo}
				currentSchool={schoolCurrent}
				grades={grades?.data?.data}
			/>
		</HomeLayout>
	);
};

export default Profile;