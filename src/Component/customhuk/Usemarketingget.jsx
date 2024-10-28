import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Usemarketingget = () => {
    const { data: allmarketing = [],refetch, isLoading, isError } = useQuery({
        queryKey: ["allsupervisor"],
        queryFn: async () => {
            const result = await axios.get('https://inventory-management-one-psi.vercel.app/getuser');
            return result.data.filter(user => user.role === "marketing");
        }
    });

    return { allmarketing,refetch, isLoading, isError };
};

export default Usemarketingget;
