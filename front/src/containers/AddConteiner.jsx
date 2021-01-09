import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/action-creators/orders";
import AddOrder from "../components/AddOrder";

function AddContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentOrder = useSelector((state) => state.orders);
  console.log(currentOrder);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({
    name: "Debes seleccionar un pedido",
  });
  const [order, setOrder] = useState({
    type: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrder(order)).then((ord) => {
      if (ord === "err") console.log("Error");
      else history.push(`/update`);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setOrder({ ...order, [e.target.name]: value });
  };

  return (
    <AddOrder
      handleChange={handleChange}
      onSubmit={onSubmit}
      validated={validated}
      currentOrder={currentOrder}
    />
  );
}
export default AddContainer;
