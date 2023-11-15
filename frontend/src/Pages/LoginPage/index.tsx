import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const LoginPage = () => {
  const authContext = useAuthContext();
  return (
    <div className="container">
      {authContext.auth.isAuthenticated && <Navigate to="/" />}
      <Outlet />
    </div>
  );
};

export default LoginPage;
