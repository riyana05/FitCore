import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition={type:'spring',duration:3}
  return (
    <div className="hero">
        <div className='blur blur-h'></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
              <motion.div 
              initial={{left:'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition,tyoe:'tween'}}
              > </motion.div>
              <span> The Pinnacle of Fitness in Your Neighborhood </span>
            </div>
            <div className="hero-text">
                <div>
                  <span className='stroke-text'>BUILD </span>
                  <span>YOUR</span>
                </div>
                <div>
                  <span>DREAM </span>
                  <span>PHYSIQUE</span>
                </div>
                <div> 
                  <span>More Than a Gym — It's a Lifestyle.</span>
                </div>
            </div>
            <div className="figures">
                <div>
                  <span><NumberCounter end={50} start={10} delay='4' preFix="+"/> </span>
                  <span>EXPERT TRAINERS</span>
                </div>
                <div>
                  <span><NumberCounter end={1000} start={900} delay='4' preFix="+"/></span>
                  <span>ACTIVE MEMBERS</span>
                </div>
                <div>
                  <span><NumberCounter end={40} start={10} delay='4' preFix="+"/> </span>
                  <span>FITNESS PROGRAMS</span>
                </div>
            </div>
            <div className="buttons">
              <button className="btn">GET STARTED</button>
              <button className="btn">LEARN MORE</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">JOIN NOW</button>
            <motion.div 
             initial={{right:'-1rem'}}
              whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
              
              <img src={Heart} alt=""/>
              <span>Heart Rate</span>
              <span>120bpm</span>
            </motion.div>
            <img src={hero_image} alt="" className="hero-image"/>
            <img src={hero_image_back} alt="" className="hero-image_back"/>
            <div className="calories">
              <img src={Calories} alt=""/>
              <div>
                 
                <span>Calories Burned</span>
                <span>300 kcal</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
