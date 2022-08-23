import React from "react";
import Header from "../components/header";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <div>
      <Header />
      <div>
        <Row xs={1} md={2}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Camping Adventures</Card.Title>
                <Card.Text>
                  From years of experience, and many trips. I have gathered many
                  stories and tips.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Hiking Adventures</Card.Title>
                <Card.Text>
                  Hiking is a great way to explore, and enjoy the outdoors.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Photography</Card.Title>
                <Card.Text>
                  Check out all the photos taken on our adventures.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Travel</Card.Title>
                <Card.Text>Finding new things is the best.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
