import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>Raffle</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar.nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/rifas">
            Mis Rifas
          </Nav.Link>
          <Nav.Link>Inscritas</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/">Login</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contacto
          </Nav.Link>
          <Nav.Link>Mi cuenta</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Saludo">
            <NavDropdown.Item>Hola</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
