import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import MenuPrincipal from "./components/MenuPrincipalIndex";
import ArticulosIndex from "./components/articulos/ArticulosIndex";
import ArticulosNew from "./components/articulos/ArticulosNew";
import ArticulosId from "./components/articulos/ArticulosId";
import ArticulosEdit from "./components/articulos/ArticulosEdit";
import UsuarioRegisterForm from "./components/usuarios/UsuarioRegisterForm";

class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={MenuPrincipal} />
          <Route path="/articulos" exact component={ArticulosIndex} />
          <Route path="/articulos/new" exact component={ArticulosNew} />
          <Route path="/articulos/:id" exact component={ArticulosId} />
          <Route path="/articulos/:id/edit" exact component={ArticulosEdit} />

          <Route path="/login" exact component={UsuarioRegisterForm} />
        </Switch>
      </Router>
    );
  }
}
export default App;
