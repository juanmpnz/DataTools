import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Update from "../components/Update";

function UptadteContainer() {
  const currentOrder = useSelector((state) => state.orders);
  const [tools, setTools] = useState([]);
  //updateorder dispatchiar a la db .put en el handle subbmit
  const [updateOrder, setUpdateOrder] = useState({
    tool: "",
    img: "",
    description: "",
  });

  useEffect(() => {
    return axios
      .get("/api/tools/")
      .then((res) => {
        setTools(res.data);
      })
      .catch((e) => e);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setUpdateOrder({ ...updateOrder, [e.target.name]: value });
  };
  console.log(updateOrder);
  return (
    <Update
      currentOrder={currentOrder}
      handleChange={handleChange}
      tools={tools}
    />
  );
}

export default UptadteContainer;
