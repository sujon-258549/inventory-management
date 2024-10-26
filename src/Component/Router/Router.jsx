import { createBrowserRouter } from "react-router-dom";
import Min from "../Common/Min";
import Home from "../Home/Home";
import Signup from "../signuplogin/Signup";
import Login from "../signuplogin/Login";
import Sidebar from "../Sideber/Sidebar";
import Allsuppperviser from "../Sideber/Admon/Allsuppperviser";
import Allworker from "../Sideber/Admon/Allworker";
import Allmarketing from "../Sideber/Admon/Allmarketing";
import CreateNotice from "../Sideber/Admon/CreateNotice";
import Getadminpost from "../Sideber/Markating/Getadminpost";
import AdminNoticeGetSupervisor from "../Sideber/Supervisor/AdminNoticeGetSupervisor";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Min />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/dashboard',  // Corrected path
                element: <Sidebar />,
                children: [
                    {
                        path: '/dashboard/supervisor',  // Corrected path
                        element: <Allsuppperviser />  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/marketing',  // Corrected path
                        element: <Allmarketing />  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/worker',  // Corrected path
                        element: <Allworker />  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/notice',  // Corrected path
                        element: <CreateNotice />  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/markatingetpost',  // Corrected path
                        element: <Getadminpost />  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/supervisorgetpost',  // Corrected path
                        element: <AdminNoticeGetSupervisor />  // Corrected typo in component
                    }
                ]
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);

export default router;
