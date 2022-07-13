import React from 'react'
import { Section } from './style'
import { contactAnimations } from '../../animation'
import Title from '../Title'
import { motion } from 'framer-motion'
import {useScroll} from '../useScroll'
const Contact = () => {
    const [element,controls]=useScroll()
  return (
      <Section id='contact' ref={element}>
          <Title value='contact' />
          <motion.div
              className='contact'
              animate={controls}
              variants={contactAnimations}
              transition={{
                  delay: 0.03,
                  type: "tween",
                  duration:0.8
              }}
          >
              <div className='contact__title'>
                  <p>Stay in touch with us</p>
                  <h2>Contacto ipsum dolor </h2>
              </div>
              <div className='contact__data'>
                  <div className='contact__data__description'>
                      <h4>Lorem ipsum dolor sit amet consectetur,</h4>
                      <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, possimus. Blanditiis fugiat officiis aspernatur 
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed, cupiditate doloribus doloremque minima numquam, necessitatibus consectetur velit beatae 
                      </p>
                      <div>
                          <p>
                              <strong>Address:</strong> Some Street Brazil
                          </p>
                          <p>
                              <strong>Email:</strong>
                              lorem@gmail.com
                          </p>
                          <p>
                              <strong>Email:</strong>
                              www.tourtube.com
                          </p>
                      </div>
                  </div>
                  <div className='contact__data__form'>
                      <input type="text" placeholder='name' />
                      <input type="email" placeholder='email' />
                      <textarea placeholder='message'></textarea>
                      <button>Send Message</button>
                  </div>
              </div>
          </motion.div>
    </Section>
  )
}

export default Contact