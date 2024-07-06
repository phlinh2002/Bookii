
import { createBrowserRouter } from "react-router-dom";
import BookiiApp from "./App";
import './styles/App.css';
import './styles/appStyles.css';
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from './screens/AboutScreen';
import AddBookScreen from "./screens/AddBook";
import BookList from "./components/BookList";
import BookDetailScreen from "./screens/BookDetails";
import EditBookScreen from "./screens/EditBook";
import LoginScreen from "./screens/LoginScreen";
import ThankYouScreen from "./screens/ThankYouScreen";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <BookiiApp />,
        errorElement: <ErrorScreen />,
        
    },
    {
        path:'/booklist',
        element:<BookList />
    },
    {
        path:"/add-book",
        element: <AddBookScreen/>
    },
    {
        path: "/about",
        element: <AboutScreen />,
        errorElement: <ErrorScreen />,
    },
    {
        path:"/book/:id",
        element:<BookDetailScreen/>,
       
    }, 
    {
        path:"/book/:id/edit",
        element:<EditBookScreen/>
    },
    {
        path:"/login",
        element:<LoginScreen onLogin={(userRole: string) => {}} />
    },
    {
        path:"/thankyou",
        element:<ThankYouScreen/>
    }



   
]);

