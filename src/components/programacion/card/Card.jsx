import React from 'react'
import './Card.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = ({name, source, link, link_web}) => {
    return (
        <div className="proyectos_item">
            { name == "Explouñas website" ? <FontAwesomeIcon icon={faStar} className='iconCard'/> : null }
            
            <img src={source} alt={name} />
            <p className="card_nombre">{name}</p>
            <p><a href={link} className="card_link">Más info</a>•<a href={link_web} className="card_link">Ver web</a></p>
            
        </div>
    )
}

export default Card