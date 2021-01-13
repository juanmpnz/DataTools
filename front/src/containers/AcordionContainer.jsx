import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Acordion from "../components/Acordion";

function AcordionContainer() {
  const currentUser = useSelector((state) => state.currentUser);
  const [userTools, setUserTools] = useState([]);

  useEffect(() => {
    axios.get(`/api/tools/${currentUser.id}`).then((tools) => {
      setUserTools(tools.data);
    });
  }, []);

  return <Acordion tools={userTools} />;
}
export default AcordionContainer;
