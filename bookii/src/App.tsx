// src/App.tsx
import React, { useState } from 'react';
import './styles/appStyles.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { Outlet, useNavigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import MenuBars from './components/MenuBars';

const BookiiApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<string>('');

  const handleLogin = (userRole: string) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
  };

  return (
    <div>
      <AppHeader />
      {isLoggedIn ? (
        <>
          <MenuBars onLogout={handleLogout} />
          <Outlet context={{ role }} />
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
      <AppFooter />
    </div>
  );
};

export default BookiiApp;
