
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CreatAuthContext } from "../Firebase/Authprovider";

const Privaterouter = ({children}) => {
    const {user} = useContext(CreatAuthContext);
    if(user){
        return children
    }
   
        return <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
    
};

export default Privaterouter;