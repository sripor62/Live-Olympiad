
//Library import statements...
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword from './pages/auth/ForgotPassword';
import LoginPage from './pages/auth/login';
import { LoginSignTabGroup } from './pages/auth/loginsignuptab';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignTabGroup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </Router>


  );

};

export default App;
