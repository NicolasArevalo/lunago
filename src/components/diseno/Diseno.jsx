import React from 'react'

import Back from './../layout/Back'
import links from './../../assets/links'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import xdIcon from './../../assets/xd.png'
import aiIcon from './../../assets/ai.png'

import './Diseno.scss'
import moviesImg from './../../assets/moviesApp.jpg'
import mockupweb from './../../assets/mockUpWeb.jpg'
import cascada from './../../assets/cascada.jpg'

import logazo from './../../assets/LOGOna-01.png'
import sastreria from './../../assets/LOGOSastreria-01.png'
import pesadillas from './../../assets/pesadillas1.jpg'

/* Import Animaciones */
import { useSpring, a } from 'react-spring'

const Diseno = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <a.div className='diseno_wrapper' style={props}>
      <Back name="DISEÑO" />

      <aside>
        <h2>Herramientas</h2>
        <div className="herramientas_inside">
          <img src={xdIcon} alt="adobe xd" className='icon' />
          <img src={aiIcon} alt="ilustrator icon" className='icon' />
          <FontAwesomeIcon icon={faFigma} className='icon' />
        </div>
        <span>Entre otras...</span>
      </aside>
      <div className="bloque">

      </div>
      <div className="diseno_content">

        <div className="diseno_content-items">
          <h1>Mockups</h1>
          <div className="content_carousel">
            <a href={links.diseno+'#a76d3b0a199e4d7c8edbffcbe53289de'}>
              <div className="carousel_item hoverTarjeta">
                <img src={moviesImg} alt="movies app" />
                <p>App de películas</p>
              </div>
            </a>
            <a href={links.diseno+'#5d69d53d09654f178e58f1c91c025068'}>
              <div className="carousel_item hoverTarjeta">
                <img src={mockupweb} alt="movies app" />
                <p>Diseño de portafolio</p>
              </div>
            </a>
            <a href={links.diseno+'#9f7ddbe931c94b9287837cbd9f8a4c2a'}>
              <div className="carousel_item hoverTarjeta">
                <img src={cascada} alt="movies app" />
                <p>Web elegante</p>
              </div>
            </a>
          </div>
        </div>
        <div className="diseno_content-items">
          <h1>Ilustraciones</h1>
          <div className="content_carousel">
            <a href={links.diseno+'#090d8e596b52464496896995ab946b3c'}>
              <div className="carousel_item hoverTarjeta">
                <img src={logazo} alt="movies app" className='ilustracion' />
              </div>
            </a>
            <a href={links.diseno+'#090d8e596b52464496896995ab946b3c'}>
              <div className="carousel_item hoverTarjeta" >
                <img src={sastreria} alt="movies app" className='ilustracion' />
              </div>
            </a>
            <a href={links.diseno+'#090d8e596b52464496896995ab946b3c'}>
              <div className="carousel_item hoverTarjeta">
                <img src={pesadillas} alt="movies app" className='ilustracion' />
              </div>
            </a>
          </div>
        </div>


      </div>
    </a.div>
  )
}

export default Diseno