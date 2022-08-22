import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login () {
    return(
        <div>
            <Form>
                <Form.Group>user</Form.Group>
                <Form.Group>pass</Form.Group>
                <Button>login</Button>
            </Form>
        </div>
    )
}

export default Login;