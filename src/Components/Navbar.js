import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

class NavBar extends Component {
  render() {
    const guestLinks = (
      <ReactBootStrap.Nav>
        <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    );

    const userLinks = (
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/list">
          User List
        </ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/register">
          Register Form
        </ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="/addItem">
          Add Item
        </ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown
          title="Dropdown"
          id="collasible-nav-dropdown"
        >
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">
            Action
          </ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">
            Another action
          </ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">
            Something
          </ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">
            Separated link
          </ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
    );

    return (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/home">
          ThePustakari
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/list">
              User List
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/about">
              About
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/addItem">
              Add Item
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="edit">
                Edit
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="/listTesting">
                List Testing
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/login">
              Login
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/register">
              Register
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}

export default NavBar;
