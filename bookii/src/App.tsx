import React, { useEffect, useState } from 'react';
import './styles.css'; // Import CSS file
import logo from '../src/logo.svg';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookComponent from './components/BookDisplay';

const BookiiApp: React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <BookComponent/>
            <AppFooter/>
        </div>
    );
};

export default BookiiApp;

