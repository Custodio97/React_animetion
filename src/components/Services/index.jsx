import React from 'react'
import { Section } from './style'
import { motion } from 'framer-motion'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import Title from '../Title'
import play from '../../assets/play.png'
import { useScroll } from '../useScroll'
import {servicesAnimations} from '../../animation'
const Services = () => {
    const [element, controls] = useScroll()
    const data = [
            {
            type: "Design",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ",
            image:service1
        },
        {
            type: "Code",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ",
            image: service2
        },
        {
            type: "Support",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ",
            image: service3
        }
    ]
  return (
      <Section id='services' ref={element}>
          <Title value='services' />
          <div className='services'>
              {data.map((service, index) => {
                  return (
                      <motion.div  className='services__service'
                          key={service.type}
                          variants={servicesAnimations}
                          animate={controls}
                          transition={{
                              delay: 0.03,
                              type: "tween",
                              duration:0.8
                          }}
                          whileInView={{opacity:1,y:0}}
                      >
                          <div className='services__service__image'>
                              <img src={service.image}/>
                          </div>
                          <div className='services__sercive__title'>
                              <span>0{index + 1}</span>
                              <h2>{service.type}</h2>
                          </div>
                          <p className='services__service__description'>
                              {service.text}
                              <img src={play} alt="Play" />
                          </p>
                      </motion.div>
                  )
              })}
          </div>
    </Section>
  )
}

export default Services