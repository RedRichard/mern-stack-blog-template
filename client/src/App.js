import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Header from "./components/Header";
import MenuPrincipal from "./components/MenuPrincipalIndex";
import TypeIndex from "./components/textos/TipoIndex";
import TextoId from "./components/textos/TextoId";
import TextoEdit from "./components/textos/TextoEdit";
import TextoNew from "./components/textos/TextoNew";

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Row xs={1}>
            <Header></Header>
          </Row>
          <br />
          <Row>
            <Route path="/" exact component={MenuPrincipal} />
            <Route path="/:type" exact component={TypeIndex} />
            <Route path="/:type/:id" exact component={TextoId} />
            <Route path="/:type/:id/edit" exact component={TextoEdit} />
            <Route path="/new" exact component={TextoNew} />
          </Row>
          <br />
        </Container>
      </Router>
    );
  }
}
export default App;
