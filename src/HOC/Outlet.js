import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import NavbarHeader from "../components/Navbar";

export const withLogging = (WrappedComponent) => {
  return () => {
    const isAuth = () => {
      return localStorage.getItem("isLoggedIn");
    };
    return (
      <>
        {isAuth() ? <NavbarHeader /> : null}
        {isAuth() ? <WrappedComponent /> : <Navigate to="/login" />}
      </>
    );
  };
};
