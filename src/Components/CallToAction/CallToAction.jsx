import React from 'react'
import './CallToAction.css'


const CallToAction = () => {
  return (
    <div className='action-main'>
        <div className='action-head'>
            <h4>DON'T MISS</h4>
            <h1>Subscribe & Get Free Stuff</h1>
        </div>

        <div className='action-input'>
            <input type="text" placeholder='Enter your email address...' id='ip'/>
            <button id='sub-btn'>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default CallToAction