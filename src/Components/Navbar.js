import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Cookies from "universal-cookie";

import { withRouter } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const cookies = new Cookies();
    cookies.remove("accessToken");
    const token = cookies.get("accessToken");
    this.props.history.push("/");
    console.log("accessToken: " + token);
  }

  render() {
    const guestLinks = (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position
      >
        <ReactBootStrap.Navbar.Brand href="/home">
          ThePustakari
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/login">
              Login
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.Nav.Link
              href=""
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );

    const userLinks = (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position
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
              <ReactBootStrap.NavDropdown.Item href="">
                Edit No Working
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

            <ReactBootStrap.Nav.Link
              href=""
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
    return (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        position
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
              <ReactBootStrap.NavDropdown.Item href="">
                Edit No Working
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

            <ReactBootStrap.Nav.Link
              href=""
              onClick={() => {
                this.logout();
              }}
            >
              Logout
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}

export default withRouter(NavBar);
