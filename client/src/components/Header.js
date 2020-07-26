import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Letras Transformadoras
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/articulos" className="nav-link">
                  Artículos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/articulos" className="nav-link">
                  Usuarios
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
      </div>
    );
  }
}
