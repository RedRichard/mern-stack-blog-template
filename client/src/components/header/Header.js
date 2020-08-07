import React, { Component } from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AuthButtons from "./AuthButtons";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Letras Transformadoras
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/articulos">
              Articulos
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <AuthButtons />
          </Nav>
        </Navbar>
      </>
    );
  }
}
