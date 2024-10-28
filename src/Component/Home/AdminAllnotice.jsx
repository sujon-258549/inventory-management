import axios from "axios";
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../customhuk/UseAdmin";
import Loding from '../../Component/Loding/Loding.jsx'

const AdminAllnotice = () => {
    const [isAdmin] = useAdmin();

    const { data: allsupervisor = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['adminPosts'],
        queryFn: async () => {
            const result = await axios.get('https://inventory-management-one-psi.vercel.app/adminpostget');
            const foundUsers = result.data.filter(user =>
                user.categorypost === "allworker" && user.poster.role === "admin"
            );
            return foundUsers.sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        onError: (error) => {
            console.error("Error fetching posts:", error);
        },
    });

    const handelworkerdelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://inventory-management-one-psi.vercel.app/adminpostgetdelete/${id}`)
                    .then(() => {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        refetch();
                    })
                    .catch((error) => {
                        console.error("Error deleting supervisor:", error);
                        Swal.fire("Error!", "There was a problem deleting the supervisor.", "error");
                    });
            }
        });
    };

    if (isError) {
        return <div>Error loading posts. Please try again later.</div>;
    }
    if (isLoading) {
        return <div><Loding></Loding> </div>
    }

    return (
        <div className="pt-20 md:pt-32">
            <Helmet>
                <title>Home || Dashboard Admin Post</title>
            </Helmet>
            {
                allsupervisor.length === 0 ? (
                    <div className="flex -mt-20 justify-center mx-auto">
                        <img className="max-h-[600px]" src="https://web.programming-hero.com/static/media/empty.9b191077.png" alt="No Data" />
                    </div>
                ) : (
                    allsupervisor.map((data) => (
                        <div key={data._id} className="max-w-5xl mx-auto bg-gray-100 p-10 rounded font-sans mb-6" style={{ boxShadow: '1px 1px 10px' }}>
                            <div>
                                <p>{new Date(data.date).toLocaleDateString()}</p>
                                <h2 className="text-gray-800 text-2xl font-bold mb-4">
                                    {data.subject || "Your Content Section Title"}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {data.message || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                                </p>
                                <div className={isAdmin ? "flex justify-between items-end" : ''}>
                                    <div className="mt-4 flex justify-between items-center flex-wrap">
                                        <p>
                                            <span>{data.poster.name || "Poster Name"}</span><br />
                                            <span>{data.poster.email || "Poster Email"}</span>
                                            <p>{data.poster.number || "Number"}</p>
                                            <p className="text-green-600">{data.poster.role || "Role"}</p>
                                        </p>
                                    </div>

                                    <div>
                                        {isAdmin && (
                                            <button
                                                onClick={() => handelworkerdelete(data._id)}
                                                className="group flex mx-auto justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-5 py-2 border text-left p-1 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                                            >
                                                <MdDelete className="text-3xl" />
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }

        </div>
    );
};

export default AdminAllnotice;
