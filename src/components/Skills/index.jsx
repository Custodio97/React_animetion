import React from 'react'
import { Section } from './style'
import Title from '../Title'
import skills1 from '../../assets/skills1.png'
import skills2 from '../../assets/skills2.png'
import { skillsBarAnimations } from '../../animation'
import { motion } from 'framer-motion'
import {useScroll} from '../useScroll'
const Skills = () => {
    const [element, controls] = useScroll()
    const skillsData = [
        {
            name: "creatity",
            amount:75
        },
        {
            name: "coding",
            amount: 50
        },
        {
            name: "marketing",
            amount: 90
        },
        {
            name: "design",
            amount: 30
        }
    ]
  return (
      <Section id='skills' ref={element}>
          <Title value='skills' />
          <div className='background'>
              <img src={skills1}  className="design1" alt="skills design1" />
              
          </div>
          <div className='skills__title'>
              <p>Our Skills</p>
              <h2>Check our super awesome skills</h2>
          </div>
          <div className='skills'>
              <div className='skills__bars'>
                  {skillsData.map(({ name, amount }) => {
                      return (
                          <motion.div className='skills_bars_bar'
                              key={name}
                              variants={skillsBarAnimations}
                              animate={controls}
                              transition={{
                                  delay: 0.03,
                                  type: "tween",
                                  duration:0.8
                              }}
                              whileInView={{opacity:1,y:0}}
                          >
                              <div className='container'>
                                  <progress value={amount} max="100" />
                                  <span>{name}</span>
                                   <h3>{amount}</h3>
                              </div>
                             
                          </motion.div>
                      )
                  })}

              </div>
              <div className='skills__content'>
                  <p className='title'>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                  </p>
                  <p className='description'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, tenetur, eos eveniet ipsam cum fugiat, quisquam adipisci suscipit atque laboriosam incidunt quod sequi harum. Nobis beatae rerum reprehenderit dolorum vero.
                  </p>
              </div>
          </div>
      </Section>
  )
}

export default Skills