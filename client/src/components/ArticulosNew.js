import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class MenuPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: { title: "", subtitle: "", text: "", image: "" },
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
        article: { title: event.target.value },
      },
      () => {
        // console.log(this.state.article.title);
      }
    );
  }

  onChangeArticleSubtitle(event) {
    this.setState({
      article: { subtitle: event.target.value },
    });
  }

  onChangeArticleImage(event) {
    this.setState({
      article: { image: event.target.value },
    });
  }

  onChangeArticleText(event) {
    this.setState({
      article: { text: event.target.value },
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
      title: this.state.article.title,
      subtitle: this.state.article.subtitle,
      text: this.state.article.text,
      image: this.state.article.image,
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
                value={this.state.subtitle}
                onChange={this.onChangeArticleSubtitle}
              />
              <label>Link a la imagen del artículo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Link"
                value={this.state.image}
                onChange={this.onChangeArticleImage}
              />
              <label>Contenido del artículo</label>
              <textarea
                className="form-control"
                id="articleBody"
                rows="5"
                value={this.state.text}
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
