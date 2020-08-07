import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

export default class ArticulosId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulo: {},
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    // console.log("ID: " + id);
    axios
      .get("http://localhost:9000/articulos/" + id)
      .then((res) => {
        this.setState({ articulo: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let id = this.props.match.params.id;
    return (
      <Container>
        <Col xs={6} md={4}>
          <Image src={this.state.articulo.image} thumbnail />
        </Col>
        <h4>{this.state.articulo.title}</h4>
        <h6>{this.state.articulo.subtitle}</h6>
        <p>{this.state.articulo.created}</p>
        <p>{this.state.articulo.text}</p>
        <Button
          as={Link}
          to={{
            pathname: `/articulos/${id}/edit`,
            articulo: this.state.articulo,
          }}
        >
          Editar
        </Button>
      </Container>
    );
  }
}
