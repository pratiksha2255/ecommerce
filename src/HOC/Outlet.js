import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import NavbarHeader from "../components/Navbar";

export const withLogging = (WrappedComponent) => {
  return () => {
    const isAuth = () => {
        console.log('requested', localStorage.getItem("isLoggedIn"))
      return localStorage.getItem("isLoggedIn");
    };
    useEffect(()=>{
        console.log('mounted',isAuth())
        isAuth()
    },[])
    return (
      <>
        {isAuth() ? <NavbarHeader /> : null}
        {isAuth() ? <WrappedComponent /> : <Navigate to="/login" />}
      </>
    );
  };
};
