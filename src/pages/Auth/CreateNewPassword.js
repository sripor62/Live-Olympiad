import React, { useEffect, useState } from "react";
import { afterValidate } from "../../services/commonService";
import { getErrorMsz } from "../../services/validator";
import { AuthLayout } from "../../designs/Auth/AuthLayout";
import { responsiveStype } from "../../beautifiers/responsive";
import useAuthHelper from "../../hooks/useAuthHelper";
import { useStore } from "../../stores";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { NewPasswordLayout } from "../../designs/Auth/NewPasswordLayout";
export default function ResetPassword() {
	const [snakeBarProps, setSnakeBarProps] = useState({});
	const [submitFlag, setsubmitFlag] = useState(false);
	const [pageData, setPageData] = useState({ phoneNumber: "", password: "" });
	const { setPassword } = useAuthHelper();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const params = useParams();
	const setCurrentUser = useStore((state) => state.setCurrentUser);
	const currentUser = useStore((state) => state.currentUser);
	useEffect(() => {}, [currentUser]);
	const submitHandler = async () => {
		let pinFlag =
			/^\d{6}$/.test(pageData.password) ||
			/^\d{6}$/.test(pageData.confirmpassword);
		var pass = pageData.password === pageData.confirmpassword;
		var passlength = pageData.password.length === 6;

		if (!pinFlag) {
			setSnakeBarProps({
				snackbarFlag: true,
				msz: "Please enter valid 6 digit password",
				type: "error",
			});
			return;
		}
		if (
			pageData.password === pageData.confirmpassword &&
			pageData.password.length === 6
		) {
			let res = await setPassword(pageData.password, params.token);
			if (res.data?.success) {
				setCurrentUser(res.data?.data);
				navigate("/schooldetails/:userId");
			}
		} else if (!pass)
			setSnakeBarProps({
				snackbarFlag: true,
				msz: "Passwords do not match",
				type: "error",
			});
		else if (!passlength)
			setSnakeBarProps({
				snackbarFlag: true,
				msz: "Passwords length should be 6",
				type: "error",
			});
		setsubmitFlag(true);
		afterValidate(afterValidateCallBack,setSnakeBarProps);
	};

	const afterValidateCallBack = (second) => {
		setSnakeBarProps({
			snackbarFlag: true,
			msz: "password must contain 6 digit numbers only",
			type: "success",
		});
	};

	return (
		<AuthLayout>
			<NewPasswordLayout
				responsiveStype={responsiveStype}
				submitFlag={submitFlag}
				getErrorMsz={getErrorMsz}
				pageData={pageData}
				setPageData={setPageData}
				snakeBarProps={snakeBarProps}
				setSnakeBarProps={setSnakeBarProps}
				submitHandler={submitHandler}
			/>
		</AuthLayout>
	);
}
