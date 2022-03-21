import React from 'react'
import './Loading.scss'

import loguito from './../../assets/NAicon-01.svg'

const Loading = () => {
  return (
    <div className='bg'>
        <img src={loguito} alt="logo" className="logo" />
    </div>
  )
}

export default Loading