import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseAllsupervisor = () => {
    const { data: allsupervisor = [], refetch, isLoading, isError } = useQuery({
        queryKey: ["allsupervisor"],
        queryFn: async () => {
            const result = await axios.get('https://inventory-management-one-psi.vercel.app/getuser');
            return result.data.filter(user => user.role === "supervisor");

        }
    });

    return { allsupervisor, refetch, isLoading, isError };
};

export default UseAllsupervisor;
