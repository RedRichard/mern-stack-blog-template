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

export default function UsuarioRegisterForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [createdNew, setCreatedNew] = useState();

  const { setUserData } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let newUser = {
        username,
        password,
        passwordCheck,
        email,
      };

      await axios.post("http://localhost:9000/signup", newUser);

      const loginRes = await axios.post("http://localhost:9000/login", {
        username,
        password,
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      setCreatedNew(true);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  if (createdNew) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <Container fluid="sm">
        <Row className="justify-content-sm-center">
          <Col lg="4" md="6">
            <div>
              <h2>Registro</h2>
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
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

              <Form.Group>
                <Form.Control
                  name="passwordCheck"
                  type="password"
                  placeholder="Comprobación de contraseña"
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign me up!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
