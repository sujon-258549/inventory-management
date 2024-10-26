// components/Header.js
import { useContext, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { CreatAuthContext } from '../Firebase/Authprovider';
import useAdmin from '../customhuk/UseAdmin';
import UseSuparviser from '../customhuk/UseSuparviser';
import UseMarketing from '../customhuk/UseMarketing';
import UseWorker from '../customhuk/UseWorker';

const Navber = () => {

    const { user, signout } = useContext(CreatAuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handelsignOut = () => {
        signout()
    }

    // console.log(user?.email)


    const [isSupervisor] = UseSuparviser()
    const [isMarketing] = UseMarketing()
    const [isWorker] = UseWorker()
    // console.log([isSupervisor])





    return (

        <section className='fixed w-full' style={{ zIndex: '999' }}>

            <header className="flex shadow-md py-4 px-4  sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
                <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                    <a href="javascript:void(0)">
                        <img src="/logo.png" alt="logo" className="w-40" />
                    </a>

                    <div
                        id="collapseMenu"
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
                    >
                        <button id="toggleClose" onClick={toggleMenu} className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"
                                ></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"
                                ></path>
                            </svg>
                        </button>

                        <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <li className="mb-6 hidden max-lg:block">
                                <a href="javascript:void(0)">
                                    <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                                </a>
                            </li>
                            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]">Home</a>
                            </li>
                            {
                                user && <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                    <NavLink to={'/dashboard'} href="javascript:void(0)" className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]">Dashboad</NavLink>
                                </li>
                            }

                            
                            {
                                isSupervisor && <>
                                    <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                        <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">Contact</a>
                                    </li>

                                </>
                            }
                            {
                                isMarketing && <>
                                    <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                        <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">All Markatiog post</a>
                                    </li>

                                </>
                            }
                            {
                                isWorker && <>
                                    <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                                        <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]">All Worker post</a>
                                    </li>

                                </>
                            }
                        </ul>
                    </div>

                    <div className="flex max-lg:ml-auto space-x-3">

                        {
                            user?.email ? <button onClick={handelsignOut}
                                className="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-2 items-center text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
                            >
                                <div
                                    className="absolute items-center inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                                ></div>

                                <div
                                    className="shrink-0 bg-border w-[1px] h-4"
                                    role="none"
                                    data-orientation="vertical"
                                ></div>
                                <span className="inline-flex items-center text-sm md:text-xl font-playfair animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%]">
                                    Login out
                                    <FiLogIn className="ml-2 text-[#ffaa40] text-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40]" />
                                </span>

                            </button> : <Link to={'/login'}
                                className="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-2 items-center text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
                            >
                                <div
                                    className="absolute items-center inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                                ></div>

                                <div
                                    className="shrink-0 bg-border w-[1px] h-4"
                                    role="none"
                                    data-orientation="vertical"
                                ></div>
                                <span className="inline-flex items-center text-sm md:text-xl  font-playfair animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%]">
                                    Login
                                    <FiLogIn className="ml-2 text-[#ffaa40] text-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40]" />
                                </span>

                            </Link>
                        }



                        <button id="toggleOpen" onClick={toggleMenu} className="lg:hidden">
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Navber;
