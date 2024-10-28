import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseSupervisor from "../../customhuk/UseSuparviser";
import useAdmin from "../../customhuk/UseAdmin";
import UseMarketing from "../../customhuk/UseMarketing";
import Loding from "../../Loding/Loding";

const GetSupervisorpost = () => {
    const [isSupervisor] = UseSupervisor()
    const [isAdmin] = useAdmin()
    const [isMarketing] = UseMarketing()
    const { data: alldata, refetch, isLoading, error } = useQuery({
        queryKey: ["allproduct"],
        queryFn: async () => {
            const result = await axios.get('https://inventory-management-one-psi.vercel.app/getproduct');
            const sortedProducts = result.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedProducts;
        },
    });

    const handleDeleteProduct = (id) => {
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
                axios.delete(`https://inventory-management-one-psi.vercel.app/deleteproduct/${id}`)
                    .then(() => {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        refetch(); // Refetch data after deletion
                    })
                    .catch((error) => {
                        console.error("Error deleting supervisor:", error);
                        Swal.fire("Error!", "There was a problem deleting the supervisor.", "error");
                    });
            }
        });
    };

    // Handle loading state
    if (isLoading) {
        return <div><Loding></Loding></div>;
    }

    // Handle error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex gap-5 flex-wrap justify-center">
            {alldata.map(product => (
                <div key={product._id} className="w-96 min-h-80 duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
                    <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
                    <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
                    <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
                    <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
                    <div className="z-10 flex flex-col justify-evenly w-full h-full">
                        <span className="text-2xl font-bold">{product.name}</span>
                        <span className="text-lg">{product.email}</span>
                        <span className="text-lg">Store product: {product.number}</span>
                        <span className="text-md text-neutral-400">{product.message.slice(0, 30)}...........</span>
                        <div className="flex gap-2 justify-center">
                            <Link to={`/dashboard/sproduct/${product._id}`} className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3 mt-4 mx-auto text-center">See more</Link>
                            {
                                (isAdmin || isMarketing || isSupervisor) && (
                                    <>
                                        <Link to={`/dashboard/updateproduct/${product._id}`} className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3 mt-4 mx-auto text-center">
                                            Update
                                        </Link>

                                    </>
                                )
                            }

                            {
                                isAdmin && <button onClick={() => handleDeleteProduct(product._id)} className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3 mt-4 mx-auto text-center">
                                    Delete
                                </button>
                            }

                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default GetSupervisorpost;
