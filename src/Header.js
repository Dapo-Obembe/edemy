import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Css/header.css";

function Header() {
  const navBar = {
    color: "#fff",
    backgroundColor: "var(--Secondary-clr)",
  };

  const navBarCollapse = {
    color: "#fff",
    backgroundColor: "var(--Primary-clr)",
    padding: "1rem 0",
  };
  return (
    <>
      <header className="header">
        <Navbar expand="lg">
          <Container className="header-container">
            <Navbar.Brand href="#home" id="logo">
              e-Demy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={navBar} />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
              style={navBarCollapse}
            >
              <Nav className="me-auto nav-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/teachers">Teachers</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
