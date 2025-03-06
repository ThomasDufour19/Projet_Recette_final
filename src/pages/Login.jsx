// Login Page - Allows users to log in
// - Uses a hardcoded username/password for authentication
// - Redirects users to Home after login

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to validate login credentials
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("auth", "true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Login</h1>
      <Form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="mt-3" variant="primary" onClick={handleLogin}>Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
