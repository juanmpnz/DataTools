import React from "react";
import { useHistory } from "react-router-dom";
import AddClient from "../components/AddClient";

function AddContainer() {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("entro");
    history.push("/update/:id");
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return <AddClient handleChange={handleChange} onSubmit={onSubmit} />;
}
export default AddContainer;
