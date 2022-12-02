import {createBrowserRouter} from "react-router-dom";

import Main from "../../Layout/Main";
import NotFound from '../../Pages/Shared/NotFound/NotFound';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import AddedAProduct from "../../Pages/AddedAProduct/AddedAProduct";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import ReportedItems from "../../Pages/ReportedItems/ReportedItems";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyProduct from "../../Pages/MyProduct/MyProduct";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyBuyers from "../../Pages/MyBuyers/MyBuyers";
import AdminRoute from "./PrivateRoute/AdminRoute";
import SellerRoute from "./PrivateRoute/SellerRoute";
import BuyerRoute from "./PrivateRoute/BuyerRoute";


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
                element: <SellerRoute><AddedAProduct></AddedAProduct></SellerRoute>
            },
            {
                path: '/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/allBuyers',
                element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({params}) => fetch(`https://old-friends-server.vercel.app/products/${params.name}`)
            },
            {
                path: '/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: '/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/reportedItems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            }
        ]
        
    }
])