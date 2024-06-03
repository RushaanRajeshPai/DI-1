import React from 'react'
import './Services.css'
import monitor from '../Assets/monitor.png'
import mobile from '../Assets/mobile.png'
import document from '../Assets/document.png'
import community from '../Assets/community.png'
import customer from '../Assets/customer.png'

const Services = () => {
  return (
    <div className='s-all'>
      <div className='s-header'>
        <h4>SERVICES</h4>
        <h2><strong>Awesome Services</strong></h2>
      </div>

      <div className='s-boxes1'>
        <div id='sbox1'>
          <img src={monitor} alt="" />
          <h5 id='h5tag'>Website <br />Development</h5>
        </div>
        <div id='sbox2'>
          <h5 id='h6tag'>Product <br />Photography</h5>
        </div>
        <div id='sbox3'>
          <img src={mobile} alt="" />
          <h5 id='h5tag'>Mobile App <br />Development</h5>
        </div>
      </div>

      <div className='s-boxes2'>
        <div id='sbox4'>
          <img src={document} alt="" />
          <h5 id='h5tag'>Document <br />Legal Policy</h5>
        </div>
        <div id='sbox5'>
          <img src={community} alt="" />
          <h5 id='h5tag'>Managing <br />Community</h5>
        </div>
        <div id='sbox6'>
          <img src={customer} alt="" />
          <h5 id='h5tag'>Customer <br />Engagement</h5>
        </div>
      </div>
    </div>
  )
}

export default Services