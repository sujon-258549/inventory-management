import { createBrowserRouter } from "react-router-dom";
import Min from "../Common/Min";
import Home from "../Home/Home";
import Signup from "../signuplogin/Signup";
import Login from "../signuplogin/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Min></Min>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
       
        ]
    }
])

export default router
