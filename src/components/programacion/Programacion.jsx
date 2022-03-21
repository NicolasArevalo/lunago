import React from 'react'
import Back from '../layout/Back'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faSass } from '@fortawesome/free-brands-svg-icons'

import './Programacion.scss'
import links from './../../assets/links'

/* Imágenes */
import moviesImg from '../../assets/moviesApp.jpg'
import gifsImg from '../../assets/appGifs.jpg'
import webAnteriorImg from '../../assets/portfoliomio.jpg'
import sisFactuImg from '../../assets/sisFactu.jpg'

/* Import Animaciones */
import { useSpring, a } from 'react-spring'

const Programacion = () => {
  /* Animaciones */
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <a.div className='pro_wrapper' style={props}>
      <Back name="PROGRAMACIÓN" />
      <aside>
        <h2>Herramientas</h2>
        <div className="herramientas_inside">
          <FontAwesomeIcon icon={faSass} className='icon' />
          <FontAwesomeIcon icon={faJs} className='icon' />
          <FontAwesomeIcon icon={faReact} className='icon' />
        </div>
        <span>Entre otras...</span>
      </aside>
      <div className="bloque"></div>
      <div className="pro_proyectos">
        <h1>Proyectos</h1>
        <div className="proyectos_wrapper">
          <a href={links.proyectos+'#e3fc81a59c61459abb24b693919365b3'}>
            <div className="proyectos_item hoverTarjeta">
              <img src={moviesImg} alt="proyecto movies" />
              <p>App de películas</p>
            </div>
          </a>
          <a href={links.proyectos+'#9dd934ef707c4e7696a58304b658c931'}>
            <div className="proyectos_item hoverTarjeta">
              <img src={gifsImg} alt="proyecto movies" />
              <p>App de gifs</p>
            </div>
          </a>
          <a href={links.proyectos+'#808161d1dcfe46f8810e5bd37a201f8a'}>
            <div className="proyectos_item hoverTarjeta">
              <img src={webAnteriorImg} alt="proyecto movies" />
              <p>Mi página web anterior</p>
            </div>
          </a>
          <a href={links.proyectos+'#a162fb2ca7954ac9a233f7134c3bf79b'}>
            <div className="proyectos_item hoverTarjeta">
              <img src={sisFactuImg} alt="proyecto movies" />
              <p>Sistema de facturación</p>
            </div>
          </a>
        </div>

      </div>
    </a.div>
  )
}

export default Programacion