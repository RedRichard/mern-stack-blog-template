import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ErrorMessage from "../misc/ErrorMessage";

export default function ArticulosNew() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const [titleId, setTitleId] = useState();
  const [createdNew, setCreatedNew] = useState(false);
  const [error, setError] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let newArticle = {
        title,
        subtitle,
        text,
        image,
        titleId,
      };

      // console.log("Objeto: " + newArticle);

      await axios.post("http://localhost:9000/articulos/", newArticle);

      setCreatedNew(true);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  if (createdNew) {
    return <Redirect to={{ pathname: "/articulos" }} />;
  } else {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h2>Nuevo artículo</h2>
        </Row>
        <Row className="justify-content-md-center">
          {error && (
            <Row className="justify-content-md-center">
              <ErrorMessage
                message={error}
                clearError={() => setError(undefined)}
              />
            </Row>
          )}
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="8">
            <Form onSubmit={onSubmit}>
              <Form.Label>Título del artículo</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Nuevo artículo"
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleId(
                    e.target.value
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "-")
                      .toLowerCase()
                  );
                }}
              />
              <Form.Label>Subtítulo del artículo</Form.Label>
              <Form.Control
                name="subtitle"
                type="text"
                placeholder="Subtítulo"
                onChange={(e) => setSubtitle(e.target.value)}
              />
              <Form.Label>Link a la imagen del artículo</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Link"
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.Label>Texto del artículo</Form.Label>
              <Form.Control
                name="text"
                as="textarea"
                rows="5"
                onChange={(e) => setText(e.target.value)}
              />
              <Row>
                <Button variant="primary" type="submit">
                  Crear
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
