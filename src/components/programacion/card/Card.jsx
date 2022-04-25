import React from 'react'
import './Card.scss'

const Card = ({name, source, link, link_web}) => {
    return (
        <div className="proyectos_item">
            <img src={source} alt={name} />
            <p className="card_nombre">{name}</p>
            <p><a href={link} className="card_link">Más info</a>•<a href={link_web} className="card_link">Ver web</a></p>
            
        </div>
    )
}

export default Card