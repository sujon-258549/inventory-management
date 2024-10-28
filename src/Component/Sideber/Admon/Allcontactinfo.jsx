import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Link } from "react-router-dom";
import { MdLocalLibrary } from "react-icons/md";

const Allcontactinfo = () => {
    const [allSupervisors, setAllSupervisors] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSupervisors = async () => {
            try {
                const result = await axios.get('https://inventory-management-one-psi.vercel.app/getcontact');
                const sortedUsers = result.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAllSupervisors(sortedUsers);
                setError(null);
            } catch (error) {
                console.error("Error fetching user role:", error);
                setError("Failed to load supervisors. Please try again later.");
            }
        };

        fetchSupervisors();
    }, []);

    // const handleEdit = (id) => {
    //     // Implement edit functionality here
    //     console.log(`Edit supervisor with ID: ${id}`);
    // };

    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete(`https://inventory-management-one-psi.vercel.app/deletecontact/${id}`);
    //         setAllSupervisors(allSupervisors.filter(supervisor => supervisor._id !== id));
    //     } catch (error) {
    //         console.error("Error deleting supervisor:", error);
    //     }
    // };

    return (
        <div>
            {error && <h1 className="text-red-500">{error}</h1>}
            <div>
                {allSupervisors.length <= 0 ? (
                    <h1 className="text-4xl font-bold font-playfair">No supervisor</h1>
                ) : (
                    <div className="font-sans overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 whitespace-nowrap">
                                <tr>
                                    <th className="p-4 text-left text-sm font-medium text-white">Name</th>
                                    <th className="p-4 text-left text-sm font-medium text-white">Email</th>
                                    <th className="p-4 text-left text-sm font-medium text-white">Number</th>
                                    <th className="p-4 text-left text-sm font-medium text-white">Joined At</th>
                                    <th className="p-4 text-left text-sm font-medium text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="whitespace-nowrap">
                                {allSupervisors.map(supervisor => (
                                    <tr className="even:bg-blue-50" key={supervisor._id}>
                                        <td className="p-4 text-sm text-black">{supervisor.name}</td>
                                        <td className="p-4 text-sm text-black">{supervisor.email}</td>
                                        <td className="p-4 text-sm text-black">{supervisor.number}</td>
                                        <td className="p-4 text-sm text-black">
                                            {supervisor.date ? format(new Date(supervisor.date), 'yyyy-MM-dd') : "N/A"}
                                        </td>
                                        <td className="p-4">
                                            {/* <button onClick={() => handleEdit(supervisor._id)} className="mr-4" title="Edit">
                                                <CiBookmark className="text-2xl" />
                                            </button> */}
                                            <Link to={`/dashboard/detail/${supervisor._id}`} className="bg-custom-red">
                                                <MdLocalLibrary className="text-4xl p-1 rounded-md bg-custom-red text-white"></MdLocalLibrary>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Allcontactinfo;
