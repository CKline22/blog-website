import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

function Header() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img src="/camping-tents-2.jpg" />
        </Card>
        <Card style={{ backgroundColor: "#F5FBEF" }}>
          <Card.Body>
            <Card.Title>Welcome to Our Blog!</Card.Title>
            <Card.Subtitle>We are all about everything outdoors.</Card.Subtitle>
            <Card.Text>
              Read about our trips, adventures, and Recommended places the
              explore.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Header;
