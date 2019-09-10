import React from "react";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

/*---Header section displaying the nav bar--- */
const loggedIn = true;
const name = prompt("Please enter name to Login");

function Header() {
  return (
    <header className="App-header">
      <Navbar bg="light" variant="light">
        {/*---Logo icon image --- */}
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="./Logo Icon3.png"
            width="40"
            height="40"
            padding="0"
            margin="0"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <h1 className="logoName"> Tech Square Development</h1>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/register">
            <Nav.Link href="#features">Register</Nav.Link>
          </Link>
          <Link to="about">
            <Nav.Link href="#pricing">About</Nav.Link>
          </Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/*---Login state function - change the value of loggedin in App.js to change state --- */}
            <a href="/">
              <h2 className="status">
                {loggedIn ? `Hello, ${name}` : "Please log in"}
                <i class="fa fa-user-circle-o" />
              </h2>
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
