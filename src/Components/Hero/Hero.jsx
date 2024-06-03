import React from 'react'
import './Hero.css' 

const Hero = () => {
  return (
    <div className='heros'>
        <div className='texts'>
            <h3 id='hello'>HELLO WORLD</h3>
            <h1 id='h1'><strong> We are <br />Digital <br />Agency</strong></h1>
            <button id='explore-btn'>EXPLORE MORE</button>
        </div>
        <div className='image1'></div>
        <div className='group'></div>        
    </div>
  )
}

export default Hero