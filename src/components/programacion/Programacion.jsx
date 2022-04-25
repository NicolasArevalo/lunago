import React from 'react'
import Back from '../layout/Back'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faSass } from '@fortawesome/free-brands-svg-icons'

import './Programacion.scss'
import links from './../../assets/links'

/* Imágenes */
import climapp from '../../assets/climapp.jpg'
import gifsImg from '../../assets/appGifs.jpg'
import webAnteriorImg from '../../assets/portfoliomio.jpg'
import sisFactuImg from '../../assets/sisFactu.jpg'

/* Import Animaciones */
import { useSpring, a } from 'react-spring'
import Card from './card/Card'

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
          {/* <a href={links.proyectos+'#e3fc81a59c61459abb24b693919365b3'}>
            <div className="proyectos_item hoverTarjeta">
              <img src={climapp} alt="proyecto movies" />
              <p>App del clima </p>
            </div>
          </a> */}
          <Card name="App del clima" source={climapp} link={links.proyectos+'#e3fc81a59c61459abb24b693919365b3'} link_web={'https://nicolasarevalo.github.io/climapp'}/>
          <Card name="App de gifs" source={gifsImg} link={links.proyectos+'#e3fc81a59c61459abb24b693919365b3'} link_web={'https://nicolasarevalo.github.io/giphy-app'}/>
          <Card name="Portfolio" source={webAnteriorImg} link={links.proyectos+'#e3fc81a59c61459abb24b693919365b3'} link_web={'https://nicolas-arevalo.netlify.app'}/>
          <Card name="Sistema de facturación" source={sisFactuImg} link={links.proyectos+'#e3fc81a59c61459abb24b693919365b3'} link_web={'https://nicolasarevalo.github.io/sisFacturacion'}/>
        </div>

      </div>
    </a.div>
  )
}

export default Programacion