import {createBrowserRouter} from "react-router-dom";

import Main from "../../Layout/Main";
import NotFound from '../../Pages/Shared/NotFound/NotFound';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import AddedAProduct from "../../Pages/AddedAProduct/AddedAProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/addAProduct',
                element: <AddedAProduct></AddedAProduct>
            }
        ]
        
    }
])