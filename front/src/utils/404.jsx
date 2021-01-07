import { Button } from "react-bootstrap";

function NotFound() {
  return (
    <div className="error">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/2462/2462946.svg"
        alt="NOT FOUND"
        width="15%"
      />
      <br />
      <h3>PAGINA NO ENCONTRADA</h3>
      <br />
      <Button>INICIO</Button>
    </div>
  );
}

export default NotFound;
