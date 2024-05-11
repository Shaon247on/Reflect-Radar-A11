import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <div className="w-full h-full flex justify-center my-auto mt-[150px]">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;