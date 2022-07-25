import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Css/header.css";

function Header() {
  return (
    <>
      <header className="header">
        <Navbar expand="lg">
          <Container className="header-container">
            <Navbar.Brand href="#home" id="logo">
              e-Demy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto nav-links">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Teachers</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
