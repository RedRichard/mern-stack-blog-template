import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div className="container">
        <img
          src={this.state.articulo.image}
          className="img-fluid col-6"
          alt="Content"
        />
        <h4>{this.state.articulo.title}</h4>
        <h6>{this.state.articulo.subtitle}</h6>
        <p>{this.state.articulo.created}</p>
        <p>{this.state.articulo.text}</p>
        <Link
          to={{
            pathname: `/articulos/${id}/edit`,
            articulo: this.state.articulo,
          }}
          className="navbar-brand"
        >
          <button className="btn btn-primary">Editar</button>
        </Link>
      </div>
    );
  }
}
