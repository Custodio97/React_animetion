import React from 'react'
import { Section } from './style'
import Title from '../Title'
import placeholder from '../../assets/placeholder.png'
import play from '../../assets/play.png'
import { motion } from 'framer-motion'
import { blogsAnimations } from '../../animation'
import {useScroll} from '../useScroll'
const Blog = () => {
    const [element, controls] = useScroll()
    const blogsData = [
        {
            title: "Summer trip to mountains",
            type: "Adventure",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos sunt accusamus."
            
        },
        {
            title: "Flowers purple from syk",
            type: "Personal",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos sunt accusamus."
        },
        {
            title: "Rock conert main",
            type: "Music",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos su"
        }
    ]
  return (
      <Section id='blog' ref={element}>
          <Title value="Blog" />
          <div className='decoration'></div>
          <div className='blogs'>
              {blogsData.map(({ title, type, description }) => {
                  return (
                      <motion.div className='blog'
                          key={title}
                          variants={blogsAnimations}
                          animate={controls}
                          transition={{
                              delay: 0.03,
                              type: "tween",
                              duration:0.8,
                          }}
                          whileInView={{opacity:1,y:0}}
                      >
                          <div className='image'>
                              <img src={placeholder} />
                          </div>
                          <div className='title'>
                              <h3>{title}</h3>
                          </div>
                          <span className='type'>{type}</span>
                          <div className='description'>
                              <p>{description}</p>
                          </div>
                          <div className='more'>
                              <img src={play} alt="play" />
                              <span>Read more</span>
                          </div>
                    </motion.div>
                  )
              })}
          </div>
    </Section>
  )
}

export default Blog