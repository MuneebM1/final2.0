import React, { createContext, useState } from 'react';
import { saveToken, removeToken } from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, role: '' });

  const login = (user, token, role) => {
    saveToken(token);
    setAuth({ user, role });
  };

  const logout = () => {
    removeToken();
    setAuth({ user: null, role: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
