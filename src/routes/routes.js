import { Navigate } from "react-router-dom";
import ResetPass from "../features/auth/ResetPass";
import AuthScreen from "../features/auth/AuthScreen";
import Dashboard from "../features/dashboard/Dashboard";
import Home from "../features/dashboard/Home";
import SetUserProfile from "../features/profile/SetUserProfile";
import Learners from "../features/learners";
import Admins from "../features/admins";
import Roles from "../features/roles";
import Communities from "../features/communities";
import EditRole from "../features/roles/EditRole";
import PrivacyPolicy from "../features/PrivacyPolicy";
import TOC from "../features/TOC";

export const routes = [
  { path: "/", element: <Navigate to="/login/phone" replace /> },
  {
    path: "/signup/:routeType",
    element: <AuthScreen />,
  },
  {
    path: "/login/:routeType",
    element: <AuthScreen />,
  },
  {
    path: "/forgotpass",
    element: <AuthScreen />,
  },
  {
    path: "/set-password",
    element: <ResetPass cleanUser={true} />,
  },  
  {
    path: "/dashboard",
    element: <Dashboard />,
  }, 
  {
    path: "/home",
    element: <Home />,
  },   
  {
    path: "/learners",
    element: <Learners />,
  },   
  {
    path: "/admins",
    element: <Admins />,
  },   
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path:"/roles/:roleId",
    element: <EditRole/>
  },
  {
    path: "/communities",
    element: <Communities />,
  },    
  {
    path: "/profile/:paramsUserId",
    element: <SetUserProfile />,
  },   
  {
    path: "/reset-password",
    element: <ResetPass cleanUser={false} />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy/>
  },
  {
    path: "toc",
    element: <TOC/>
  },
  {
    path: "*",
    element: <Navigate to="/login/phone" replace />,
  },
];
