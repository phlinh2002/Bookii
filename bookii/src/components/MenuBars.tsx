
import React from 'react';
import '../styles/appStyles.css'

import { Link } from 'react-router-dom';

const MenuBars: React.FC = () => {
    return (
        <div>
            <nav className='buttonList'>
                <ul>
                    <li className='menuButton'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='menuButton'>
                        <Link to="/booklist">Book List</Link>
                    </li>
                    <li className='menuButton'>
                        <Link to='/add-book'>Add Book</Link>
                    </li>
                    <li className='menuButton'>
                        <Link to='/about'>About</Link>
                    </li>

                </ul>
            </nav>         
        </div>
    );
};

export default MenuBars;

