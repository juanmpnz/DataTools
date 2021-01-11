import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Show from "../components/Show";

function ShowContainer() {
  const { id } = useParams();
  const [orderToShow, setOrderToShow] = useState([]);

  useEffect(() => {
    axios.get(`/api/orders/find/${id}`).then((o) => setOrderToShow(o.data[0]));
  }, []);

  return <Show showOrder={orderToShow} />;
}

export default ShowContainer;
