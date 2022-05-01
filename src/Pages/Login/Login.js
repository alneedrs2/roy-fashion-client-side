import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Form className="form-container mx-auto my-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button className="form-btn my-2" type="submit">Login</button>
    </Form>
  );
};

export default Login;
