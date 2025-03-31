import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = JSON.parse(localStorage.getItem("userInfo")) || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
