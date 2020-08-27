import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ArticleCard from "./ArticleCard";

export default class ArticlesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/articulos/")
      .then((res) => {
        //console.log(res.data);
        this.setState({ articles: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  articleList() {
    return this.state.articles.map((currentArticle, i) => {
      return <ArticleCard articulo={currentArticle} key={i} />;
    });
  }

  render() {
    return (
      <div className="container">
        <p>Welcome to the Article Index!</p>
        <Link to="/articles/new" className="navbar-brand">
          <button type="button" className="btn btn-primary btn-sm">
            New article
          </button>
        </Link>
        <div className="row">{this.articleList()}</div>
      </div>
    );
  }
}
