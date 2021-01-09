import React, { useState } from "react";
import { Button, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

function AddClient({ handleChange, onSubmit, currentOrder }) {
  const [lgShow, setLgShow] = useState(false);
  const location = useLocation();
  const route = location.pathname;

  return (
    <>
      <div>
        {route != "/update" ? (
          <div>
            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => setLgShow(true)}
            >
              <Plus size={25} />
              AGREGA UN PEDIDO
            </Button>
            <form onSubmit={() => setLgShow(false)}>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Selecciona el tipo de pedido
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Control
                      onChange={handleChange}
                      name="type"
                      as="select"
                      custom
                    >
                      <option>Seleccionar</option>
                      <option>FEATURE</option>
                      <option>ERROR</option>
                    </Form.Control>
                  </Form.Group>
                  <Button onClick={onSubmit} variant="primary" size="sm" block>
                    <Plus size={25} />
                    AGREGAR
                  </Button>
                </Modal.Body>
              </Modal>
            </form>
          </div>
        ) : (
          <div className="name-ficha">{currentOrder.type}</div>
        )}
      </div>
    </>
  );
}

export default AddClient;
