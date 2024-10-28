// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { CreatAuthContext } from "../Firebase/Authprovider";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../customhuk/UseAdmin";
import { MdAssessment, MdNotificationAdd } from "react-icons/md";
import { FcSupport } from "react-icons/fc";
import { GrUserWorker } from "react-icons/gr";
import { FaSellcast } from "react-icons/fa";
import UseMarketing from "../customhuk/UseMarketing";
import UseSupervisor from "../customhuk/UseSuparviser";
import UseWorker from "../customhuk/UseWorker";
import { useState } from "react";
import UseUserrole from "../customhuk/UseUserrole";
import { FaCartShopping } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";





const Sidebar = () => {

    const [isAdmin] = useAdmin()
    const [isMarketing] = UseMarketing()
    const [isSupervisor] = UseSupervisor()
    const [isWorker] = UseWorker()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isUserrole] = UseUserrole()

    // const [userRole, setUserRole] = useState(null);
    // const { user } = useContext(CreatAuthContext);

    // useEffect(() => {
    //     axios.get('https://inventory-management-one-psi.vercel.app/getuser')
    //         .then((result) => {
    //             const foundUser = result.data.find(raninguser => raninguser.email === user.email);
    //             setUserRole(foundUser);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching user role:", error);
    //         });
    // }, [user]);

    // console.log(userRole);


    return (
        <section className="flex sodber gap-5 pt-20 relative min-h-screen">
            <nav
                className={`bg-white shadow-xl top-16 ${isSidebarOpen ? "left-0" : "left-[-400px]"} absolute lg:static lg:top-0 lg:left-0 min-w-[250px] py-6 font-[sans-serif] overflow-auto lg:block`}
                style={{ transition: 'left 1s' }}
            >
                <div className="relative flex flex-col h-full ">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="flex justify-end pr-2 block lg:hidden">
                        <RxCross2 className="border-black text-3xl border rounded-full p-1" />
                    </button>
                    <a href="javascript:void(0)" className="text-center">
                        <img
                            src="/bashboad.jpg"
                            alt="logo"
                            className="w-[160px] inline"
                        />
                    </a>


                    <ul className="space-y-3 my-8 flex-1 min-h-screen">

                        {
                            isAdmin &&
                            <>
                                <Helmet>
                                    <title>Home || dashboard</title>
                                </Helmet>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <Link to={'/dashboard'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdAssessment /> Dashboard</Link>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/supervisor'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FcSupport /> All Supervisor</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/worker'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><GrUserWorker /> All Worker</NavLink>
                                </li>

                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/marketing'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaSellcast /> All Sellar</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/getsupervisorpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> All Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/getselproduct'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaCartShopping /> Sale Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/selproduct'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaCartShopping /> Add Sale Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/allnotice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> All Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/allcontact'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> All Contact Info</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/notice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Creat Notice</NavLink>
                                </li>


                            </>

                        }
                        {
                            isMarketing && <>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <Link to={'/dashboard'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdAssessment /> Dashboard</Link>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/markatingetpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaSellcast /> Admin Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/selproduct'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaCartShopping /> Add Sale Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/getmarkatingsuperviserpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Supervisor Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/workernotice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Worker Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/getsupervisorpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> All Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/notice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Creat Notice</NavLink>
                                </li>

                            </>
                        }
                        {
                            isSupervisor && <>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <Link to={'/dashboard'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdAssessment /> Dashboard</Link>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/supervisorgetpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaSellcast /> Admin Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/getsupervisorpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> All Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/getselproduct'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaCartShopping /> Sale Product</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/workernotice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Worker Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/supervisornotice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Supervisor Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/addproduct'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Creat Product post</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/notice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Creat Notice</NavLink>
                                </li>

                            </>
                        }
                        {
                            isWorker && <>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <Link to={'/dashboard'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdAssessment /> Dashboard</Link>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/workergetpost'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><FaSellcast /> Admin Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/workernotice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Worker Notice</NavLink>
                                </li>

                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/supervisornotice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Supervisor Notice</NavLink>
                                </li>
                                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard/notice'} href="javascript:void(0)" className="flex items-center text-xl font-playfair gap-2 hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"><MdNotificationAdd /> Creat Notice</NavLink>
                                </li>

                            </>
                        }

                    </ul>
                    <div className="flex flex-wrap items-center cursor-pointer border-t border-gray-300 px-4 py-4">
                        <img
                            src="https://readymadeui.com/profile.webp"
                            className="w-9 h-9 rounded-full border-white"
                        />
                        <div className="ml-4">
                            <p className="text-sm text-black">{isUserrole?.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{isUserrole?.email}</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full lg:w-[70%] min-h-screen px-5">
                <div className={` pt-5 md:pt-10  ${isSidebarOpen ? "" : 'flex justify-between items-center lg:justify-center'} mx-auto`}>
                    <div className={`${isSidebarOpen ? "hidden" : ''}`} style={{ transition: '.4s' }}>
                        <div className="lg:hidden">
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                            >
                                <span
                                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                >
                                </span>
                                <span
                                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                                >
                                    Open Dashboard
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold font-playfair text-center ">
                        {isUserrole?.role.charAt(0).toUpperCase() + isUserrole?.role.slice(1)} Dashboard
                    </h1>

                </div>
                <div className="divider -mt-1 w-full"></div>


                <Outlet></Outlet>
            </div>

        </section >
    );
};

export default Sidebar;
