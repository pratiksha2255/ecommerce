// import React from 'react';
import { Navigate } from "react-router-dom";
import NavbarHeader from "../components/Navbar";

export const withLogging = (WrappedComponent) => {
<<<<<<< HEAD
  const isAuth = () => localStorage.getItem("isLoggedIn");
  return () => {
    return (
      <>
        {isAuth ? <NavbarHeader /> : null}
        {isAuth ? <WrappedComponent /> : <Navigate to="/login" />}
=======
    const isAuth = localStorage.getItem("isLoggedIn");
  return () => {
    return (
      <>
      {isAuth ? <NavbarHeader />:null}
      {isAuth ? <WrappedComponent /> : <Navigate to="/login" />}
       
>>>>>>> 30370c34c8c2fb5a6f4820bad3ebc61b30289c15
      </>
    );
  };
};
