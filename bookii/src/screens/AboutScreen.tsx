import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader'
import MenuBars from '../components/MenuBars'
import '../styles/appStyles.css'
import AppFooter from '../components/AppFooter';
export const AboutScreen = function () {
    const navigate= useNavigate();
    return (
        <div  >
            <AppHeader/>
            <MenuBars onLogout={()=>navigate('/')} />
            <div id='main_screen'>
            <h2>About</h2>
            <div>Made at HTW Berlin by Hoai Linh Pham</div>
            <br />
            <ul style={{ listStyle: "none" }}>
                <li style={{ listStyle: "none" }}>FED</li>
                <li style={{ listStyle: "none" }}>HTW Berlin</li>
                <li style={{ listStyle: "none" }}>Fachbereich 4</li>
                <li style={{ listStyle: "none" }}>Angewandte Informatik</li>
            </ul>

            </div>
            
            <AppFooter/>
        </div>
    );
};