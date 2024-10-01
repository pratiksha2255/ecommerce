import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarHeader() {
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();
  const navStyle = {
    backgroundColor: "rgb(20 67 115)", // Light background
    padding: "20px",
  };

  const navLinkStyle = {
    color: "rgb(233 236 239)",
    fontWeight: "bold",
    marginRight: "50px",
  };
  function logout() {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  }

  function login() {
    navigate("/login");
  }

  return (
    <>
      <Navbar style={navStyle} bg="light" data-bs-theme="dark">
        <Container>
          <Link to="/dashboard" style={navLinkStyle}>
            Dashboard
          </Link>
          <Link to="/about" style={navLinkStyle}>
            About Us
          </Link>
          <Link to="/contact" style={navLinkStyle}>
            Contact
          </Link>
          {localStorage.getItem("isLoggedIn") ? (
            <Link onClick={() => logout()} style={navLinkStyle}>
              Logout
            </Link>
          ) : (
            <Link onClick={() => login()} style={navLinkStyle}>
              Login
            </Link>
          )}
          <Link to="/cart" style={navLinkStyle}>
            Cart {cart}
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
