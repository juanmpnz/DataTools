import React from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NavContainer() {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();

  const handleLogout = async () => {
    console.log("logout attempt...");
    try {
      await axios.post("/api/users/logout");
      console.log("logged out");
      history.push("/login");
    } catch (err) {
      return err;
    }
  };

  return <Nav handleLogout={handleLogout} currentUser={currentUser} />;
}

export default NavContainer;
