import { signOut } from "firebase/auth";
import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar className="nav-background" variant="light" sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h2 className="nav-brand">Roy&Fashions</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" active>
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
          <div className="d-flex">
            {user ? (
              <div className="d-flex justify-center align-items-center">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    See More
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/manageItem">
                      Manage Items
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/addItem">Add Item</Dropdown.Item>
                    <Dropdown.Item href="#/myItems">My Items</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button
                  className="btn btn-link text-decoration-none text-dark"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Nav.Link className="text-dark" as={Link} to="/login" active>
                Login
              </Nav.Link>
            )}
            <Nav.Link as={Link} className="text-dark" to="/register" active>
              Register
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
