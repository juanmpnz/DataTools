import {
  Button,
  NavDropdown,
  FormControl,
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";

function Menu() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
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
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;