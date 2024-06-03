import React from 'react'
import './OurTeam.css'
import arrows from '../Assets/arrows.png'

const OurTeam = () => {
    return (
        <div className='ourteam-main'>
            <div className='ourteam-head'>
                <h3>OUR TEAM</h3>
                <h1>Behind The Scenes</h1>
            </div>
            <div className='people'>
                <div id='people1'>
                    <div id='top'></div>
                    <div id='bottom'>
                        <h4>Jerry Oregano</h4>
                        <p>CEO % Co-Founder</p>
                    </div>
                </div>
                <div id='people2'>
                    <div id='top2'></div>
                    <div id='bottom'>
                        <h4>Amanda White</h4>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
                <div id='people3'>
                    <div id='top'></div>
                    <div id='bottom'>
                        <h4>Jessie Lee</h4>
                        <p>Chief Technology Officer</p>
                    </div>
                </div>
            </div>
            <div id='arrows'>
                <img src={arrows} alt="" />
            </div>
        </div>
    )
}

export default OurTeam