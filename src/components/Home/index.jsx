import React from 'react'
import { Section } from './style'
import Navbar from '../Navbar'
import play from '../../assets/play.png'
import { motion } from 'framer-motion'
import {homeAnimation,homeInfoAnimation} from '../../animation'
const Home = () => {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        variants={homeAnimation}
        transition={{delay:0.3,duration:0.6,type:"tween"}}
        className="home"
      >
        <div className='content'>
          <div className='title'>
            <h1>Digital Crafters</h1>
          </div>
          <div className='subTitle'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quo ad ducimus
            </p>
          </div>
          <img src={play} alt="Play Button" />
       </div>
      </motion.div>
      <motion.div className='info'
        variants={homeInfoAnimation}
        transition={{delay:0.3,duration:0.6,type:"tween"}}
      >
        <div className='grid'>
          <div className='col'>
            <strong>Agenct</strong>
            <p>Digital Crafers</p>
          </div>
          <div className='col'>
            <strong>Email</strong>
            <p>lorem@gmail.com</p>
          </div>
          <div className='col'>
            <strong>Mobile</strong>
            <p>+91 9523255546</p>
          </div>
          <div className='col'>
            <strong>Address</strong>
            <p>Some Street India</p>
            <p>960105 Brazil</p>
          </div>
          <div className='col'>
            <strong>Services</strong>
            <p>Corporate Identity</p>
            <p>Digital Crafers</p>
          </div>
          <div className='col'>
            <strong>Working Hours</strong>
            <p>Monday to Friday</p>
            <p>08:00 to 18:00</p>
          </div>
       </div>
      </motion.div>
    </Section>
  )
}

export default Home