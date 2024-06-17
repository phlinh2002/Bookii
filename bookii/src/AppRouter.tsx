import { createBrowserRouter } from "react-router-dom";
import BookiiApp from "./App";
import './styles/App.css';
import './styles/appStyles.css';
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from './screens/AboutScreen';
import AddBookScreen from "./screens/AddBook";
import BookList from "./components/BookList";
import HomeNavigator from "./components/HomeNavigator";
import BookDetailScreen from "./screens/BookDetails";
import EditBookScreen from "./screens/EditBook";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <BookiiApp />,
        errorElement: <ErrorScreen />,
        children:[
            {
                path:"/",
                element:<HomeNavigator/>
            },
           
            {
                path:"/booklist",
                element:<BookList/>
            },
            
            {
                path:"/about",
                element:<AboutScreen/>
            }
        ]
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
    }

   
]);
