import React from 'react'
import { Container,Card,Button,Row, Col } from 'react-bootstrap'
import './App.css'
import Navbar from './Navi'

function Teams() {
  return (
    <div>
        <Navbar></Navbar>
        <div className='teams'>
            <h1>Teams</h1>

            
              <Container>
                <Row>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>John- Hairstyle specialist</Card.Title>
                  <Card.Text>
                    John is an haircut specialist, he can do any hairstyle you want including dreads and braids
                  </Card.Text>
                
                </Card.Body>
              </Card>
                  </Col>
                  <Col>
                  <Card style={{ height: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/897254/pexels-photo-897254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>Jackson- haircut specialist</Card.Title>
                  <Card.Text>
                  Jackson is an haircut specialist, he specializes in fade cut, buzz cut and perms if needed
                  </Card.Text>
                 
                </Card.Body>
              </Card>
                  </Col>
                  <Col>
                  <Card style={{ height: '10rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/7440140/pexels-photo-7440140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>Ronaldo</Card.Title>
                  <Card.Text>
                  Ronaldo is a colour and haircut specialist,he is also the colour person if colouring service is needed
                  </Card.Text>
                 
                </Card.Body>
              </Card>
                  </Col>
                </Row>
              </Container>
             
        </div>
    </div>
  )
}

export default Teams