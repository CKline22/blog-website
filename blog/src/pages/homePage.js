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
                <Row xs={1} md={2} className="g-4">
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row></Row>
            </div>
        </div>
        
    )
}

export default Home;