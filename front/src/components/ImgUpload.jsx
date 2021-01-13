import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Alert from "../utils/Alert";

function ImgUpload() {
  const currentOrder = useSelector((state) => state.orders);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("Seleccionar archivo");
  const [validation, setValidation] = useState("");

  const error = {
    msg: "Debes seleccionar un archivo",
    key: Math.random(),
    type: "danger",
  };

  const errorServidor = {
    msg: "Ocurrio un error de servidor",
    key: Math.random(),
    type: "danger",
  };

  const imagenOk = {
    msg: "Imgagen agregada",
    key: Math.random(),
    type: "success",
  };

  const onChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fileName === "Seleccionar archivo") setValidation(error);
    else {
      const fileData = new FormData();
      fileData.append("image", file, file.name);
      axios
        .put(`/api/orders/${currentOrder.id}`, fileData)
        .then(() => {
          setValidation(imagenOk);
        })
        .catch((err) => {
          setValidation(errorServidor);
        });
    }

    setTimeout(function () {
      setValidation("");
    }, 2000);
  };

  return (
    <form>
      <Form.Group>
        <Form.Label>Agregar imágen</Form.Label>
        <Form.File
          id="exampleFormControlFile1"
          name="img"
          onChange={onChange}
        />
        <br />
        <Button block variant="outline-dark" onClick={onSubmit}>
          AGREGAR IMAGEN
        </Button>
      </Form.Group>
      {validation ? (
        <Alert
          className="alert"
          key={validation.key}
          message={validation.msg}
          type={validation.type}
        />
      ) : null}
    </form>
  );
}

export default ImgUpload;
