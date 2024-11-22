import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseSupervisor = () => {
  const { user } = useContext(CreatAuthContext);

  const { data: isSupervisor, isLoading } = useQuery({
    queryKey: [user?.email, "isSupervisor"],
    queryFn: async () => {
      if (!user?.email) return false;
      const res = await axios.get(
        `https://inventory-management-one-psi.vercel.app/user/supervisor/${user.email}`
      );
      console.log("Supervisor status:", res?.data?.supervisor);
      return res?.data?.supervisor;
    },
  });

  return [isSupervisor, isLoading];
};

export default UseSupervisor;
