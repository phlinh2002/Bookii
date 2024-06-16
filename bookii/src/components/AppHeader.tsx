import React from "react";
import '../styles/appStyles.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
    return (
        <Link to={`/`}>
        <div id="header">
            <img id="header_img" src={logo} alt="Bookii Logo" />
        </div>
        </Link>
    );
};

export default AppHeader; 