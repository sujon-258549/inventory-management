import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseSupervisor = () => {
    const { user } = useContext(CreatAuthContext);

    const { data: isSupervisor } = useQuery({
        queryKey: [user?.email, "isSupervisor"],
        queryFn: async () => {
            if (!user?.email) return false; 
                const res = await axios.get(`http://localhost:3000/user/supervisor/${user.email}`);
                console.log("Supervisor status:", res?.data?.supervisor);
                return res?.data?.supervisor;
            
        },
    });

    return [isSupervisor];
};

export default UseSupervisor;
