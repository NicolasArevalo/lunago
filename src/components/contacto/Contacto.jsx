import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faBook, faMicrophone } from '@fortawesome/free-solid-svg-icons'

import Back from './../layout/Back'

import './Contacto.scss'
import links from './../../assets/links'
/* Import Animaciones */
import { useSpring, a } from 'react-spring'
const Contacto = () => {
  
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  
  return (
    <a.div className='contacto_wrapper' style={props}>
      <Back name="CONTACTO" />
      <div className="contacto_contenido">

        <div className="c_c contacto_profesional">
          <h1 className='letrasPalidas'>PROFESIONAL</h1>
          <div className="contacto_iconos">
            <a href={links.linkedin}><FontAwesomeIcon icon={faLinkedin} className='icono' /> </a>
            <a href={links.github}><FontAwesomeIcon icon={faGithub} className='icono' /> </a>
            <a href={links.twitter}> <FontAwesomeIcon icon={faTwitter} className='icono' /> </a>
          </div>
        </div>
        <div className="c_c contacto_personal">
          <h1 className='letrasPalidas'>PERSONAL</h1>
          <div className="contacto_iconos">
            <a href={links.instagram}><FontAwesomeIcon icon={faInstagram} className='icono' /> </a>
            <a href={links.youtube}><FontAwesomeIcon icon={faYoutube} className='icono' /> </a>
            <a href={links.notion}> <FontAwesomeIcon icon={faBook} className='icono' /> </a>
          </div>
        </div>
        <div className="c_c contacto_voz">
          <h1 className='letrasPalidas'>VOZ</h1>
          <div className="contacto_iconos">
            <a href={links.anchor}><FontAwesomeIcon icon={faPodcast} className='icono' /> </a>
            <a href={links.voice}><FontAwesomeIcon icon={faMicrophone} className='icono' /> </a>
            <a href={links.spotify}>  <FontAwesomeIcon icon={faSpotify} className='icono' /></a>
          </div>
        </div>
        <a href="mailto:inag.458@gmail.com?Subject=Vi%20tu%20página%20web"><h1 className='correo' >Mi correo.</h1></a>
      </div>

    </a.div>
  )
}

export default Contacto