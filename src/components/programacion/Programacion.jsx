import React from 'react'
import Back from '../layout/Back'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faSass } from '@fortawesome/free-brands-svg-icons'

import './Programacion.scss'
import links from './../../assets/links'

/* Imágenes */
import jokes from '../../assets/jokes.jpeg'
import climapp from '../../assets/climapp.jpg'
import gifsImg from '../../assets/appGifs.jpg'
import webAnteriorImg from '../../assets/portfoliomio.jpg'
import explounas from '../../assets/explounas.jpg'

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
          
          <Card name="Explouñas website" source={explounas} 
          link={links.proyectos+'#2104063847ed485db9d7c15da52455e7'} 
          link_web={'https://explounas.vercel.app'}/>

          <Card name="App de insultos" source={jokes} 
          link={links.proyectos+'#d42c95250bb543d1b4e4405e190988fe'} 
          link_web={'https://jokes-na.vercel.app'}/>

          <Card name="App del clima" source={climapp} 
          link={links.proyectos+'#c07349267b9d4e3bb543f07dfc7fc5d6'} 
          link_web={'https://nicolasarevalo.github.io/climapp'}/>

          <Card name="App de gifs" source={gifsImg} 
          link={links.proyectos+'#9dd934ef707c4e7696a58304b658c931'} 
          link_web={'https://nicolasarevalo.github.io/giphy-app'}/>

          <Card name="Portfolio" source={webAnteriorImg} 
          link={links.proyectos+'#79c68b5f49bf42f894ea48e991d843a6'} 
          link_web={'https://nicolas-arevalo.netlify.app'}/>

        </div>

      </div>
    </a.div>
  )
}

export default Programacion