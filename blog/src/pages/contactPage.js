import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img src="/trees.jpg" />
        </Card>
        <Card style={{ backgroundColor: "#F5FBEF" }}>
          <Card.Body>
            <Card.Title>Contact us!</Card.Title>
            <Card.Subtitle>
              We hope you enjoy your experience, and would like to hear your
              feed back
            </Card.Subtitle>
            <Card.Text>Phone: (757-123-4567)</Card.Text>
            <Card.Text>Email: FakeEmail@gmail.com</Card.Text>
            <Card.Text>
              Address: 123 West River RD. Moutain Town, Virginia 12345
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Contact;
