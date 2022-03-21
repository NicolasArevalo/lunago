import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './Back.scss'


const Back = ( { name } ) => {

    return (
        <div className="back">
            <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} className='flechita' /></Link>
            <h1>{ name }</h1>
        </div>
    )
}

export default Back