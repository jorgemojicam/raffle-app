import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import useAuth from "../auth/useAuth";

export default function Auth() {

  const [username, setUsername] = useState("");
  const { logi } = useAuth();
  const login = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: "mojica123",
    };
    logi(user);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <Form.Text className="text-muted">
              Ingrese el username / celular
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}
