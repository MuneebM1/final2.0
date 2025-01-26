import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLoginPage from './Components/UserAuth/UserLoginPage';
import UserSignupPage from './Components/UserAuth/UserSignupPage';
import '../src/assets/Css/HeaderCss/Header.css'
import UserInterface from './Pages/UserInterface';
import '../src/assets/Css/aos.css'
import '../src/assets/Css/slickslider.css'
import '../src/assets/Css/nice-select.css'
import '../src/assets/Css/utily.css'
import Home from './Pages/Home';
import AdminDashboard from './Pages/AdminDashboard';
import AdminLoginPage from './Components/AdminAuth/AdminLogin';

const App = () => {
  const [auth, setAuth] = useState({ user: null, role: '' }); // User authentication state

  const login = (user, role) => {
    setAuth({ user, role });
  };

  const logout = () => {
    setAuth({ user: null, role: '' });
  };

  return (
    <Router>
      <div>
        <div className="container-fluid mt-4">
          <Routes>
            <Route path="/" element={<Home auth={auth} logout={logout} />} />
            <Route path="/user-login" element={<UserLoginPage login={login} />} />
            <Route path="/user-signup" element={<UserSignupPage login={login} />} />
            <Route path="/admin-login" element={<AdminLoginPage login={login} />} />
            <Route path="/user-interface" element={<UserInterface />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
