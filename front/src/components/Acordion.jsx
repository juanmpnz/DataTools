import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";

function Acordion() {
  return (
    <div>
      <Accordion defaultActiveKey="0" className="accordeon">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Ver trabajos realizados
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm aasdasdnother body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Acordion;
