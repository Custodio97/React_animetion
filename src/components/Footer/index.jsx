import React from 'react'
import { Foote } from './style'
import { BsBehance, BsFacebook, BsTwitter,BsYoutube } from 'react-icons/bs'
import { useScroll } from '../useScroll'
import { footerLogoAnimations, footerTextAnimations } from '../../animation'
import {motion} from 'framer-motion'

const Footer = () => {
    const [element,controls]=useScroll()
  return (
      <Foote ref={element}>
          <motion.div animate={controls}
              variants={footerTextAnimations}
              transition={{
                  delay: 0.02,
                  type: "tween",
                  duration:0.8
              }}
          >
              &copy; Lorem ipsum dolor sit amet consectetur
          </motion.div>
          <motion.div className='footer__social__icons'
              animate={controls}
              variants={footerLogoAnimations}
              transition={{
                  delay: 0.02,
                  type: "tween",
                  duration:0.8,
              }}
              
          >
              <BsBehance />
              <BsTwitter />
              <BsFacebook />
              <BsYoutube/>
          </motion.div>
    </Foote>
  )
}

export default Footer