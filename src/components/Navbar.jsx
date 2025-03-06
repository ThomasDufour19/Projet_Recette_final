// Navbar Component - Provides navigation links for the application
// - Uses Bootstrap for styling
// - Allows users to navigate between Home, Favorites, and Login

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    // Bootstrap Navbar with dark theme
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Recipes App</Navbar.Brand> {/* App title */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Mobile menu toggle */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Home Page */}
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link> {/* Favorites Page */}
            <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Login Page */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
