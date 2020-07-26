import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class ArticulosEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulo: { title: "", subtitle: "", text: "", image: "" },
      edited: false,
      deleted: false,
    };
    this.id = "";

    this.onChangeArticuloTitle = this.onChangeArticuloTitle.bind(this);
    this.onChangeArticuloSubtitle = this.onChangeArticuloSubtitle.bind(this);
    this.onChangeArticuloText = this.onChangeArticuloText.bind(this);
    this.onChangeArticuloImage = this.onChangeArticuloImage.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.id = this.props.match.params.id;
    // console.log("ID: " + id);
    axios
      .get("http://localhost:9000/articulos/" + this.id)
      .then((res) => {
        this.setState({ articulo: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeArticuloTitle(event) {
    this.setState({
      articulo: {
        title: event.target.value,
        subtitle: this.state.articulo.subtitle,
        text: this.state.articulo.text,
        image: this.state.articulo.image,
      },
    });
  }

  onChangeArticuloSubtitle(event) {
    this.setState({
      articulo: {
        title: this.state.articulo.title,
        subtitle: event.target.value,
        text: this.state.articulo.text,
        image: this.state.articulo.image,
      },
    });
  }

  onChangeArticuloText(event) {
    this.setState({
      articulo: {
        title: this.state.articulo.title,
        subtitle: this.state.articulo.subtitle,
        text: event.target.value,
        image: this.state.articulo.image,
      },
    });
  }

  onChangeArticuloImage(event) {
    this.setState({
      articulo: {
        title: this.state.articulo.title,
        subtitle: this.state.articulo.subtitle,
        text: this.state.articulo.text,
        image: event.target.value,
      },
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log("Form sent");

    // console.log("Nuevo nombre: " + this.state.nombre);
    // console.log("Nuevo correo: " + this.state.correo);
    // console.log("Nuevo num: " + this.state.numTelefono);

    let newArticulo = {
      title: this.state.articulo.title,
      subtitle: this.state.articulo.subtitle,
      text: this.state.articulo.text,
      image: this.state.articulo.image,
    };

    // console.log("Nombre: " + newArticulo.nombre);
    // console.log("Correo: " + newArticulo.correo);
    // console.log("Numero: " + newArticulo.numTelefono);

    axios.put("http://localhost:9000/articulos/" + this.id, newArticulo).then(
      (res) => {
        console.log("Status: " + res.data);
        if (res.status === 200) {
          this.setState({ edited: true });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onClickDelete(event) {
    event.preventDefault();
    // console.log("Click");
    axios.delete("http://localhost:9000/articulos/" + this.id).then(
      (res) => {
        console.log("Status: " + res.data);
        if (res.status === 200) {
          this.setState({ deleted: true });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    if (this.state.edited) {
      return <Redirect to={{ pathname: `/articulos/${this.id}/` }} />;
    } else if (this.state.deleted) {
      return <Redirect to={{ pathname: `/articulos/` }} />;
    } else {
      return (
        <div className="container">
          <div>
            <h2>Nuevo artículo</h2>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Título del artículo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nuevo artículo"
                value={this.state.articulo.title}
                onChange={this.onChangeArticuloTitle}
              />
              <label>Subtítulo del artículo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Subtítulo"
                value={this.state.articulo.subtitle}
                onChange={this.onChangeArticuloSubtitle}
              />
              <label>Link a la imagen del artículo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Link"
                value={this.state.articulo.image}
                onChange={this.onChangeArticuloImage}
              />
              <label>Contenido del artículo</label>
              <textarea
                className="form-control"
                id="articleBody"
                rows="5"
                value={this.state.articulo.text}
                onChange={this.onChangeArticuloText}
              ></textarea>
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-primary mb-2 col-md-2 mr-1"
              >
                Guardar
              </button>
              <button
                onClick={this.onClickDelete}
                className="btn btn-primary mb-2 btn-danger col-md-2"
              >
                Borrar
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
