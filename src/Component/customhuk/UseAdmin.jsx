
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Useadmin = () => {
    const {user} = useContext(CreatAuthContext)
    const {data : isadmin} = useQuery({
        queryKey:[user?.email, "isadmin"],
        queryFn: async()=>{
            const res = await axios.get(`http://localhost:3000/user/admin/${user.email}`)
            return res?.data.admin
        }
    })
    return {isadmin}
       
};

export default Useadmin;