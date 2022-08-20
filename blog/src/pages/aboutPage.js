import React from 'react'
import Card from 'react-bootstrap/Card';

function About () {
    return(
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Card>
               <Card.Img src="/camping-tents.jpg" alt="Card image"/>
               <Card.ImgOverlay>
                <Card.Title style={{textAlign: 'center'}}>About the Blog</Card.Title>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Text>
                        It's our goal to provide accurate information. Sharing stories of adventure and travel is important to us. One of the purposes of this blog is to get more people outdoors. 
                    </Card.Text>
                </Card.Body>
               </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default About;