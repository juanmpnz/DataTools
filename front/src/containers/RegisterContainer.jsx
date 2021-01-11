import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Register from "../components/Register";
import { registerUser } from "../redux/action-creators/users";

function RegisterContainer() {
  const history = useHistory();
  const [validation, setValidation] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const error = {
    msg: "Todos los campos son requeridos",
    key: Math.random(),
    type: "danger",
  };
  const passLength = {
    msg: "La contraseña debe tener al menos 5 caracteres",
    key: Math.random(),
    type: "danger",
  };

  const errorEmail = {
    msg: "Email invalido",
    key: Math.random(),
    type: "danger",
  };
  const creado = {
    msg: "Usuario creado con exito",
    key: Math.random(),
    type: "success",
  };
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e, v, n) => {
    e.preventDefault();
    const { value } = e.target;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = () => {
    if (user.name === "") setValidation(error);
    else if (user.lastname === "") setValidation(error);
    else if (user.email === "") setValidation(error);
    else if (!re.test(user.email)) setValidation(errorEmail);
    else if (user.password.length === 0) setValidation(passLength);
    else {
      setValidation(creado);
      registerUser(user);

      setTimeout(function () {
        setValidation("");
        history.push("/login");
      }, 2000);
    }
  };
  return (
    <Register
      handleChange={handleChange}
      user={user}
      validation={validation}
      handleSubmit={handleSubmit}
    />
  );
}

export default RegisterContainer;
