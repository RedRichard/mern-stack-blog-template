import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import UserContext from "../context/UserContext";

import ArticuloCard from "./ArticuloCard";

class ArticulosIndex extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = { articulos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/articulos/")
      .then((res) => {
        //console.log(res.data);
        this.setState({ articulos: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  articleList() {
    return this.state.articulos.map((currentArticle, i) => {
      return <ArticuloCard articulo={currentArticle} key={i} />;
    });
  }

  render() {
    let context = this.context;

    return (
      <Container>
        <p>Este es el Index de Artículos. Bienvenido.</p>
        {context.userData.token && context.userData.user && (
          <Button as={Link} to="/articulos/new">
            Crear nuevo artículo
          </Button>
        )}
        <Container>
          <Row>{this.articleList()}</Row>
        </Container>
      </Container>
    );
  }
}

export default ArticulosIndex;
