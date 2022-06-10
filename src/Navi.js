import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navi() {
  return (
    <div>
             <header className='navi' >
            <Navbar  expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navba">
        <Nav.Link href="/SEG31" className='links'>Home</Nav.Link>
        <Nav.Link href="/SEG31/location" className='links'>Location</Nav.Link>
        <Nav.Link href="/SEG31/services" className='links'>Services</Nav.Link>
        <Nav.Link href="/SEG31/teams" className='links'>Teams</Nav.Link>
        <Nav.Link href="/SEG31/appointment" className='links'>Appointment</Nav.Link>
                    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
         </div>
  )
}

export default Navi
