import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import TextoCard from "./textos/TextoCard";

export default function MenuPrincipalIndex() {
  const [textos, setTextos] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/textos/")
      .then((res) => {
        setTextos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const textoList = () => {
    // console.log("Textos" + textos);
    return textos.map((currentTexto, i) => {
      return <TextoCard texto={currentTexto} key={i}></TextoCard>;
    });
  };

  return (
    <Container>
      <p>Bienvenido a mi blog</p>
      <Row xs={1} sm={2} md={3} lg={4}>
        {textoList()}
      </Row>
      <br />
      <Row>
        <LinkContainer to={`/new`}>
          <Button>Crear nuevo contenido</Button>
        </LinkContainer>
      </Row>
    </Container>
  );
}
