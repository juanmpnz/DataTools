import React from "react";
import { Form, Button } from "react-bootstrap";

function Update() {
  return (
    <div className="update-form">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Trabajos</Form.Label>
          <div className="text-subm">
            <Form.Control as="textarea" rows={3} />
            <Button variant="outline-dark">AGREGAR TRABAJO</Button>
          </div>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Whatsapp</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <div className="btn-subm">
          <Button className="btn-subm" variant="dark">
            AGREGAR CLIENTE
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Update;
