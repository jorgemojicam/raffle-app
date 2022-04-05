import { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function Navigation() {
  const { logout, authState } = useAuth();
  const [username, setUsername] = useState("Iniciar Sesion");

  useEffect(() => {
    setUsername(authState?.user?.username || "Iniciar Sesion");
  }, [authState?.isAuthenticate, authState?.user?.username]);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Raffle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar.nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/rifas">
              Rifas
            </Nav.Link>

            {authState?.isAuthenticate ? (
              <>
                <Nav.Link as={NavLink} to="/rifas">
                  Mis Rifas
                </Nav.Link>
                <Nav.Link>Inscritas</Nav.Link>
              </>
            ) : (
              <></>
            )}
          </Nav>

          <Nav style={{ marginLeft: "auto" }}>
            {authState?.isAuthenticate ? (
              <NavDropdown title={username}>
                <NavDropdown.Item as={NavLink} to="/about">
                  <i className="bi-person"></i> Mi cuenta
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                  <i className="bi-power"></i> Salir
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={NavLink} to="/">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
