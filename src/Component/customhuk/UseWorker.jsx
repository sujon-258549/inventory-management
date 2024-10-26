import { useContext } from "react"
import { CreatAuthContext } from "../Firebase/Authprovider"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const UseWorker = () => {
    const { user } = useContext(CreatAuthContext)
    const { data: isWorker } = useQuery({
        queryKye: [user?.email, "isWorker"],
        queryFn: async () => {
            if (user?.email) {
                const res = await axios.get(`http://localhost:3000/user/worker/${user.email}`);
               console.log( res?.data?.worker ,"worker status")
                return res?.data?.worker
            }
        }
    })

    return [isWorker]
}

export default UseWorker
