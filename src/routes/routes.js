import ResetPassword from '../pages/unAuth/ResetPassword';
import ForgotPassword from '../pages/unAuth/ForgotPassword';
import CreateNewPassword from '../pages/unAuth/CreateNewPassword';
import { LoginSignTabGroup } from '../pages/unAuth/loginsignuptab';

import PersonalDetails from '../pages/unAuth/PersonalDetails';
import MobileVerification from '../pages/unAuth/MobileVerification';
import SchoolDetails from '../pages/unAuth/SchoolDetails';
import Dashboard from '../pages/auth/Dashboard';

import Profile from '../pages/auth/Profile';
import ChooseYourPlan from '../pages/unAuth/ChooseYourPlan';
import TestLayout from '../pages/test/TestLayout';
import ReportLayout from '../pages/Report/ReportLayout';
import TestScreen from '../pages/unAuth/TestScreen';
import Login from '../pages/unAuth/LoginPage'
export const routes = [
  {
    path: "/",
    element: <LoginSignTabGroup />,
  },
  {
    path: "/:index",
    element: <LoginSignTabGroup />,
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
  {
    path: "/login",
    element: <Login/>,
  },
  
];
