import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

function SignUp () {
    return(
        <div>
            <Card>
                <Card.Title>Sign Up</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group>email</Form.Group>
                        <Form.Group>user</Form.Group>
                        <Form.Group>pass</Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Subscribe to our weekly email" />
                        </Form.Group>
                        <Button></Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUp;