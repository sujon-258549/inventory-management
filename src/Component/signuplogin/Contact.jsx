import axios from "axios";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    const navigate = useNavigate();
    const date = new Date().toISOString(); // Store date as ISO string

    const handleContactFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const contactInfo = {
            name: formData.get("name"),
            email: formData.get("email"),
            number: formData.get("number"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            date
        };





        try {
            const response = await axios.post('https://inventory-management-one-psi.vercel.app/contact', contactInfo);
            if (response.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "User created successfully!",
                });
                navigate('/');
            }
        } catch (error) {
            console.error("There was an error submitting the form:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was a problem submitting your message. Please try again.",
            });
        }
    };

    return (
        <div className="pt-28 px-5 pb-10">
            <Helmet>
                <title>Home || Contact</title>
            </Helmet>
            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#2e0249] rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
                        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                            Have some big idea or brand to develop and need help? Then reach out
                            we'd love to hear about your project and provide help.
                        </p>
                        <ul className="mt-12 space-y-8">
                            <li className="flex items-center">
                                <MdOutlineEmail className="text-white" size={20} />
                                <a href="mailto:info@example.com" className="text-white text-sm ml-4">
                                    info@example.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-white" size={16} />
                                <a href="tel:+158996888" className="text-white text-sm ml-4">
                                    +158 996 888
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaLocationArrow className="text-white" size={16} />
                                <span className="text-white text-sm ml-4">
                                    123 Street 256 House
                                </span>
                            </li>
                        </ul>

                        <>
 
                            <ul className="wrapper">
                                <li className="icon facebook">
                                    <span className="tooltip">Facebook</span>
                                    <svg
                                        viewBox="0 0 320 512"
                                        height="1.2em"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </li>
                                <li className="icon twitter">
                                    <span className="tooltip">Twitter</span>
                                    <svg
                                        height="1.8em"
                                        fill="currentColor"
                                        viewBox="0 0 48 48"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="twitter"
                                    >
                                        <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                                    </svg>
                                </li>
                                <li className="icon instagram">
                                    <span className="tooltip">Instagram</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.2em"
                                        fill="currentColor"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </li>
                            </ul>
                        </>

                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <p className="text-2xl md:text-4xl text-center font-playfair font-extrabold text-gray-800">
                            Contact us
                        </p>
                        <form onSubmit={handleContactFormSubmit} className="mt-8 space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
                                required
                            />
                            <input
                                type="tel"
                                name="number"
                                placeholder="Enter Your Phone Number"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                name="message"
                                rows={6}
                                className="w-full rounded-lg px-4 text-gray-800 text-sm outline-[#a91079]"
                                required
                            />
                            <button type="submit" className="w-full py-2 px-4 bg-[#a91079] text-white rounded-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
