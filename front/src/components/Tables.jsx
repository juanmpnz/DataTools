import React from "react";
import { Table } from "react-bootstrap";
import { EyeFill, TrashFill, PencilFill } from "react-bootstrap-icons";

function TableComponent() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            <EyeFill className="icon-crud" />
            <TrashFill className="icon-crud" />
            <PencilFill className="icon-crud" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
export default TableComponent;
