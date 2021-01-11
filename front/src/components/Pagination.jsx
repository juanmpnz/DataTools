import React from "react";
import { Pagination } from "react-bootstrap";

function PaginationComponent({
  orderPerPage,
  totalOrders,
  paginate,
  currentPage,
  prev,
  next,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalOrders / orderPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <Pagination.Prev onClick={prev} />
      <Pagination>
        {pageNumbers.map((n) => {
          return (
            <Pagination.Item
              key={n}
              active={n === currentPage}
              onClick={() => paginate(n)}
            >
              {n}
            </Pagination.Item>
          );
        })}
      </Pagination>
      <Pagination.Next onClick={() => next(pageNumbers.length)} />
    </div>
  );
}

export default PaginationComponent;
