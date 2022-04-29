import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <Navbar className="nav-background" variant="light" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h2 className="nav-brand">Roy&Sarees</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" active>
              Home
            </Nav.Link>
            <Nav.Link href="home#inventory" active>
              Inventory Items
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" active>
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active>
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
