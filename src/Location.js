import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from "./Navi"

function Location() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='location'>
        <h1>Location</h1>

        <Container>
          <row>
          <h2>
            CF RIDEAU

          </h2>
          <h2>
           UNIT 500, 234 RIDEAU STREET 

          </h2>
          <h2>
            OTTAWA,ON K2P 3V1

          </h2>
          <h2>
            613491708

          </h2>
          </row>
        </Container>

        
        
        
        <div className='Opening hours'>
          <h2>Opening Hours</h2>

          <Container>
            <row>
              <div>
              <h1 className='divs'>Sunday</h1>
              <h1 className="divs2">9am to 10pm</h1>
              </div>
              <div>
              <h1 className='divs'>Monday</h1>
              <h1 className="divs2">9am to 10pm</h1>
              <div>
              <h1 className='divs'>Tuesday</h1>
              <h1 className="divs2">9am to 10pm</h1>
              <div>
              <h1 className='divs'>Wednesday</h1>
              <h1 className="divs2">9am to 10pm</h1>
              <div>
              <h1 className='divs'>Thursday</h1>
              <h1 className="divs2">9am to 10pm</h1>
              <div>
              <h1 className='divs'>Friday</h1>
              <h1 className="divs2">9am to 8pm</h1>
              <div>
              <h1 className='divs'>Saturday</h1>
              <h1 className="divs2">CLOSED</h1>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              <img src="https://www.google.com/maps/d/thumbnail?mid=1doIVeeqHGpxZf4-Z0tw0EVPHIFY" alt="" ></img>
              
            </row>
          </Container>
        </div>
        

       
      </div>
    </div>

    
  )
}

export default Location