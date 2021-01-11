import React from "react";
import { Form, Button } from "react-bootstrap";
import ImgUpload from "./ImgUpload";
import Alert from "../utils/Alert";

function Update({ handleChange, onSubmit, tools, validation }) {
  return (
    <div className="update-form">
      {validation ? (
        <Alert
          className="alert"
          key={validation.key}
          message={validation.msg}
          type={validation.type}
        />
      ) : null}
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
              <option key="01">Seleccionar</option>
              {tools.map((e) => (
                <option key={e.id}>{e.toolName}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <div className="text-subm">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleChange}
              name="description"
            />
          </div>
          <br />
          <ImgUpload />
        </Form.Group>

        <br />
        <div className="btn-subm">
          <Button className="btn-subm" variant="dark" onClick={onSubmit}>
            AGREGAR PEDIDO
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Update;
