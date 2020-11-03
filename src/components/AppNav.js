import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNav() {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="navbar-brand nav-link">Awkward Math</Link>
          <Link to="/art-of-math-proof" className="nav-link">Art of Math Proof</Link>
          <Link to="/awkward-state-machines" className="nav-link">Awkward State Machines</Link>
          <Link to="/color-graphing" className="nav-link">Color Graphing</Link>
          <Link to="/videos" className="nav-link">Videos</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
