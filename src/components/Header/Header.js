import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavItem, Container } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      // className="mb-5"
      className="custom-header"
      style={{
        fontSize: "19px"
      }}
    >
      <Container>
        <NavLink
          style={{ fontSize: "19px", color: "#eeeeee" }}
          className="navbar-brand"
          to="/"
        >
          Lass docker
        </NavLink>
        <Nav className="ml-auto">
          <NavLink
            className="nav-link"
            style={{ fontSize: "19px", color: "#eeeeee" }}
            to="/"
          >
            home
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
