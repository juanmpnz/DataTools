import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Person, Key } from "react-bootstrap-icons";
function Login() {
  return (
    <div className="container-fluid login">
      <div className="form">
        <div className="logo-completo">
          <p>
            mis<span className="logo-clientes">Clientes</span>
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
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <Key />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button className="btn-login" variant="dark" size="lg" block>
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
