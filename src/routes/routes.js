import ResetPassword from '../pages/Auth/ResetPassword';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import CreateNewPassword from '../pages/Auth/CreateNewPassword';
import { AuthPage } from '../pages/Auth';

import PersonalDetails from '../pages/Onboarding/PersonalDetails';
import MobileVerification from '../pages/Auth/MobileVerification';
import SchoolDetails from '../pages/Onboarding/SchoolDetails';
import Dashboard from '../pages/Dashboard/Dashboard';

import Profile from '../pages/Dashboard/Profile';
import ChooseYourPlan from '../pages/Onboarding/ChooseYourPlan';
import TestLayout from '../pages/Test/TestLayout';
import ReportLayout from '../pages/Report/ReportLayout';
import TestScreen from '../pages/Test/TestScreen';
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
    path: "/personaldetails",
    element: <PersonalDetails />,
  },
  {
    path: "/mobileverification/:phoneNumber",
    element: <MobileVerification />,
  },
  {
    path: "/schooldetails",
    element: <SchoolDetails />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/chooseyourplan",
    element: <ChooseYourPlan />,
  },
  {
    path: "/test",
    element: <TestLayout />,
  },
  {
    path: "/ReportLayout",
    element: <ReportLayout />},  
  {
    path: "/TestScreen",
    element: <TestScreen />,
  },
];
