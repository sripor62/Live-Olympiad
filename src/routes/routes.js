import ResetPassword from '../pages/Auth/ResetPassword';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import CreateNewPassword from '../pages/Auth/CreateNewPassword';
import { AuthPage } from '../pages/Auth';

import PersonalDetails from '../pages/Onboarding/PersonalDetails';
import MobileVerification from '../pages/Auth/MobileVerification';
import SchoolDetails from '../pages/Onboarding/SchoolDetails';
import Dashboard from '../pages/Dashboard/Dashboard';

import Profile from '../pages/Dashboard/Profile';
import Schedule from '../pages/Dashboard/Schedule'
import ChooseYourPlan from '../pages/Onboarding/ChooseYourPlan';
import Subscription from '../pages/Dashboard/subscription';
import { MobileUpgrade } from '../designs/Dashboard/MobileUpgrade';
import Booklet from '../pages/Dashboard/Booklet';



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
    path: "/dashboard",
    element: <Dashboard />,
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
    element: <Booklet/>,
  },
 
  {
    path: "/chooseyourplan",
    element: <ChooseYourPlan />,
  }
];
