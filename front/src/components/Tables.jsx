import React from "react";
import { Table, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

function TableComponent({ orders, handleVotes, user }) {
  return (
    <div className="tables">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Herramienta</th>
            <th>Prioridad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((ord) => {
            const code = ord.type === "FEATURE" ? "F" : "E";
            const votes = ord.votes;
            const id = ord.id;
            return (
              <tr key={ord.id}>
                <td>{code + ord.id} </td>
                <td>{ord.type}</td>
                <td>{ord.tool}</td>
                <td>
                  <ProgressBar
                    variant={ord.votes < 10 ? "info" : "danger"}
                    now={ord.votes}
                    label={`${ord.votes}%`}
                  />
                </td>
                <td className="actions">
                  <Link to={`show/${ord.id}`}>
                    <Button className="btn" variant="primary" size="sm">
                      VER
                    </Button>
                  </Link>
                  {user.id ? (
                    <Button
                      className="btn"
                      variant="success"
                      size="sm"
                      onClick={() => handleVotes(id, votes)}
                    >
                      VOTAR
                    </Button>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default TableComponent;

{
  /* <Link to={`show/${ord.id}`}>
                    <Button variant="primary" size="sm">
                      VER
                    </Button>
                  </Link>
                  <Link>
                    <TrashFill className="icon-crud" />
                  </Link>
                 
                  <PencilFill
                    onClick={handleVotes(id, votes)}
                    className="icon-crud"
                  /> 
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleVotes(id, votes)}
                  >
                       <Plus size={25} /> 
                    VOTAR
                  </Button> */
}
