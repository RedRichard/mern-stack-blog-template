import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ArticuloCard from "./ArticuloCard";

export default class ArticulosIndex extends Component {
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
    return (
      <div className="container">
        <p>Este es el Index de Artículos. Bienvenido.</p>
        <Link to="/articulos/new" className="navbar-brand">
          <button type="button" className="btn btn-primary btn-sm">
            Crear nuevo artículo
          </button>
        </Link>
        <div className="row">{this.articleList()}</div>
      </div>
    );
  }
}
