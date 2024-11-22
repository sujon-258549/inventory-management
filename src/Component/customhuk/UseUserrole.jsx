import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";

const UseUserrole = () => {
  const { user } = useContext(CreatAuthContext);

  const { data: isUserrole, isLoading } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const result = await axios.get(
        "https://inventory-management-one-psi.vercel.app/getuser"
      );
      const foundUser = result.data.find(
        (raninguser) => raninguser.email === user.email
      );
      return foundUser;
    },
  });

  return [isUserrole, isLoading];
};

export default UseUserrole;
