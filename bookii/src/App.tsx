
import React from 'react';
import './styles/appStyles.css'; 
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookList from './components/BookList';
import { Link, Outlet } from 'react-router-dom';

const BookiiApp: React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Bücherliste</Link>
                    </li>
                    <li>
                        <Link to='/add-book'>Buch hinzufuegen</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>

                </ul>
            </nav>
            <Outlet />
            <BookList/>
            <AppFooter/>
        </div>
    );
};

export default BookiiApp;

