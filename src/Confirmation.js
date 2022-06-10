import React from 'react'
import Navi from './Navi'
import {name} from './Appointment'
import { Container } from 'react-bootstrap'


function Confirmation() {
    return (
        <div>
            <Navi></Navi>
            <div className="confirm">
            <Container>
            <h1>{name} your confirmation has been booked and an email will be sent to you shortly</h1>

           
           

            </Container>
            
        </div>
        </div>
    )
}

export default Confirmation

