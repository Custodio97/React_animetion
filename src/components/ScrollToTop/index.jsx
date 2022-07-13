import React, { useState } from 'react'
import {Div} from './style'
import {FaChevronUp} from 'react-icons/fa'

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
    window.addEventListener("scroll", () => {
        window.pageXOffset > 100 ? setVisible(true) :
            setVisible(false)
    })
  return (
      <Div>
          <a href='#' className={`${visible ? 'block' : 'none'}`}>
              <FaChevronUp/>
          </a>
    </Div>
  )
}

export default ScrollToTop