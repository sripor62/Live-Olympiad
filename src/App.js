
//Library import statements...
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/auth/login';
import { LoginSignTabGroup } from './pages/auth/loginsignuptab';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignTabGroup />} />
      </Routes>
    </Router>


  );

};

export default App;
