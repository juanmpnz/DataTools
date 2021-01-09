import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Register from "../components/Register";
import { registerUser } from "../redux/action-creators/users";

function RegisterContainer() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const handleChange = (e, v, n) => {
    e.preventDefault();
    const { value } = e.target;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = () => {
    registerUser(user);
    history.push("/login");
  };

  return (
    <Register
      handleChange={handleChange}
      user={user}
      handleSubmit={handleSubmit}
    />
  );
}

export default RegisterContainer;
