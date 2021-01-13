import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Update from "../components/Update";
import { orderUpdate } from "../redux/action-creators/orders";

function UptadteContainer() {
  const history = useHistory();
  const currentOrder = useSelector((state) => state.orders);
  const [tools, setTools] = useState([]);
  const [validation, setValidation] = useState("");
  const [file, setFile] = useState({});
  const [updateOrder, setUpdateOrder] = useState({
    id: currentOrder.id,
    tool: "",
    ToolId: "",
    description: "",
    title: "",
  });

  const errorTool = {
    msg: "Debes seleccionar una herramienta",
    key: Math.random(),
    type: "danger",
  };

  const errorDesc = {
    msg: "Debes describir el pedido",
    key: Math.random(),
    type: "danger",
  };

  const error = {
    msg: "Ocurrio un error",
    key: Math.random(),
    type: "danger",
  };

  const createOk = {
    msg: "Creado exitosamente",
    key: Math.random(),
    type: "success",
  };

  useEffect(() => {
    return axios
      .get("/api/tools/")
      .then((res) => {
        setTools(res.data);
      })
      .catch((e) => e);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (updateOrder.tool === "") setValidation(errorTool);
    else if (updateOrder.description === "") setValidation(errorDesc);
    else {
      orderUpdate(updateOrder).then((r) => {
        if (r.status === 200) {
          setValidation(createOk);
          setTimeout(function () {
            history.push("/");
          }, 2000);
        } else {
          setValidation(error);
        }
      });
    }
    setTimeout(function () {
      setValidation("");
    }, 2000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (e.target.name === "img") {
      const fil = e.target.files[0].name;
      setUpdateOrder({ ...updateOrder, [e.target.name]: fil });
      setFile(e.target.files[0]);
    } else if (e.target.name === "tool") {
      const obj = JSON.parse(e.target.value);
      setUpdateOrder({ ...updateOrder, ...obj });
    } else {
      setUpdateOrder({ ...updateOrder, [e.target.name]: value });
    }
  };

  return (
    <Update
      currentOrder={currentOrder}
      handleChange={handleChange}
      tools={tools}
      onSubmit={onSubmit}
      validation={validation}
    />
  );
}

export default UptadteContainer;
