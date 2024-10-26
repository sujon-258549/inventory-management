import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseMarketing = () => {
    const { user } = useContext(CreatAuthContext);

    const { data: isMarketing } = useQuery({
        queryKey: [user?.email, "isMarketing"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/user/marketing/${user.email}`);
            console.log("Marketing status:", res?.data?.marketing);
            return res?.data?.marketing;
        },
        enabled: !!user?.email // Only runs if user email exists
    });

    return [isMarketing];
};

export default UseMarketing;
