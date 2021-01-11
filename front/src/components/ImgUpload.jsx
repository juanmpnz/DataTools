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

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    if (fileName === "Seleccionar archivo") setValidation(error);
    else {
      const fileData = new FormData();
      const id = currentOrder.id;
      fileData.append("image", file, file.name);
      console.log(fileData.getAll("image"));
      axios
        .post(`/api/orders/${id}/img`, fileData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => setValidation(error));
    }
    setTimeout(function () {
      setValidation("");
    }, 2000);
  };

  console.log("file", file, "name", fileName);
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
