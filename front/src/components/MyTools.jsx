import React from "react";
import DataTables from "../containers/DataTables";
import AcordionContainer from "../containers/AcordionContainer";

function MyTools() {
  return (
    <div className="tables">
      <AcordionContainer />
      <div className="name-ficha">PEDIDOS A MIS HERRAMIENTAS</div>
      <DataTables />
    </div>
  );
}

export default MyTools;
