import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/action-creators/users";
import Login from "../components/Login";

function LoginContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [validation, setValidation] = useState("");
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const errorCredenciales = {
    msg: "Credenciales incorrectas",
    key: Math.random(),
    type: "danger",
  };

  const error = {
    msg: "Completa los campos requeridos",
    key: Math.random(),
    type: "danger",
  };

  const errorEmail = {
    msg: "Email invalido",
    key: Math.random(),
    type: "danger",
  };
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCurrentUser({ ...currentUser, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser.password.length === 0) setValidation(error);
    else if (currentUser.email === "") setValidation(error);
    else if (!re.test(currentUser.email)) setValidation(errorEmail);
    else {
      setValidation("");
      setCurrentUser({
        email: "",
        password: "",
      });
      dispatch(login(currentUser)).then((rta) => {
        if (rta === "err") {
          setValidation(errorCredenciales);
        } else {
          history.push("/");
        }
      });
    }
  };

  const register = () => {
    history.push("/register");
  };
  const backToHome = () => {
    history.push("/");
  };

  return (
    <Login
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      currentUser={currentUser}
      register={register}
      validation={validation}
      backToHome={backToHome}
    />
  );
}

export default LoginContainer;
