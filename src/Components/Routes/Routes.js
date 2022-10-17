import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Products from "../Products/Products"
import Orders from "../Orders/Orders"
import Contact from "../Contact/Contact"
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from '../RegisterPage/RegisterPage'
import Sneakers from "../ProductCategorys/Sneakers/Sneakers";
import Bags from "../ProductCategorys/Bags/Bags";
import Earphones from "../ProductCategorys/Earphones/Earphones";
import Caps from "../ProductCategorys/Caps/Caps";
import Bottles from "../ProductCategorys/Bottles/Bottles";
import AllProducts from "../Products/AllProducts";
import Boots from "../ProductCategorys/Boots/Boots";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('products.json'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />,
                children: [
                    {
                        path: '/products/',
                        element: <AllProducts />
                    },
                    {
                        path: '/products/sneakers',
                        element: <Sneakers />
                    },
                    {
                        path: '/products/boots',
                        element: <Boots />
                    },
                    {
                        path: '/products/bags',
                        element: <Bags />
                    },
                    {
                        path: '/products/earphones',
                        element: <Earphones />
                    },
                    {
                        path: '/products/caps',
                        element: <Caps />
                    },
                    {
                        path: '/products/bottles',
                        element: <Bottles />
                    }
                ]
            },
            {
                path: '/orders',
                element: <Orders />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            }

        ]
    }
])

export default routes