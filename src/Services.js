import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card,Col, Row} from 'react-bootstrap';
import Navbar from './Navi'

function Services() {
  return (
    <div className='servi'>
        <Navbar></Navbar>
        <h1 className='header1'>SERVICES</h1>
        
        <Container>
            <h1>HAIRCUT</h1>
            <Container>
              <div className='innertext'>
                
                
                <Row>
                  
               <Col>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://haircutinspiration.com/wp-content/uploads/Pitch-Perfect-Buzz-Cut.jpg" />
                  <Card.Body>
                    <Card.Title>Buzz</Card.Title>
                    <Card.Text>
                    BUZZ CUT...............$20
                    <p>THIS INCLUDES CUT, SCALP TREATMENT AND HOT TOWEL</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col> 
                
              <Col> 
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/7697285/pexels-photo-7697285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>CLEAN</Card.Title>
                    <Card.Text>
                    CLEAN CUT...............$35
                    <p>THIS IS A CLEAN SHAVE OF THE HEAD AND IT INCLUDES HOT TOWEL AND SCALP MASSAGE</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col> 
               <Col>
              
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>TRAD</Card.Title>
                    <Card.Text>
                    TRADITIONAL HAIRCUT...............$30
                    <p>THIS INCLUDES A CUT, BEARD TRIM AND HOT TOWEL</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                    
                    
                   
                    
                   
                </Row>   
              </div>
             
              
             
              
            </Container>
            
        </Container>
        
        <Container>
          <h1>SHAVING</h1>
          <Container>
          <div className='innertext'>
          <Row>
            <Col>
           
         
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>CLASSIC</Card.Title>
                    <Card.Text>
                    CLASSIC SHAVE...............$40
                    <p>THIS IS A FULL FACE SHAVE WHICH INCLUDES TRIMMING AND OIL SESSION</p>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/7697316/pexels-photo-7697316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>BALD</Card.Title>
                    <Card.Text>
                    BEARD TRIM...............$15
                    <p>THIS INCLUDES THE SHAOING OF YOUR BEARD AND OIL SESSION</p>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                  
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/7320123/pexels-photo-7320123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>CLASSIC</Card.Title>
                    <Card.Text>
                    BALD SHAVE...............$10
                    <p>THIS IS A CLEAN CUT SHAVE OF YOUR BEARD AND FACE</p>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                 
                  
                  
                    
                    
                    
                  </Row>   
             
              </div>

          </Container>
        </Container>
        
        <Container>
          <h1>EXTRAS</h1>
          <Container>
            
          <div className='innertext'>
                <Row>

                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/3993461/pexels-photo-3993461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>SHAMPOO</Card.Title>
                    <Card.Text>
                    SHAMPOO...............$13
                    <p>THIS INCLUDES WASHING OF THE HAIR AND BLOW DRYING</p>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://images.pexels.com/photos/4981479/pexels-photo-4981479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <Card.Body>
                    <Card.Title>COLOUR</Card.Title>
                    <Card.Text>
                    COLOUR...............$50
                    <p>THIS IS A SESSION IF YOU WANT TO ADD A DIFFERENT COLOUR TO YOUR HAIR</p>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                  <Col>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.academyofbeautyprofessionals.com/wp-content/uploads/2017/11/head-spa-1741846_1280-1024x680.jpg" />
                  <Card.Body>
                    <Card.Title>SCALP </Card.Title>
                    <Card.Text>
                    SCALP TREATMENT..............$35
                    <p>THIS INCLUDES SHAMPOO,HOT TOWEL TREATMENT AND OIL SESSION FOR YOUR HAIR</p>
                    </Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                
                   
                   
                  </Row>
              </div>

          </Container>
        </Container>
        
    </div>
  )
}

export default Services