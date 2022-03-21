import React from 'react'
import Back from '../layout/Back'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faMicrophone, faPodcast } from '@fortawesome/free-solid-svg-icons'

import links from './../../assets/links'
import './Voz.scss'

import believer from './../../assets/believer.jpg'
import industry from './../../assets/industry.jpg'
import stressed from './../../assets/sso.jpg'

import voice123 from './../../assets/Voice123-Media-Release-banner.jpg'
import cincomentarios from './../../assets/5mentarios.png'
/* Import Animaciones */
import { useSpring, a } from 'react-spring'

const Voz = () => {
  /* Animaciones */
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <a.div className='voz_wrapper' style={props}>
      <Back name="VOZ" />

      <aside>
        <h2>Herramientas</h2>
        <div className="herramientas_inside">
          <FontAwesomeIcon icon={faMicrophone} className='icon' />
        </div>
        <span>Solo mi micrófono y audacity...</span>
      </aside>

      <div className="bloque">

      </div>

      <div className="voz_content">

        <div className="voz_content-items">
          <h1>Versos escritos por mí</h1>
          <div className="content_carousel">
            <div className="icon_wrapper">
              <a href={links.youtube}><FontAwesomeIcon icon={faYoutube} className='icon icon-inside' /></a>
            </div>
            <a href={links.stressed}>
              <div className="carousel_item hoverTarjeta">
                <img src={stressed} alt="miniatura de youtube" />
                <p>Stressed Out</p>
              </div>
            </a>
            <a href={links.industry}>
              <div className="carousel_item hoverTarjeta">
                <img src={industry} alt="miniatura de youtube" />
                <p>Industry baby</p>
              </div>
            </a>
            <a href={links.believer}>
              <div className="carousel_item hoverTarjeta">
                <img src={believer} alt="miniatura de youtube" />
                <p>Believer</p>
              </div>
            </a>
          </div>
        </div>

        <div className="voz_content-carousel">
          <div className="voz_content-items">
            <h1>Publicidad</h1>
            <div className="content_carousel">
              <div className="icon_wrapper left">
                <a href={links.voice}><FontAwesomeIcon icon={faMicrophone} className='icon icon-inside' /></a>
              </div>
              <div className="carousel_item nopointer">
                <img src={voice123} alt="voice123" />
              </div>
            </div>
          </div>
          <div className="voz_content-items">
            <h1>Podcast</h1>
            <div className="content_carousel">
              <div className="icon_wrapper">
                <a href={links.anchor}><FontAwesomeIcon icon={faPodcast} className='icon icon-inside' /></a>
                <a href={links.spotify}><FontAwesomeIcon icon={faSpotify} className='icon icon-inside' /></a>
              </div>
              <div className="carousel_item nopointer" >
                <img src={cincomentarios} alt="miniatura de podcast" className='podcastImg' />
              </div>
            </div>
          </div>
        </div>

      </div>


    </a.div>
  )
}

export default Voz