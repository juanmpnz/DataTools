import React from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { Person, Key } from "react-bootstrap-icons";
import Alert from "../utils/Alert";

function Login({
  handleChange,
  handleSubmit,
  currentUser,
  register,
  validation,
  backToHome,
}) {
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
            <Form.Group controlId="formBasicEmail">
              <InputGroup className="mb-3 input-login">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  value={currentUser.email}
                />
              </InputGroup>
            </Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <Key />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                name="password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                value={currentUser.password}
                type="password"
              />
            </InputGroup>

            <Button
              onClick={handleSubmit}
              className="btn-login"
              variant="dark"
              size="lg"
              block
            >
              Iniciar sesión
            </Button>

            <Button
              onClick={register}
              className="btn-login"
              variant="dark"
              size="lg"
              block
            >
              Registrarse
            </Button>
            <Button
              onClick={backToHome}
              className="btn-login"
              variant="dark"
              size="lg"
              block
            >
              Inicio
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
