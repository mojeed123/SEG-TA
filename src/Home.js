import React from 'react'
import Navbar from './Navi'
import './App.css'

function Home() {
  return (
    <div>
        <header>
          <Navbar></Navbar>
        </header>
        <div className='homediv'>
          <h1>ALADINS HAIRCUT SHOP</h1>
          <h3>OTTAWA'S BARBERSHOP</h3>
        </div>
    </div>
  )
}

export default Home