import React from "react";
import {Navigate, Outlet} from "react-router-dom";


const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
