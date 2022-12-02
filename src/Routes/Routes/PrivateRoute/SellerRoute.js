import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../../Pages/Shared/Loader/Loader";

const SellerRoute = ({ children }) => {
  const { user, loading, currentUser, logOut } = useContext(AuthContext);
  // const navigate = useNavigate();

  if (loading) {
    return <Loader></Loader>;
  }

  if (currentUser?.role !== 'seller') {

    return (
      <>
      {<Navigate to={'/login'}/>}
      </>
    );
  }

  return children;
};

export default SellerRoute;
