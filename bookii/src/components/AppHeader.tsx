import React from "react";
import '../styles/appStyles.css';
import logo from '../logo.svg';

const AppHeader: React.FC = () => {
    return (
        <div id="header">
            <img id="header_img" src={logo} alt="Bookii Logo" />
        </div>
    );
};

export default AppHeader; 