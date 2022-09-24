import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PublicRoute = ({ children }) => {
  const auth = useAuth();

  return !auth ? children : <Navigate to="/inbox/home" />;
};

export default PublicRoute;
