import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavbarHeader() {
  const [cart, setCartCount] = useState(0);
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
          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link href="/dashboard" style={navLinkStyle}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/about" style={navLinkStyle}>
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" style={navLinkStyle}>
              Contact
            </Nav.Link>
            {localStorage.getItem("isLoggedIn") ? (
              <Nav.Link onClick={() => logout()} style={navLinkStyle}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => login()} style={navLinkStyle}>
                Login
              </Nav.Link>
            )}
            <Nav.Link href="/cart" style={navLinkStyle}>
              Cart {cart}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
