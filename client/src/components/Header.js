import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/textos/type/all")
      .then((res) => {
        setTipos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const tipoList = () => {
    // console.log("Tipos: " + tipos);
    return tipos.map((currentTipo, i) => {
      return (
        <LinkContainer to={`/${currentTipo}`} key={i}>
          <Nav.Link>{currentTipo.toUpperCase()}</Nav.Link>
        </LinkContainer>
      );
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">TSIC2</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">{tipoList()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
