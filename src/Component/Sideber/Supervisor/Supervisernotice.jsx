import axios from "axios";
import { useEffect, useState } from "react";

const Supervisernotice = () => {
    const [allWorker, setAllWorker] = useState([]);

    useEffect(() => {
        axios.get('https://inventory-management-one-psi.vercel.app/adminpostget')
            .then((result) => {
                const foundUsers = result?.data?.filter(user =>
                    (user.categorypost === "supervisor" && user.poster.role === "supervisor") || user.categorypost === 'allworker'
                );

                // Sort by date in descending order (newest first)
                const sortedUsers = foundUsers.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAllWorker(sortedUsers);
            })
            .catch((error) => {
                console.error("Error fetching user role:", error);
            });
    }, []);

    return (
        <div>
            {allWorker.map((data) => (
                <div key={data._id} className="max-w-5xl mx-auto bg-gray-100 p-10 rounded font-sans mb-6">
                    <div>
                        <p>{new Date(data.date).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                        <h2 className="text-gray-800 text-2xl font-bold mb-4">
                            {data.subject || "Your Content Section Title"}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-base">
                            {data.message || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                        </p>
                        <div className="mt-4 flex justify-between items-center flex-wrap">
                            <p>
                                <span>{data.poster?.name || "Poster Name"}</span><br />
                                <span>{data.poster?.email || "Poster Email"}</span>
                                <p>{data.poster?.role || "Number"}</p>
                            </p>
                            <p>{data.poster?.number || "Number"}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Supervisernotice;
