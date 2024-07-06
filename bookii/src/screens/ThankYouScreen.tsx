
import React from 'react';
import MenuBars from '../components/MenuBars';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import '../styles/appStyles.css';

const ThankYouScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <MenuBars onLogout={()=>navigate('/')} />
            <AppHeader />
            <h2 id="thankyou">Thank you for shopping with us!</h2>
            <AppFooter/>
        </div>
        
    );
};

export default ThankYouScreen;
