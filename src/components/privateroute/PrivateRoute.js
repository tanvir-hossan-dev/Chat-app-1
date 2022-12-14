import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/register" />;
};

export default PrivateRoute;
