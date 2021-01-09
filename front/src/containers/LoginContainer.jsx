import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/action-creators/users";
import Login from "../components/Login";

function LoginContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCurrentUser({ ...currentUser, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentUser({
      email: "",
      password: "",
    });
    dispatch(login(currentUser)).then((rta) => {
      if (rta === "err") {
        console.log("CREDENCIALES INCORRECTAS");
      } else {
        history.push("/");
      }
    });
  };

  const register = () => {
    history.push("/register");
  };

  return (
    <Login
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      currentUser={currentUser}
      register={register}
    />
  );
}

export default LoginContainer;
