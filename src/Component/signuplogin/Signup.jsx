import { useContext, useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const navigate = useNavigate();
    const { creatUser, signout } = useContext(CreatAuthContext);
    const date = new Date();
    const handleRegister = async (e) => {
        e.preventDefault();
        const { name, email, password, number } = e.target.elements;

        if (!acceptedTerms) {
            toast.error("Please accept the terms and conditions.");
            return;
        }

        if (password.number.length < 11) {
            toast.error('number must be 11 characters !');
            return;
        }

        if (password.value.length < 6) {
            toast.error('Password must be 6 characters or longer!');
            return;
        }

        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password.value)) {
            toast.error('Please use a stronger password.');
            return;
        }

        const userinfo = {
            name: name.value,
            number: number.value,
            email: email.value,
            password: password.value,
            role,
            date
        };

        try {
            const result = await creatUser(email.value, password.value);
            const res = await axios.post('http://localhost:3000/users', userinfo);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "User created successfully!",
                });
                signout();
                navigate('/login');
            }
            console.log(result);
        } catch (error) {
            console.error("Error:", error.message);
            toast.error(error.message);
        }
    };

    return (
        <section>
            <div className="py-20 md:py-40 shadow-md">
                <div className="font-sans h-full bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
                    <div className="grid md:grid-cols-3 items-center shadow-lg rounded-xl overflow-hidden">
                        <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
                            <div>
                                <h4 className="text-white text-lg font-semibold">
                                    Create Your Account
                                </h4>
                                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                                    Welcome to our registration page! Get started by creating your account.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white text-lg font-semibold">
                                    Simple & Secure Registration
                                </h4>
                                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                                    Our registration process is straightforward and secure.
                                    We prioritize your privacy and data security.
                                </p>
                            </div>
                        </div>
                        <form onSubmit={handleRegister} className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                            <div className="mb-6">
                                <h3 className="text-gray-800 text-2xl font-bold">Create an account</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Number</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="number"
                                            type="number"
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                            placeholder="Enter Number"
                                        />
                                        <FaPhone className="w-4 h-4 absolute right-4 text-slate-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Worker & Supervisor</label>
                                    <select
                                        onChange={(e) => setRole(e.target.value)}
                                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a role</option>
                                        <option value="worker">Worker</option>
                                        <option value="supervisor">Supervisor</option>
                                        <option value="marketing">Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
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
                                <div className="flex items-center">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        onChange={() => setAcceptedTerms(!acceptedTerms)}
                                    />
                                    <label htmlFor="terms" className="ml-3 block text-sm text-gray-800">
                                        I accept the{" "}
                                        <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div className="mt-12">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
                                >
                                    Create an account
                                </button>
                            </div>
                            <p className="text-gray-800 text-sm mt-6 text-center">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Signup;
