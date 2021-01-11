import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

//COMPONENT
import TableComponent from "../components/Tables";
import PaginationComponent from "../components/Pagination";

import { orderUpdate } from "../redux/action-creators/orders";

function DataTablesContainer() {
  const currentUser = useSelector((state) => state.currentUser);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderPerPage] = useState(10);
  const [render, setRender] = useState(false);

  useEffect(() => {
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
    current = v + 1;
    console.log(current);
    orderUpdate({ id: orderId, votes: current });
    setRender(true);
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

  return (
    <>
      <TableComponent
        orders={currentOrders}
        handleVotes={handleVotes}
        user={currentUser}
      />
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
