import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Show({ showOrder }) {
  const history = useHistory();
  console.log(showOrder);
  return (
    <div className="showContainer">
      <h3>HERRAMIENTA: {showOrder.tool}</h3>
      <h3>TIPO : {showOrder.type}</h3>
      <h3>CANTIDAD DE VOTOS : {showOrder.votes}</h3>
      <hr />
      <p>DESCRIPCION:</p>
      <p>{showOrder.description}</p>
      <hr />
      <p>IMAGEN:</p>
      {/*    <img src={showOrder.img} alt="" className={"img-show"} /> */}
      <img
        src={
          showOrder.img ? showOrder.img : "https://i.stack.imgur.com/y9DpT.jpg"
        }
      ></img>
      <hr />
      <Button onClick={() => history.push("/")}>VOLVER</Button>
    </div>
  );
}

export default Show;
