import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class ArticlesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulo: { title: "", subtitle: "", text: "", image: "" },
      edited: false,
      deleted: false,
    };
    this.id = "";

    this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
    this.onChangeArticleSubtitle = this.onChangeArticleSubtitle.bind(this);
    this.onChangeArticleText = this.onChangeArticleText.bind(this);
    this.onChangeArticleImage = this.onChangeArticleImage.bind(this);
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

  onChangeArticleTitle(event) {
    this.setState({
      articulo: {
        title: event.target.value,
        subtitle: this.state.articulo.subtitle,
        text: this.state.articulo.text,
        image: this.state.articulo.image,
      },
    });
  }

  onChangeArticleSubtitle(event) {
    this.setState({
      articulo: {
        title: this.state.articulo.title,
        subtitle: event.target.value,
        text: this.state.articulo.text,
        image: this.state.articulo.image,
      },
    });
  }

  onChangeArticleText(event) {
    this.setState({
      articulo: {
        title: this.state.articulo.title,
        subtitle: this.state.articulo.subtitle,
        text: event.target.value,
        image: this.state.articulo.image,
      },
    });
  }

  onChangeArticleImage(event) {
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
      return <Redirect to={{ pathname: `/articles/${this.id}/` }} />;
    } else if (this.state.deleted) {
      return <Redirect to={{ pathname: `/articles/` }} />;
    } else {
      return (
        <div className="container">
          <div>
            <h2>New Article</h2>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="New title"
                value={this.state.articulo.title}
                onChange={this.onChangeArticleTitle}
              />
              <label>Subtitle</label>
              <input
                type="text"
                className="form-control"
                placeholder="New subtitle"
                value={this.state.articulo.subtitle}
                onChange={this.onChangeArticleSubtitle}
              />
              <label>Article image link</label>
              <input
                type="text"
                className="form-control"
                placeholder="Link"
                value={this.state.articulo.image}
                onChange={this.onChangeArticleImage}
              />
              <label>Content</label>
              <textarea
                className="form-control"
                id="articleBody"
                rows="5"
                value={this.state.articulo.text}
                onChange={this.onChangeArticleText}
              ></textarea>
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-primary mb-2 col-md-2 mr-1"
              >
                Save
              </button>
              <button
                onClick={this.onClickDelete}
                className="btn btn-primary mb-2 btn-danger col-md-2"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
