
import React, { useState } from 'react';
import '../styles/appStyles.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Link } from 'react-router-dom';
import CartPopup from '../screens/CartPopup';
interface MenuBarsProps {
    onLogout: () => void;
}
const MenuBars: React.FC<MenuBarsProps> = ({ onLogout}) => {
    const role = useSelector((state: RootState) => state.user.role)
    const [showCart, setShowCart] =useState(false);
    const handleLogout = () => {
        onLogout();
    };
    return (
        <div>
            <nav className='buttonList'>
                <ul>
                <li className='menuButton'>
                        Welcome, {role}
                    </li>
                    <li className='menuButton'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='menuButton'>
                        <Link to="/booklist">Book List</Link>
                    </li>
                    {role === 'admin' ? (
                        <li className="menuButton">
                        <Link to="/add-book">Add Book</Link>
                    </li>
                        
                    ) : (
                        <>
                            <li className='menuButton' onClick={() => setShowCart(!showCart)}>
                                Cart
                            </li>
                            {showCart && <CartPopup />}
                        </>
                    )}
                    
                    <li className='menuButton'>

                        <Link to='/' onClick={handleLogout}>Log out</Link>

                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default MenuBars;

