import React from "react";
import '../styles/appStyles.css';

const AppFooter: React.FC = () => {
    return (
        <footer>
            <p>&copy; HTW-Berlin, Wilhelminenhofstr. 36, 12459 Berlin</p>
            <hr />
            <div className='regulations'>
            <a  href="https://aboutus/">About us </a>
         
            <a  href="https://copypaste24.de/datenschutz/"> Private Policy </a>
         
            <a  href="https://www.htw-berlin.de/impressum/"> Impressum </a>

            </div>
            
        </footer>
    );
};

export default AppFooter;