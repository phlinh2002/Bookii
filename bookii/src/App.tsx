
import React from 'react';
import './styles/appStyles.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import {Outlet } from 'react-router-dom';
import MenuBars from './components/MenuBars';

const BookiiApp: React.FC = () => {
    return (
        <div>
            <AppHeader />
            <MenuBars/>
            
            <Outlet />
            <AppFooter />
        </div>
    );
};

export default BookiiApp;

