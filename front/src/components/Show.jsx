import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Show({ showOrder }) {
  const history = useHistory();

  return (
    <div className="showContainer">
      <h3>HERRAMIENTA: {showOrder.tool}</h3>
      <h3>TIPO : {showOrder.type}</h3>
      <h3>CANTIDAD DE VOTOS : {showOrder.votes}</h3>
      <hr />
      <p>TITULO:</p>
      <p>{showOrder.title}</p>
      <hr />

      <p>DESCRIPCION:</p>
      <p>{showOrder.description}</p>
      <hr />
      <p>IMAGEN:</p>

      <div className="contenedorImg">
        <img
          src={
            showOrder.img
              ? showOrder.img
              : "https://i.stack.imgur.com/y9DpT.jpg"
          }
        ></img>
      </div>

      <hr />
      <Button onClick={() => history.push("/")}>VOLVER</Button>
    </div>
  );
}

export default Show;
