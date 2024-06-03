import React from 'react'
import './Promotion.css'
import play from '../Assets/play.png'

const Promotion = () => {
    return (
        <div>
            <div className='promotion-main'>
                <div className='promotions'>
                    <div className='whitebox'>
                        <h1><strong>We always <br />think big</strong></h1>
                        <p>If the path is beautiful, let us not ask where it leads. <br /> my religion is very simple. my religion is kindness. <br /> each of us has within our power the ability to disrupt</p>
                        <button id='learn-btn'>LEARN MORE</button>
                    </div>
                    <div className='greybox'>
                        <img src={play} alt="" />
                    </div>
                </div>
                <div className='projects-main'>
                    <div className='orangebox'>
                        <h3 id='case'>CASE STUDIES</h3>
                        <h1 id='recent'>Recent Projects</h1>
                    </div>
                    <div className='lastbox'>
                        <div className='row1'>
                            <div className='proj1'>
                                <h5><strong>Flower Power</strong></h5>
                                <p>My first thought about art, as a child,<br />was that the artist brings</p>
                            </div>
                            <div className='proj2'>
                                <h5><strong>Abstraction Project</strong></h5>
                                <p>My first thought about art, as a child,<br />was that the artist brings</p>
                            </div>
                            <div className='proj3'>
                                <h5><strong>Virtual Reality</strong></h5>
                                <p>My first thought about art, as a child,<br />was that the artist brings</p>
                            </div>
                        </div>

                        <div className='row2'>
                            <div className='proj4'>
                                <h5><strong>Working From Home</strong></h5>
                                <p>My first thought about art, as a child,<br />was that the artist brings</p>
                            </div>
                            <div className='proj5'>
                                <h5><strong>Car Model</strong></h5>
                                <p>My first thought about art, as a child,<br />was that the artist brings</p>
                            </div>
                            <div className='proj6'>
                                <h5><strong>Smiling Project</strong></h5>
                                <p>My first thought about art, as a child,<br />was that the artist brings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Promotion