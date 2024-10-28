import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseWorker = () => {
    const { user } = useContext(CreatAuthContext);

    const { data: isWorker } = useQuery({
        queryKey: [user?.email, "isWorker"],
        queryFn: async () => {
            if (!user?.email) return false; 
                const res = await axios.get(`https://inventory-management-one-psi.vercel.app/user/worker/${user.email}`);
                console.log("Supervisor status:", res?.data?.supervisor);
                return res?.data?.supervisor;
            
        },
    });

    return [isWorker];
};

export default UseWorker;