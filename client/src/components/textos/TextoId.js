import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";

import axios from "axios";
import moment from "moment";

export default function TextoId(props) {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/textos/${props.match.params.type}/${props.match.params.id}`
      )
      .then((res) => {
        setTexto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id, props.match.params.type]);

  return (
    <>
      <Container>
        <Image src={texto.image} alt="Content" fluid />
        <h4>{texto.title}</h4>
        <h6>{texto.subtitle}</h6>
        <p>{moment(texto.created).format("DD-MM-YYYY")}</p>
        <p>{texto.text}</p>
        <LinkContainer to={`/${texto.type}/${props.match.params.id}/edit`}>
          <Button texto={texto}>Editar</Button>
        </LinkContainer>
      </Container>
    </>
  );
}
