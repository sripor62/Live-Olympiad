
//Library import statements...
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword from './pages/unAuth/ForgotPassword';
import CreateNewPassword from './pages/unAuth/CreateNewPassword';
import { LoginSignTabGroup } from './pages/unAuth/loginsignuptab';
import ResetPassword from './pages/unAuth/ResetPassword';
import PersonalDetails from './pages/unAuth/PersonalDetails';
import MobileVerification from './pages/unAuth/MobileVerification';
import SchoolDetails from './pages/unAuth/SchoolDetails';
import Dashboard from './pages/auth/Dashboard';
import Schedule from './pages/unAuth/Schedule';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignTabGroup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/createnewpassword' element={<CreateNewPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/personaldetails' element={<PersonalDetails />} />
        <Route path='/mobileverification' element={<MobileVerification />} />
        <Route path='/schooldetails' element={<SchoolDetails />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/schedule' element={<Schedule />} />
      </Routes>
    </Router>


  );

};

export default App;
