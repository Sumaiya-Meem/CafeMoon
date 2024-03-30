import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../Pages/Context/AuthProvider";
import useAdmin from "../Pages/Hooks/useAdmin";



// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(ContextProvider);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;