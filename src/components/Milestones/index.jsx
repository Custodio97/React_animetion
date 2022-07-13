import React from 'react'
import { Section } from './style'
import milestone1 from '../../assets/milestone1.png'
import milestone2 from '../../assets/milestone2.png'
import milestone3 from '../../assets/milestone3.png'
import milestoneBackground from '../../assets/milestone-background.png'
import { motion } from 'framer-motion'
import { useScroll } from '../useScroll'
import {milestoneAnimations} from '../../animation'
const Milestones = () => {
    const [element, controls] = useScroll()
    const milestone = [
        {
            image: milestone1,
            data: "Cleints Served",
            amount:"407",
        },
        {
            image: milestone2,
            data: "of raw data",
            amount: "10T",
        },
        {
            image: milestone3,
            data: "recommendation",
            amount: "235",
        }
    ]
  return (
      <Section ref={element}>
          <div className='background'>
              <img src={milestoneBackground} alt="Milestone" />
          </div>
          <div className='milestones'>
              {milestone.map((ms) => {
                  return (
                      <motion.div
                          className='milestone'
                          key={ms.data}
                          variants={milestoneAnimations}
                          animate={controls}
                          transition={{
                              delay: 0.03,
                              type: "tween",
                              duration:0.8
                          }}
                      >
                          <p>{ms.amount}</p>
                          <span>{ms.data}</span>
                          <img src={ms.image} alt="milestone" />
                      </motion.div>
                  )
              })}
          </div>
    </Section>
  )
}

export default Milestones