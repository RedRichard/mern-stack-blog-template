import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TextoCard from "./TextoCard";

export default function TipoIndex(props) {
  const [textos, setTextos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/textos/" + props.match.params.type)
      .then((res) => {
        setTextos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.type]);

  const textoList = () => {
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
    </Container>
  );
}
