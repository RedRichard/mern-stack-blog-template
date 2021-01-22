import React from "react";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import moment from "moment";

export default function TextoCard(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.texto.title}</Card.Title>
          <Card.Text>{props.texto.subtitle}</Card.Text>
          <Card.Text>{moment(props.texto.date).format("DD-MM-YYYY")}</Card.Text>
          <LinkContainer
            to={{
              pathname: `/articulos/${props.texto._id}`,
            }}
          >
            <Card.Link variant="primary">Ver</Card.Link>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
}
