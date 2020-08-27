import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleCard extends Component {
  render() {
    return (
      <div className="card col-md-4 col-sm-6" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{this.props.articulo.title}</h5>
          <p className="card-text">{this.props.articulo.subtitle}</p>
          <p className="card-text">{this.props.articulo.created}</p>
          <Link
            to={{
              pathname: `/articles/${this.props.articulo._id}`,
            }}
            className="navbar-brand"
          >
            <button className="btn btn-primary">More</button>
          </Link>
        </div>
      </div>
    );
  }
}
