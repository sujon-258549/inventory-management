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
import Privaterouter from "./Privaterouter";
import AdminNoticeGetSupervisor from "../Sideber/Supervisor/AdminNoticeGetSupervisor";
import AdminGetpostWarker from "../Sideber/Warker/AdminGetpostWarker";
import Workernotice from "../Sideber/Warker/Workernotice";
import Allnotice from "../Sideber/Admon/Allnotice";
import Supervisernotice from "../Sideber/Supervisor/Supervisernotice";
import Contact from "../signuplogin/Contact";
import Allcontactinfo from "../Sideber/Admon/Allcontactinfo";
import SideberHome from "../Sideber/SideberHome";
import AboutUs from "../Home/AboutUs";
import Detail from "../Sideber/Admon/Detail";
import UserDetail from "../Sideber/Admon/UserDetail";
import Addproduct from "../Sideber/Supervisor/Addproduct";
import GetSupervisorpost from "../Sideber/Markating/GetSupervisorpost";
import GatDetail from "../Sideber/Markating/GatDetail";
import UpdateProduct from "../Sideber/Markating/UpdateProduct";
import Markationg from "../Sideber/Markating/Markationg";
import Error from "../Errorpage/Error";
import AddSaleProduct from "../Sideber/Markating/AddSaleProduct";
import SaleGetproduct from "../Sideber/Supervisor/SaleGetproduct";
import DetailSaleproduct from "../Sideber/Markating/DetailSaleproduct";
import AdminAllnotice from "../Home/AdminAllnotice";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Min />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/notice',
                element: <AdminAllnotice />
            },
            {
                path: '/dashboard',  // Corrected path
                element: <Privaterouter> <Sidebar /></Privaterouter>,
                children: [
                    {
                        path: '/dashboard',
                        element: <SideberHome></SideberHome>
                    },
                    {
                        path: '/dashboard/detail/:id',
                        element: <Detail></Detail>,
                        loader: ({ params }) => fetch(`https://inventory-management-one-psi.vercel.app/contactdetailpage/${params.id}`)
                    },
                    {
                        path: '/dashboard/detailuser/:id',
                        element: <UserDetail></UserDetail>,
                        loader: ({ params }) => fetch(`https://inventory-management-one-psi.vercel.app/detailuser/${params.id}`)
                    },
                    {
                        path: '/dashboard/sproduct/:id',
                        element: <GatDetail></GatDetail>,
                        loader: ({ params }) => fetch(`https://inventory-management-one-psi.vercel.app/singalgetproduct/${params.id}`)
                    },
                    {
                        // dingle get product
                        path: '/dashboard/getselproductid/:id',
                        element: <DetailSaleproduct></DetailSaleproduct>,
                        loader: ({ params }) => fetch(`https://inventory-management-one-psi.vercel.app/getselproductid/${params.id}`)
                    },
                    {
                        path: '/dashboard/updateproduct/:id',
                        element: <UpdateProduct></UpdateProduct>,
                        loader: ({ params }) => fetch(`https://inventory-management-one-psi.vercel.app/singalgetproduct/${params.id}`)
                    },
                    {
                        path: '/dashboard/supervisor',  // Corrected path
                        element: <Privaterouter><Allsuppperviser /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/getsupervisorpost',  // Corrected path
                        element: <Privaterouter><GetSupervisorpost /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/getselproduct',  // Corrected path
                        element: <Privaterouter><SaleGetproduct /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/selproduct',  // Corrected path
                        element: <Privaterouter><AddSaleProduct /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/addproduct',  // Corrected path
                        element: <Privaterouter><Addproduct /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/allcontact',  // Corrected path
                        element: <Privaterouter><Allcontactinfo /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/marketing',  // Corrected path
                        element: <Privaterouter><Allmarketing /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/worker',  // Corrected path
                        element: <Privaterouter><Allworker /></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/notice',  // Corrected path
                        element: <Privaterouter><CreateNotice></CreateNotice></Privaterouter>  // Corrected typo in component
                    },
                    {
                        path: '/dashboard/markatingetpost',  // Corrected path
                        element: <Privaterouter><Getadminpost /> </Privaterouter> // Corrected typo in component
                    },
                    {
                        path: '/dashboard/supervisorgetpost',  // Corrected path
                        element: <Privaterouter><AdminNoticeGetSupervisor /> </Privaterouter> // Corrected typo in component
                    },
                    {
                        path: '/dashboard/getmarkatingsuperviserpost',  // Corrected path
                        element: <Privaterouter><Markationg /> </Privaterouter> // Corrected typo in component
                    },
                    {
                        path: '/dashboard/workergetpost',  // Corrected path
                        element: <Privaterouter><AdminGetpostWarker /> </Privaterouter> // Corrected typo in component
                    },
                    {
                        path: '/dashboard/workernotice',  // Corrected path
                        element: <Privaterouter><Workernotice /> </Privaterouter> // Corrected typo in component
                    },
                    {
                        path: '/dashboard/allnotice',  // Corrected path
                        element: <Privaterouter><Allnotice /> </Privaterouter> // Corrected typo in component
                    },
                    {
                        path: '/dashboard/supervisornotice',  // Corrected path
                        element: <Privaterouter><Supervisernotice /> </Privaterouter> // Corrected typo in component
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
