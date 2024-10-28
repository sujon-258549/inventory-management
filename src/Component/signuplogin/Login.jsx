import { useContext, useState } from "react"
import { BiShow, BiSolidHide } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { CreatAuthContext } from "../Firebase/Authprovider"
import Swal from "sweetalert2"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser } = useContext(CreatAuthContext)
    const navigate = useNavigate()

    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "User login successfully!",
                });
                navigate('/')
            })
            .catch(error => {
                console.error("Login error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Invalid email or password.",
                });
            });
    }

    return (
        <div>
            <div
                className="flex justify-center items-center pt-16 md:pt-32 font-[sans-serif] h-full min-h-screen p-4"
                style={{
                    backgroundImage: "url(https://readymadeui.com/background-image.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="max-w-md w-full mx-auto">
                    <form onSubmit={handleSignin} className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                        <div className="mb-12">
                            <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                        </div>
                        <div>
                            <div className="relative flex items-center">
                                <input
                                    name="email"
                                    type="text"
                                    required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter email"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#333"
                                    stroke="#333"
                                    className="w-[18px] h-[18px] absolute right-2"
                                    viewBox="0 0 682.667 682.667"
                                >
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000" />
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path
                                            fill="none"
                                            strokeMiterlimit={10}
                                            strokeWidth={40}
                                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                            data-original="#000000"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative flex items-center">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                    placeholder="Enter password"
                                />
                                <div
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="w-4 h-4 absolute right-4 text-[#4a4a4a] cursor-pointer"
                                >
                                    {showPassword ? <BiShow className="text-xl" /> : <BiSolidHide className="text-xl" />}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 shrink-0 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-3 block text-sm text-gray-800"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="mt-12">
                            <button
                                type="submit"
                                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
                            >
                                Sign in
                            </button>
                            <p className="text-gray-800 text-sm text-center mt-6">
                                Don't have an account
                                <Link
                                    to="/signup"
                                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                                >
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
