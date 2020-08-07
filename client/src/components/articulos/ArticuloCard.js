import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default class ArticuloCard extends Component {
  render() {
    return (
      <Col md="4" sm="6">
        <Card>
          <Card.Body>
            <Card.Title>{this.props.articulo.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.articulo.subtitle}
            </Card.Subtitle>
            <Card.Text>{this.props.articulo.created}</Card.Text>
            <Card.Link
              as={Link}
              to={{
                pathname: `/articulos/${this.props.articulo.titleId}`,
              }}
            >
              Ver
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
