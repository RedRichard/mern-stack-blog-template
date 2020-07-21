import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Articulo = (props) => (
  <div>
    <h2>{props.articulo.title}</h2>
    <h4>{props.articulo.subtitle}</h4>
    {/*<h5>{props.articulo.author.username}</h5>*/}
    <span>{props.articulo.created}</span>
    <p>{props.articulo.text}</p>
  </div>
);

export default class ArticulosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { articulos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/articulos/")
      .then((res) => {
        console.log(res.data);
        this.setState({ articulos: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  articleList() {
    return this.state.articulos.map((currentArticle, i) => {
      return <Articulo articulo={currentArticle} key={i} />;
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
        <div>{this.articleList()}</div>
      </div>
    );
  }
}
