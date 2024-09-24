import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import NavbarHeader from "../components/Navbar";

export const withLogging = (WrappedComponent) => {
  return (props) => {
    const [logged, setLogged] = useState(
      localStorage.getItem("isLoggedIn") === "true"
    );
    useEffect(() => {
      setLogged(localStorage.getItem("isLoggedIn") === "true");
    }, [logged]);

    return (
      <>
        {logged && <NavbarHeader />}
        {logged ? <WrappedComponent /> : <Navigate to="/login" />}
      </>
    );
  };
};
