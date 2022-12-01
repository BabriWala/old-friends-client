import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Pages/Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // const navigate = useNavigate();

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user?.uid) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
