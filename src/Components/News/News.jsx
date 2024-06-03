import React from 'react'
import './News.css'
import design from '../Assets/design.png'
import readmore from '../Assets/readmore.png'

const News = () => {
    return (
        <div className='news-main'>
            <div className='news-head'>
                <h4>OUR BLOG</h4>
                <h1>Recent News</h1>
            </div>

            <div className='all-news'>
                <div className='news1'>
                    <div id='news-top1'></div>
                    <div id='news-bottom1'>
                        <img src={design} alt="" />
                        <h3>I think night-time is dark so you can <br />imagine with less distraction</h3>
                        <p>I would rather fix something more important than my hair. <br /> why do some people always see beautiful skies and grass and lovely flowers and incredible <br /> human beings, while others are hard-pressed to find anything or any place <br /> that is beautiful? the one way of tolerating existence is to lose…</p>
                        <img src={readmore} alt="" />
                    </div>
                </div>
                <div className='other-news'>
                    <div className='news2'>
                        <div id='news-top'></div>
                        <div id='news-bottom'>                         
                            <h3>The individual is born of nature,<br /> but the artist is born of </h3>
                        </div>
                    </div>
                    <div className='news3'>
                        <div id='news-top2'></div>
                        <div id='news-bottom2'>
                            <h3>I would rather fix something more <br /> important than my hair </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News