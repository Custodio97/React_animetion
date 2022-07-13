import React,{useState} from 'react'
import { Nav } from './style'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { navAnimation } from '../../animation'
import {useScroll} from '../useScroll'
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [element, controls] = useScroll()
    const html = document.querySelector("html")
    html.addEventListener("click",(e)=> setIsNavOpen(false))
  return (
      <Nav state={isNavOpen ? 1 : 0}
          variants={navAnimation}
          transition={{ delay: 0.1 }}
          ref={element}
          animate={controls}
      >
          <div className='brand__container'>
              <a href='#' className='brand'>
                  <img src={logo} alt="logo" />
              </a>
              <div className='toggle'>
                  {isNavOpen ? (<MdClose onClick={() => setIsNavOpen(false)} />) : (<GiHamburgerMenu onClick={(e) => {
                      e.stopPropagation(); setIsNavOpen(true);
                  }}
                  />)
                  }
              </div>
          </div>
          <div className={`links ${isNavOpen ? "show" : "" }` }>
              <ul>
                   <li className='active'><a href="#home">Home</a></li>
                   <li><a href="#services">Services</a></li>
                   <li><a href="#portfolio">Portifolio</a></li>
                   <li><a href="#blog">Blog</a></li>
                   <li><a href="#skills">Skills</a></li>
                   <li><a href="#contact">Contatc</a></li>
              </ul>
          </div>
      </Nav>
  )
}

export default Navbar