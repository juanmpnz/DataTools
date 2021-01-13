import React from "react";
import { Table, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

function TableComponent({
  orders,
  handleVotes,
  user,
  status,
  myTools,
  handleStatus,
}) {
  return (
    <div className="tables">
      {orders ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Título</th>
              <th>Tipo</th>
              <th>Herramienta</th>
              <th>Estado</th>
              <th>Votos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((ord, i) => {
              const votes = ord.votes;
              const id = ord.id;
              return (
                <tr>
                  <td>{ord.title} </td>
                  <td>{ord.type}</td>
                  <td>{ord.tool}</td>
                  <td>{ord.status}</td>

                  <td>
                    <ProgressBar
                      variant={ord.votes < 10 ? "info" : "danger"}
                      now={ord.votes}
                      label={ord.votes}
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
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titulo del pedido</th>
              <th>Nombre de la herramienta</th>
              <th>Cantidad de votos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {myTools.map((order) => {
              const id = order.id;

              return (
                <tr>
                  <td>{order.title}</td>
                  <td>{order.tool}</td>
                  <td>{order.votes}</td>
                  <td className="actions">
                    {" "}
                    <Button
                      className="btn"
                      variant={order.status === "Activo" ? "danger" : "success"}
                      size="sm"
                      onClick={() => handleStatus(id)}
                    >
                      {order.status === "Activo"
                        ? "EJECUTAR PEDIDO"
                        : "PROXIMO A EJECUTAR"}
                    </Button>
                    <Link to={`show/${order.id}`}>
                      <Button className="btn" variant="primary" size="sm">
                        VER
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}
export default TableComponent;
