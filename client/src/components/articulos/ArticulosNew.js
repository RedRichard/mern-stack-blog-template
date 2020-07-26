import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class ArticulosNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      text: "",
      image: "",
      createdNew: false,
    };

    this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
    this.onChangeArticleSubtitle = this.onChangeArticleSubtitle.bind(this);
    this.onChangeArticleText = this.onChangeArticleText.bind(this);
    this.onChangeArticleImage = this.onChangeArticleImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeArticleTitle(event) {
    this.setState(
      {
        title: event.target.value,
      },
      () => {
        // console.log(this.state.article.title);
      }
    );
  }

  onChangeArticleSubtitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  onChangeArticleImage(event) {
    this.setState({
      image: event.target.value,
    });
  }

  onChangeArticleText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log("Form sent");
    // console.log("New article title: " + this.state.article.title);
    // console.log("New article sub: " + this.state.article.subtitle);
    // console.log("New article img: " + this.state.article.image);
    // console.log("New article text: " + this.state.article.text);

    let newArticle = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      text: this.state.text,
      image: this.state.image,
    };

    // console.log("Objeto: " + newArticle);

    axios.post("http://localhost:9000/articulos/", newArticle).then(
      (res) => {
        console.log(res.data);
        if (res.status === 200) {
          this.setState({ createdNew: true });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    if (this.state.createdNew) {
      return <Redirect to={{ pathname: "/articulos" }} />;
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
                onChange={this.onChangeArticleTitle}
              />
              <label>Subtítulo del artículo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Subtítulo"
                onChange={this.onChangeArticleSubtitle}
              />
              <label>Link a la imagen del artículo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Link"
                onChange={this.onChangeArticleImage}
              />
              <label>Contenido del artículo</label>
              <textarea
                className="form-control"
                id="articleBody"
                rows="5"
                onChange={this.onChangeArticleText}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-primary mb-2">
                Crear
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
