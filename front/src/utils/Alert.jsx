import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function AlertFunction({ message, type, key }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert key={key} variant={type}>
        <Alert.Heading>
          <div className="alert-text">{message}</div>
        </Alert.Heading>
      </Alert>
    );
  }
}

export default AlertFunction;
