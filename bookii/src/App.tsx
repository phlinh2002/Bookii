
import './styles.css'; 
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

