import React from 'react'
import './Hero.css'
import hand_icons from '../Assets/hand_icon.png'
import arrow_icons from '../Assets/arrow.png'
import hero_icons from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icons">
                        <p>new </p>
                        <img src={hand_icons} alt="" />
                    </div>
                    <div className="text">
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                </div>

                <div className="hero-arrow-btn">
                    <p>Latest Collection</p>
                    <img src={arrow_icons} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_icons} alt="" />
            </div>

        </div>
    )
}

export default Hero