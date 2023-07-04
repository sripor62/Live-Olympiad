import ResetPassword from "../pages/Auth/ResetPassword";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import CreateNewPassword from "../pages/Auth/CreateNewPassword";
import { AuthPage } from "../pages/Auth";
import React from "react";
import PersonalDetails from "../pages/Onboarding/PersonalDetails";
import MobileVerification from "../pages/Auth/MobileVerification";
import SchoolDetails from "../pages/Onboarding/SchoolDetails";
import InfoBoard from "../pages/Dashboard/InfoBoard";
import Dashboard from "../pages/Dashboard/Dashboard";
import SyllabusMath from "../pages/Dashboard/SyllabusMath";
import SyllabusEnglish from "../pages/Dashboard/SyllabusEnglish";
import SyllabusScience from "../pages/Dashboard/SyllabusScience";
import Profile from "../pages/Dashboard/Profile";
import Report from "../pages/Dashboard/Report";
import Schedule from "../pages/Dashboard/Schedule";
import ChooseYourPlan from "../pages/Onboarding/ChooseYourPlan";
import Subscription from "../pages/Dashboard/subscription";
import { MobileUpgrade } from "../designs/Dashboard/MobileUpgrade";
import Booklet from "../pages/Dashboard/Booklet";

import GoldCard from "../designs/cards/GoldCard";
import SilverCard from "../designs/cards/silver";
import BronzeCard from "../designs/cards/bronze";
import SignUp from "../pages/Auth/SignUp";
import ParentView from "../pages/ParentView";
import ReportView from "../pages/ReportView";
import { Subjects } from "../pages/Dashboard/Subjects";
import IndividualReport from "../designs/IndividualReport/IndividualReport";

export const routes = [
	{
		path: "/",
		element: <AuthPage />,
	},
	{
		path: "/:index",
		element: <AuthPage />,
	},
	{
		path: "/forgotpassword",
		element: <ForgotPassword />,
	},
	{
		path: "/createnewpassword/:token",
		element: <CreateNewPassword />,
	},
	{
		path: "/resetpassword",
		element: <ResetPassword />,
	},

	{
		path: "/subscription",
		element: <Subscription />,
	},

	{
		path: "/personaldetails/:userId",
		element: <PersonalDetails />,
	},
	{
		path: "/mobileverification/:phoneNumber",
		element: <MobileVerification />,
	},
	{
		path: "/schooldetails/:userId",
		element: <SchoolDetails />,
	},
	{
		path: "/mobileupgrade",
		element: <MobileUpgrade />,
	},
	{
		path: "/infoBoard",
		element: <InfoBoard />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/syllabusMath",
		element: <SyllabusMath />,
	},
	{
		path: "/syllabusScience",
		element: <SyllabusScience />,
	},
	{
		path: "/syllabusEnglish",
		element: <SyllabusEnglish />,
	},
	{
		path: "/subjects",
		element: <Subjects />,
	},
	{
		path: "/individualReport",
		element: <IndividualReport />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/schedule",
		element: <Schedule />,
	},
	{
		path: "/booklet",
		element: <Booklet />,
	},

	{
		path: "/chooseyourplan",
		element: <ChooseYourPlan />,
	},
	{
		path: "/goldCard",
		element: <GoldCard />,
	},
	{
		path: "/bronze",
		element: <BronzeCard />,
	},
	{
		path: "/silver",
		element: <SilverCard />,
	},
	{
		path: "/report",
		element: <ReportView />,
	},
	{
		path: "/parent",
		element: <ParentView />,
	},
	{
		path: "/signUp",
		element: <SignUp />,
	},
	{
		path: "/reports",
		element: <Report />,
	}
];