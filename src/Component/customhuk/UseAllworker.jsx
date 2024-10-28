import { useQuery } from "@tanstack/react-query"
import axios from "axios";


const UseAllworker = () => {

    const { data: allworker = [] ,refetch, isLoading} = useQuery({
        queryKey: ['allworker'],
        queryFn: async () => {
            const result = await axios.get('https://inventory-management-one-psi.vercel.app/getuser');
            return result.data.filter(user => user.role === "worker");
        }
    })
    return { allworker,refetch, isLoading }

}

export default UseAllworker
