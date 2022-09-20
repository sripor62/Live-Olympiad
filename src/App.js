
//Library import statements...
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword from './pages/auth/ForgotPassword';
import CreateNewPassword from './pages/auth/CreateNewPassword';
import LoginPage from './pages/auth/LoginPage';
import { LoginSignTabGroup } from './pages/auth/loginsignuptab';
import ResetPassword from './pages/auth/ResetPassword';
import MobileVerification from './pages/auth/MobileVerification';
import SchoolDetails from './pages/auth/SchoolDetails';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignTabGroup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/createnewpassword' element={<CreateNewPassword />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/mobileverification' element={<MobileVerification />} />
        <Route path='/schooldetails' element={<SchoolDetails />} />
      </Routes>
    </Router>


  );

};

export default App;
