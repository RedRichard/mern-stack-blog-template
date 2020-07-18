import React, { Component } from "react";

export default class MenuPrincipal extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Nuevo artículo</h2>
        </div>
        <form action="/articulos" method="POST">
          <div className="form-group">
            <label htmlFor="articleTitle">Título del artículo</label>
            <input
              type="text"
              name="article[title]"
              className="form-control"
              id="articleTitle"
              placeholder="Nuevo artículo"
            />
            <label htmlFor="articleSubtitle">Subtítulo del artículo</label>
            <input
              type="text"
              name="article[subtitle]"
              className="form-control"
              id="articleSubtitle"
              placeholder="Subtítulo"
            />
            <label htmlFor="articleImage">Link a la imagen del artículo</label>
            <input
              type="text"
              name="article[image]"
              className="form-control"
              id="articleImage"
              placeholder="Link"
            />
            <label htmlFor="articleBody">Contenido del artículo</label>
            <textarea
              name="article[text]"
              className="form-control"
              id="articleBody"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Create
          </button>
        </form>
      </div>
    );
  }
}
