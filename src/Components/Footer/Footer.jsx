import React from 'react'
import './Footer.css'
import social from '../Assets/social.png'


const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-box'>
        <div className='column1'>
          <h2>.logo</h2>
          <p>Funding freemium long tail hypotheses first <br /> mover advantage assets ownership niche <br /> market startup investor. Burn rate termsheet <br /> leverage backing stock channels long tail <br /> twitter conversion. Customer founders growth <br />hacking ecosystem value proposition direct mailing <br /> graphical user interface innovator stock. </p>
        </div>
        <div className='column2'>
          <p><strong>Services</strong></p>
          <p>Digital Marketing</p>
          <p>Branding</p>
          <p>Market Promotion</p>
          <p>Digital Campaign</p>
        </div>
        <div className='column3'>
          <p><strong>About Us</strong></p>
          <p>Milestone</p>
          <p>Check Our Pricing Plan</p>
          <p>Expert Team</p>
          <p>Our Exciting News</p>
        </div>
        <div className='column4'>
          <p><strong>Address</strong></p>
          <p>123 Lorem Ipsum Street <br />Jakarta, Indonesia</p>
          <img src={social} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer



