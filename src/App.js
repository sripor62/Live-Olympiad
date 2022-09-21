
//Library import statements...
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword from './pages/auth/ForgotPassword';
import CreateNewPassword from './pages/auth/CreateNewPassword';
import LoginPage from './pages/auth/login';
import { LoginSignTabGroup } from './pages/auth/loginsignuptab';
import ResetPassword from './pages/auth/ResetPassword';
import PersonalDetails from './pages/auth/PersonalDetails';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignTabGroup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/createnewpassword' element={<CreateNewPassword/>} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/personaldetails' element={<PersonalDetails/>} />
      </Routes>
    </Router>


  );

};

export default App;
