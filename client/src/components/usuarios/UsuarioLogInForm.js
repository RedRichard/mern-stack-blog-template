import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import UserContext from "../context/UserContext";
import ErrorMessage from "../misc/ErrorMessage";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UsuarioLogInForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let newUsuario = {
        username,
        password,
      };

      const loginRes = await axios.post(
        "http://localhost:9000/login",
        newUsuario
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      setLoggedIn(true);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  if (loggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <Container fluid="sm">
        <Row className="justify-content-sm-center">
          <Col lg="4" md="6">
            <div>
              <h2>Inicio de sesión</h2>
            </div>
            {error && (
              <ErrorMessage
                message={error}
                clearError={() => setError(false)}
              ></ErrorMessage>
            )}
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Nombre del usuario</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Log In!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
