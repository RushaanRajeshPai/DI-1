import React from 'react'
import './Milestones.css'
import milea from '../Assets/milea.png'
import mileb from '../Assets/mileb.png'
import line from '../Assets/line.png'

const Milestones = () => {
    return (
        <div className='milestones-main'>
            <div className='milestones-head'>
                <h2 id='mileHead'>MILESTONES</h2>
                <h1>Us By Numbers</h1>
            </div>
            <div className='milestones-items'>
                <div id='milestones1'>
                    <img src={milea} alt="" />
                    <p id='pno'><strong>124</strong></p>
                    <p>Complete Projects</p>
                </div>
                <div id='line1'>
                    <img src={line} alt="" />
                </div>
                <div id='milestones2'>
                    <img src={mileb} alt="" />
                    <p id='pno'><strong>2034</strong></p>
                    <p>Succesfull Campaigns</p>
                </div>
                <div id='line2'>
                    <img src={line} alt="" />
                </div>
                <div id='milestones3'>
                    <img src={mileb} alt="" />
                    <p id='pno'><strong>89%</strong></p>
                    <p>Returned Clients</p>
                </div>
            </div>
        </div>
    )
}

export default Milestones