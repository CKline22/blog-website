import React from 'react'
import Card from 'react-bootstrap/Card';

function About () {
    return(
        <div>
            <Card>
               <Card.Img src="/landscape-tent-water.jpg" alt="Card image"/>
               <Card.ImgOverlay>
                <Card.Title>About the Blog</Card.Title>
               </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default About;