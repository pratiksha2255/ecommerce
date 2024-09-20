import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarHeader() {
  const navStyle = {
    backgroundColor: "rgb(20 67 115)", // Light background
    padding: "20px",
  };

  const navLinkStyle = {
    color: "rgb(233 236 239)",
    fontWeight: "bold",
    marginRight: "50px",
  };

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
            <Nav.Link href="/login" style={navLinkStyle}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHeader;
