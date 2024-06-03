import React from 'react'
import './Header.css' 

const Header = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p><strong>.logo</strong></p>
        </div>
        <ul className='nav-menu'>
            <li>OUR SERVICES</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT US</li>
        </ul>
    </div>
  )
}

export default Header