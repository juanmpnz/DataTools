import React from "react";
import { Form, Button } from "react-bootstrap";

function Update({ handleChange, currentOrder, tools }) {
  console.log(tools);
  return (
    <div className="update-form">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Herramienta</Form.Label>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control
              onChange={handleChange}
              name="tool"
              as="select"
              custom
            >
              {tools.map((e) => (
                <option key={e.id}>{e.toolName}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion</Form.Label>
          <div className="text-subm">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="description"
            />
            {/*<Button variant="outline-dark">AGREGAR TRABAJO</Button> */}
          </div>
        </Form.Group>
      </Form>
      <div className="btn-subm">
        <Button className="btn-subm" variant="dark">
          AGREGAR
        </Button>
      </div>
    </div>
  );
}

export default Update;
