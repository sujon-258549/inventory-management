import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { CreatAuthContext } from "../../Firebase/Authprovider";
import Swal from "sweetalert2"; // Ensure you have SweetAlert2 installed
import { Helmet } from "react-helmet-async";

const CreateNotice = () => {
    const [categorypost, setcategorypost] = useState("");
    const [userRole, setUserRole] = useState(null);
    const { user } = useContext(CreatAuthContext);
    const date = new Date();

    const handelCategory = (e) => {
        setcategorypost(e.target.value);
    };

    useEffect(() => {
        axios.get("https://inventory-management-one-psi.vercel.app/getuser")
            .then((result) => {
                const foundUser = result.data.find(raninguser => raninguser.email === user.email);
                setUserRole(foundUser);
            })
            .catch((error) => {
                console.error("Error fetching user role:", error);
            });
    }, [user]);

    const poster = {
        name: userRole?.name,
        email: userRole?.email,
        number: userRole?.number,
        role: userRole?.role
    };

    const handelCreateNotice = async (e) => {
        e.preventDefault();
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const post = {
            subject,
            categorypost,
            message,
            date,
            poster
        };

        try {
            const res = await axios.post("https://inventory-management-one-psi.vercel.app/adminpost", post);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Notice created successfully!",
                });
            }
        } catch (error) {
            console.error("Error creating notice:", error);
        }
    };

    return (
        <div className="bg-green-50 font-[sans-serif] lg:h-screen">
            <Helmet>
                <title>Home || dashboard Create notice</title>
            </Helmet>
            <div className="items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
                <div className="max-lg:mx-auto max-lg:text-center max-lg:mb-6">
                    <h2 className="text-4xl font-extrabold text-gray-800">Create Admin Notice</h2>
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                        A garment owner may issue notices on work schedules, wages, safety protocols, policy changes, production targets, and employee benefits. These notices ensure employees stay informed about shifts, pay, health guidelines, compliance, and general company updates, promoting a safe, compliant, and productive workplace.
                    </p>
                    <form onSubmit={handelCreateNotice} className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter Your Subject"
                            className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
                            required
                        />
                        <select
                            className="text-gray-800 bg-[#f0f1f2] w-full text-sm px-4 py-3.5 rounded-md outline-blue-500"
                            required
                            onChange={handelCategory}
                            value={categorypost}
                        >
                            <option value="">Select a role</option>
                            <option value="allworker">All worker</option>
                            <option value="worker">Worker</option>
                            <option value="supervisor">Supervisor</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        <textarea
                            placeholder="Message"
                            name="message"
                            rows={6}
                            className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="text-gray-800 bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateNotice;
