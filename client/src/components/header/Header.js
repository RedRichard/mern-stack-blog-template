import React, { Component } from "react";
import { Link } from "react-router-dom";

import ArticlesButton from "./ArticlesButton";
import AuthButtons from "./AuthButtons";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Blog Title
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <ArticlesButton />
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <AuthButtons />
            </ul>
          </div>
        </nav>
        <br />
      </div>
    );
  }
}
