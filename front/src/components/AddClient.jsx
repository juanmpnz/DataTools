import React, { useState } from "react";
import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";

function AddClient({ handleChange, onSubmit }) {
  const [lgShow, setLgShow] = useState(false);
  const location = useLocation();
  const route = location.pathname;

  return (
    <>
      <div>
        {route != "/update/:id" ? (
          <div>
            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => setLgShow(true)}
            >
              <Plus size={25} />
              AGREGA UN CLIENTE
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
                    Agrega un cliente
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>Nombre y apellido</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleChange} name="name" />
                    <FormControl onChange={handleChange} name="lastName" />
                  </InputGroup>
                  <Button onClick={onSubmit} variant="primary" size="sm" block>
                    <Plus size={25} />
                    AGREGAR
                  </Button>
                </Modal.Body>
              </Modal>
            </form>
          </div>
        ) : (
          <div className="name-ficha">NOMBRE DEL CLIENTE</div>
        )}
      </div>
    </>
  );
}

export default AddClient;
