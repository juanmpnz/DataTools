import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

//COMPONENT
import TableComponent from "../components/Tables";
import PaginationComponent from "../components/Pagination";

import { orderUpdate } from "../redux/action-creators/orders";
import Alert from "../utils/Alert";

function DataTablesContainer() {
  const location = useLocation();
  const currentUser = useSelector((state) => state.currentUser);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderPerPage] = useState(10);
  const [render, setRender] = useState(false);
  const [userVotes, setUserVotes] = useState("");
  const [validation, setValidation] = useState("");
  const [status, setStatus] = useState("Started");
  const [userTools, setUserTools] = useState("");
  console.log(location.pathname);

  const votoError = {
    msg: "Ya votaste a este pedido",
    key: Math.random(),
    type: "danger",
  };

  useEffect(() => {
    axios.get(`api/votes/user/${currentUser.id}`).then((votes) => {
      setUserVotes(votes.data);
    });

    axios.get(`/api/tools/${currentUser.id}`).then((tools) => {
      setUserTools(tools);
    });

    axios
      .get("api/orders/")
      .then((allOrders) => {
        const desc = allOrders.data.reverse();
        setOrders(desc);
      })
      .catch((e) => e);
    if (render) setRender(false);
  }, [render]);

  let current = 0;
  const handleVotes = (orderId, v) => {
    axios
      .post("api/votes/", {
        FeaturesErrorId: orderId,
        userId: currentUser.id,
      })
      .then((rta) => {
        current = v + 1;
        console.log(current);
        orderUpdate({ id: orderId, votes: current });
        setRender(true);
        console.log(rta);
      })
      .catch((err) => {
        if (err) {
          setValidation(votoError);
          return setTimeout(function () {
            setValidation("");
          }, 2000);
        }
      });
  };

  const indexOfLastOrder = currentPage * orderPerPage;
  const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const next = (totalPages) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  console.log("user tools", userTools);

  return (
    <>
      {validation ? (
        <Alert
          className="alert"
          key={validation.key}
          message={validation.msg}
          type={validation.type}
        />
      ) : null}
      {location.pathname !== "/mytools" ? (
        <TableComponent
          orders={currentOrders}
          handleVotes={handleVotes}
          user={currentUser}
          status={status}
        />
      ) : null}
      {location.pathname === "/mytools" ? (
        <TableComponent
          tools={userTools}
          orders={false}
          handleVotes={handleVotes}
          user={currentUser}
          status={status}
        />
      ) : null}{" "}
      {orders.length < 10 ? null : (
        <PaginationComponent
          orderPerPage={orderPerPage}
          totalOrders={orders.length}
          paginate={paginate}
          currentPage={currentPage}
          prev={prev}
          next={next}
        />
      )}
    </>
  );
}

export default DataTablesContainer;
