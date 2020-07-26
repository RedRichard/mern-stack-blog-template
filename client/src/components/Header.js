import React, { Component } from "react";
import { Link } from "react-router-dom";

import LogOutButton from "./header/LogOutButton";

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
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/logout" className="nav-link">
                  <LogOutButton></LogOutButton>
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
