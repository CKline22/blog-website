import React from 'react'
import Header from '../components/header';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home () {
    return(
        <div>
            <Header/>
            <div>
                <Row xs={1} md={2}>
                    <Col>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Camping Adventures</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Hiking Adventures</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                <Col>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Photography</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Travel</Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}

export default Home;