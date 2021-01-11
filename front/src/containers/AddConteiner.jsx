import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/action-creators/orders";

import Alert from "../utils/Alert";

function AddContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const route = location.pathname;
  const [lgShow, setLgShow] = useState(false);
  const [validation, setValidation] = useState("");
  const currentOrder = useSelector((state) => state.orders);

  const [order, setOrder] = useState({
    type: "",
  });

  const error = {
    msg: "Debes seleccionar una herramienta",
    key: Math.random(),
    type: "danger",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (order.type === "" || order.type === "Seleccionar") {
      setValidation(error);
      setTimeout(function () {
        setValidation("");
      }, 1500);
    } else {
      dispatch(addOrder(order)).then((ord) => {
        if (ord === "err") setValidation(error);
        else {
          setLgShow(false);
          history.push(`/update`);
        }
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setOrder({ ...order, [e.target.name]: value });
  };

  switch (route) {
    case "/update":
      return <div className="name-ficha">{currentOrder.type}</div>;

    case "/":
      return (
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
              {validation ? (
                <Alert
                  className="alert"
                  key={validation.key}
                  message={validation.msg}
                  type={validation.type}
                />
              ) : null}
            </Modal.Body>
          </Modal>
        </div>
      );

    default:
      return <div></div>;
  }
}
export default AddContainer;
