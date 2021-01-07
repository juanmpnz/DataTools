import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddClient from "../components/AddClient";

function AddContainer() {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [cliente, setCliente] = useState({
    email: "",
    name: "",
    lastname: "",
    adress: "",
    whatsapp: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("entro");
    /* setCliente(cliente); */
    history.push("/update/:id");
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <AddClient
      handleChange={handleChange}
      onSubmit={onSubmit}
      validated={validated}
    />
  );
}
export default AddContainer;
