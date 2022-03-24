import React from 'react'
import './Loading.scss'

import loguito from './../../assets/NAicon-01.svg'
import loguitoBlanco from './../../assets/NAiconWhite.svg'

const Loading = () => {
  const body = document.getElementById('body')
  const darkClassExist = body.classList[1]
  return (
    <div className='bg'>
        {
            darkClassExist !== undefined
              ? <img src={loguitoBlanco} alt="logo" className="logo" />
              : <img src={loguito} alt="logo" className="logo" />
          }
    </div>
  )
}

export default Loading