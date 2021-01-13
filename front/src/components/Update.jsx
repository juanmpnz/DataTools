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
              onChange={(e) => handleChange(e)}
              name="tool"
              as="select"
              custom
            >
              <option key="01">Seleccionar</option>
              {tools.map((e) => {
                return (
                  <option
                    key={e.id}
                    value={JSON.stringify({
                      tool: e.toolName,
                      ToolId: e.userId,
                    })}
                  >
                    {e.toolName}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Título</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            placeholder="Título"
            name="title"
          />
          <br />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <div className="text-subm">
            <Form.Control
              as="textarea"
              placeholder="Descripcion"
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

/* 
Entender el estado de los pedidos cargados 
(por ejemplo: si los dueños de la
  herramienta deciden que uno de los pedidos más votados se va a ejecutar
  próximamente, deberíamos verlo reflejado de alguna manera en esta herramienta para
  que los usuarios se enteren). */
