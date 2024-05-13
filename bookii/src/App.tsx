
import React from 'react';
import './styles.css'; 
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import {BookList} from './components/BookList';

const BookiiApp: React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <BookList/>
            <AppFooter/>
        </div>
    );
};

export default BookiiApp;

