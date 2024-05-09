import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://epicode-deploy-be-d2ff11d62cad.herokuapp.com/auth/register",
      {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
      }
    );
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h1>Login</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
