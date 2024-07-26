import React from 'react'
import '../styling/ButtonIcon.css'
import { Button } from '@material-ui/core'

function ButtonIcon({src, title}) {
  return (
    <div className='buttonIcon'>
        <Button>
            <span className='buttonIcon__span'>
                <img src={src} alt='' />
                <p>{title}</p>
                <span className='buttonIcon__underline'></span>
            </span>
        </Button>
    </div>
  )
}

export default ButtonIcon