import React from "react";
import { Button, Accordion, Card } from "react-bootstrap";

function Acordion({ tools, rerender }) {
  return (
    <div>
      <Accordion defaultActiveKey="0" className="accordeon">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Mis herramientas
            </Accordion.Toggle>
          </Card.Header>
          {tools.map((tool) => {
            return (
              <Accordion.Collapse eventKey="1">
                <Card.Body>{tool.toolName}</Card.Body>
              </Accordion.Collapse>
            );
          })}
        </Card>
      </Accordion>
    </div>
  );
}

export default Acordion;
