import React from "react";

import Alert from "react-bootstrap/Alert";

export default function ErrorNotice(props) {
  return (
    <Alert variant="danger" onClose={() => props.clearError()} dismissible>
      {props.message}
    </Alert>
  );
}
