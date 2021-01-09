import { Button, FormControl, Navbar, Nav, Form } from "react-bootstrap";

function Menu({ handleLogout, currentUser }) {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {currentUser ? (
            <Button variant="dark" onClick={handleLogout}>
              Logout
            </Button>
          ) : null}

          <Nav className="mr-auto">
            <Nav.Link href="/"></Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="navname">Bienvenid@ {currentUser.name}</div>
    </>
  );
}

export default Menu;
