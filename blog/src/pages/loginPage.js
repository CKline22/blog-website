import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Login() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "50%" }}>
        <Card.Title style={{ textAlign: "center" }}>Login</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter Username" />
              <Form.Text className="text-muted">
                Vaild Username or Email accepted
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Login
            </Button>{" "}
            <Button variant="secondary" type="submit" href="SignUp">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
