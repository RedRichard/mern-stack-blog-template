import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Redirect } from "react-router-dom";

import axios from "axios";

export default function TextoEdit(props) {
  const [edited, setEdited] = useState();
  const [deleted, setDeleted] = useState();
  const [texto, setTexto] = useState({
    type: "",
    title: "",
    subtitle: "",
    text: "",
    image: "",
    created: "",
  });

  useEffect(() => {
    axios
      .get(
        `http://localhost:9000/textos/${props.match.params.type}/${props.match.params.id}`
      )
      .then((res) => {
        setTexto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id, props.match.params.type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:9000/textos/${props.match.params.type}/${props.match.params.id}`,
        texto
      )
      .catch((err) => {
        console.log(err);
      });
    setEdited(true);
  };

  const onClickDelete = async (e) => {
    e.preventDefault();
    await axios
      .delete(
        `http://localhost:9000/textos/${props.match.params.type}/${props.match.params.id}`
      )
      .catch((err) => {
        console.log(err);
      });
    setDeleted(true);
  };

  if (edited) {
    return (
      <Redirect
        to={{
          pathname: `/${props.match.params.type}/${props.match.params.id}`,
        }}
      />
    );
  } else if (deleted) {
    return (
      <Redirect
        to={{
          pathname: `/${props.match.params.type}`,
        }}
      />
    );
  } else {
    return (
      <>
        <Container onSubmit={handleSubmit}>
          <Form>
            <Form.Group controlId="formGroupType">
              <Form.Label>Tipo de texto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nueva imagen"
                value={texto.type}
                onChange={(e) => setTexto({ ...texto, type: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nuevo título"
                value={texto.title}
                onChange={(e) => setTexto({ ...texto, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formGroupSubtitle">
              <Form.Label>Subtítulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nuevo subtítulo"
                value={texto.subtitle}
                onChange={(e) =>
                  setTexto({ ...texto, subtitle: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formGroupImage">
              <Form.Label>Link de la imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nueva imagen"
                value={texto.image}
                onChange={(e) => setTexto({ ...texto, image: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formGroupText">
              <Form.Label>Texto</Form.Label>
              <Form.Control
                as="textarea"
                rows="20"
                placeholder="Nueva imagen"
                value={texto.text}
                onChange={(e) => setTexto({ ...texto, text: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="danger" onClick={onClickDelete}>
              Borrar
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
