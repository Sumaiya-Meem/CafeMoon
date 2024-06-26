import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { ContextProvider } from "../Context/AuthProvider";


const useAdmin = () => {
    const { user, loading } = useContext(ContextProvider);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;