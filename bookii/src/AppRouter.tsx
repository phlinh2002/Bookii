import { createBrowserRouter } from "react-router-dom";
import BookiiApp from "./App";
import './styles/App.css';
import './styles/appStyles.css';
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from './screens/AboutScreen';
import { AddBook } from "./components/AddBook";
import BookList from "./components/BookList";
import HomeNavigator from "./components/HomeNavigator";
import BookDetailScreen from "./screens/BookDetails";
//import React from 'react';

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
                path:"/add-book",
                element: <AddBook />
            },
            {
                path:"/about",
                element:<AboutScreen/>
            }
        ]
    },
    {
        path: "/about",
        element: <AboutScreen />,
        errorElement: <ErrorScreen />,
    },
    {
        path:"/book/:isbn",
        element:<BookDetailScreen/>,
    }
   
]);
