import { Spinner } from "react-bootstrap";

function Spinner() {
  return (
    <div className="error">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Spinner;
