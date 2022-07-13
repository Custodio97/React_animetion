import React from 'react'
import {Div} from './style'
const Title = ({value}) => {
  return (
      <Div className='sideTitle'> 
          <h1>{value}</h1>
    </Div>
  )
}

export default Title