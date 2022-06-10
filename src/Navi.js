import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navi() {
  return (
    <div>
      <header className='navi' >
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navba">
                <Nav.Link href="/" className='links'>Home</Nav.Link>
                <Nav.Link href="/location" className='links'>Location</Nav.Link>
                <Nav.Link href="/services" className='links'>Services</Nav.Link>
                <Nav.Link href="/teams" className='links'>Teams</Nav.Link>
                <Nav.Link href="/appointment" className='links'>Appointment</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Navi
