import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
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
      <Button onClick={() => history.push("/")}>INICIO</Button>
    </div>
  );
}

export default NotFound;
