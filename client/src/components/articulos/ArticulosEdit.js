import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserContext from "../context/UserContext";

import ErrorMessage from "../misc/ErrorMessage";

export default function ArticulosEdit(props) {
  let { userData } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState();
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const [titleId, setTitleId] = useState();
  const [edited, setEdited] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:9000/articulos/" + props.match.params.id)
      .then((res) => {
        // console.log(res.data);
        let articulo = res.data;
        setTitle(articulo.title);
        setSubtitle(articulo.subtitle);
        setText(articulo.text);
        setImage(articulo.image);
        setTitleId(articulo.titleId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (userData.user)
      try {
        let newArticle = {
          title,
          subtitle,
          text,
          image,
          titleId,
        };

        // console.log("Objeto: " + newArticle);

        await axios.put(
          "http://localhost:9000/articulos/" + props.match.params.id,
          newArticle
        );

        setEdited(true);
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
  };

  const onDelete = async (e) => {
    e.preventDefault();

    if (userData.user)
      try {
        await axios.delete(
          "http://localhost:9000/articulos/" + props.match.params.id
        );
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
  };

  if (edited) {
    return <Redirect to={{ pathname: `/articulos/${titleId}/` }} />;
  } else if (userData.user) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h2>Editar artículo</h2>
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
                defaultValue={title}
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
                defaultValue={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
              <Form.Label>Link a la imagen del artículo</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Link"
                defaultValue={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.Label>Texto del artículo</Form.Label>
              <Form.Control
                name="text"
                as="textarea"
                rows="5"
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Row>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
                <Button variant="danger" onClick={onDelete}>
                  Borrar
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Redirect to={{ pathname: `/articulos/` }} />;
  }
}
