import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Button, Dropdown} from 'react-bootstrap';

import './App.css'
import Navbar from './Navi'
import { Link } from 'react-router-dom';


function Appointment() { 
  let [name, setName] = useState("")
    let [email, setEmail] = useState("")

  
 
  return (
    <div>
      
      <Navbar></Navbar>
        <div className="appoint">
          <h1 className='header1'>APPOINTMENTS</h1>
        <Container >
            <h3>SERVICES</h3>
            <Container>
            <Form.Select aria-label="CUTS">
              <option>select the the type of cut </option>
              <option value="1">BUZZ CUT</option>
             <option value="2">CLEAN CUT</option>
             <option value="3">CLASSIC SHAVE/BEARD TRIM</option>
              </Form.Select>
            </Container>
            <Container>
              <h3>EXTRAS</h3>
              <Container>
              <Form.Select aria-label="EXTRAS">
              <option>select the extra if applicable </option>
              <option value="1">SHAMPOO</option>
             <option value="2">SCALP TREATMENT</option>
             <option value="3">COLOUR</option>
              </Form.Select>

              </Container>
            </Container>
            <Container>
              <h3>TEAM</h3>
              <Container>
              <Form.Select aria-label="TEAM MEMBER">
              <option>select the person you want </option>
              <option value="1">John</option>
             <option value="2">Jackson</option>
             <option value="3">Ronaldo</option>
              </Form.Select>


              </Container>
            </Container>
            
            

          
            

            
                

            
              
              

                
              
              
              
              
              <Container>
              <h3>Date and Time</h3>
                <Container>
               
                <Form.Select aria-label="DATE AND TIME">
              <option>pick the date and time available </option>
              <option value="1">Sunday-4pm</option>
             <option value="2">Sunday-10am</option>
             <option value="3">Monday- 10am to 2pm</option>
             <option value="4">Tuesday- 7pm</option>
             <option value="5">Tuesday- 3pm</option>
             <option value="6">Wednesday- 5pm</option>
             <option value="7">Thursday- 10am to 6pm</option>
             <option value="8">Friday- 10am to 1pm</option>
             <option value="9">Friday - 1pm to 5pm</option>
              </Form.Select>
               
              </Container>
              </Container>
            <div>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Enter Name" value= {name}  onChange={(e)=> setName(e.target.value)}/>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value= {email}  onChange={(e)=> setEmail(e.target.value)}/>
            </Form.Group>
            
            
            <Link to="/confirmation" > <Button variant="primary" type="submit"  >Submit</Button></Link>
            
              
           
          </Form>
            </div>
        </Container>
        </div>
    </div>
  )
  
}
export const name = "";
export default Appointment