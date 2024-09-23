// import React from 'react';
import { Navigate } from "react-router-dom";
import NavbarHeader from "../components/Navbar";

export const withLogging = (WrappedComponent) => {
    const isAuth = localStorage.getItem("isLoggedIn");
  return () => {
    return (
      <>
      {isAuth ? <NavbarHeader />:null}
      {isAuth ? <WrappedComponent /> : <Navigate to="/login" />}
       
      </>
    );
  };
};
