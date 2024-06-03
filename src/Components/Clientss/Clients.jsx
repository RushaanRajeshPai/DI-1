import React from 'react'
import './Clients.css' 
import logo_1 from '../Assets/logo_1.png'
import logo_2 from '../Assets/logo_2.png'
import logo_3 from '../Assets/logo_3.png'
import logo_4 from '../Assets/logo_4.png'
import logo_5 from '../Assets/logo_5.png'

const Clients = () => {
  return (
    <div className='clients-row'>
        <div id='logo1'>
            <img src={logo_1} alt="" />
        </div>
        <div id='logo2'>
            <img src={logo_2} alt="" />
        </div>
        <div id='logo3'>
            <img src={logo_3} alt="" />
        </div>
        <div id='logo4'>
            <img src={logo_4} alt="" />
        </div>
        <div id='logo5'>
            <img src={logo_5} alt="" />
        </div>
    </div>
  )
}

export default Clients