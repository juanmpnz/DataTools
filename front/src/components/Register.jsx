import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { Person, Key } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Alert from "../utils/Alert";

function Register({ handleChange, handleSubmit, validation }) {
  return (
    <>
      {validation ? (
        <Alert
          className="alert"
          key={validation.key}
          message={validation.msg}
          type={validation.type}
        />
      ) : null}
      <div className="container-fluid login">
        <div className="form">
          <div className="logo-completo">
            <p>
              Data<span className="logo-clientes">Tools</span>
            </p>
            <img
              src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/15803414591605579771-64.png"
              alt="Logo"
              className="login-logo-img"
            />
          </div>

          <form>
            <InputGroup className="mb-3 input-login">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Person />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Nombre"
                aria-label="Nombre"
                aria-describedby="basic-addon1"
                name="name"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3 input-login">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Person />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Apellido"
                aria-label="Apellido"
                aria-describedby="basic-addon1"
                name="lastname"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3 input-login">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Person />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                name="email"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Key />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                name="password"
                type="password"
                onChange={handleChange}
              />
            </InputGroup>
            Ya tenes tu cuenta?{" "}
            <Link to="/login" style={{ color: "white", fontWeight: "bold" }}>
              Inicia sesión
            </Link>
            <Button
              onClick={handleSubmit}
              className="btn-login"
              variant="dark"
              size="lg"
              block
            >
              Registrarse
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
