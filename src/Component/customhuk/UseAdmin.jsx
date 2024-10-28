import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin = () => {
    const { user } = useContext(CreatAuthContext);

    const { data: isAdmin} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            if (!user?.email) return false; // Prevents axios call if email is not available
            const res = await axios.get(`https://inventory-management-one-psi.vercel.app/user/admin/${user.email}`);
           console.log(res?.data?.admin)
            return res?.data?.admin; 
        },
       
    });

    return [isAdmin];
};

export default useAdmin;
