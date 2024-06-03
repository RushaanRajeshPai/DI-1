import React from 'react'
import './Testimonial.css'
import colon from '../Assets/colon.png'
import name from '../Assets/name.png'

const Testimonial = () => {
  return (
    <div className='testimonial-main'>
        <div className='orangebox1'></div>
        <div className='greybox1'></div>
        <div className='testimonial-text'>
            <h3 id='text1'>TESTIMONIAL</h3>
            <h1><strong>What they say</strong></h1>
            <img src={colon} alt="" />
            <p>Writers aren't people exactly. or, if they're any good,<br />they're a whole lot of people trying so hard to be one <br /> person. it's like actors, who try so pathetically not to <br /> look in mirrors. who lean backward trying--only to <br />see their faces in the reflecting chandeliers.</p>
            <img src={name} alt="" />
        </div>
    </div>
  )
}

export default Testimonial