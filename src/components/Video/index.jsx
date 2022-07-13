import React from 'react'
import { Section } from './style'
import video1 from '../../assets/video1.png'
import video2 from '../../assets/video2.png'
import { motion } from 'framer-motion'
import {videoAnimations } from '../../animation'
const Video = () => {
  return (
      <Section>
          <div className='background'>
              <img src={video1} alt="Design" className='design1' />
              <img src={video2} alt="Design" className='design1' />
          </div>
              <motion.div className='video'
                  variants={videoAnimations}
                  transition={{
                      delay: 0.03,
                      type: "tween",
                      duration:0.8
                  }}
                  whileInView={{opacity:1}}
              >
                  <iframe width="960" height="515" src="https://www.youtube.com/embed/_VONMkKkdf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </motion.div>
          
    </Section>
  )
}

export default Video