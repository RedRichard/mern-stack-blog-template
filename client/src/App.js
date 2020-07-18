import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ArticulosIndex from "./components/articulos-index";

class App extends Component {
  render() {
    return (
      <Router>
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
              </ul>
            </div>
          </nav>
          <br />
        </div>
        <Route path="/" exact component={ArticulosIndex} />
        <Route path="/articulos" exact component={ArticulosIndex} />
      </Router>
    );
  }
}
export default App;
