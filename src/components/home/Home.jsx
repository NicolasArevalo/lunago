import React from "react";
import { Link } from "react-router-dom"

import './Home.scss'
import hv from './NicolasArevaloHV.pdf'

import loguito from './../../assets/NAicon-01.svg'

/* Import Animaciones */
import { useSpring, a } from 'react-spring'

const Home = () => {
  /* Animaciones */
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  const duration= 2000
  const largo = 2

  const stylesLeftRight = useSpring({

    loop: { reverse: true },
    from: { x: -largo },
    to: { x: largo },
    config: { duration: duration },

  })
  const stylesRightLeft = useSpring({

    loop: { reverse: true },
    from: { x: largo },
    to: { x: -largo },
    config: { duration: duration },

  })

  return (
    <a.main className="home_wrapper" style={props}> 
      <img src={loguito} alt="logo" className="logo" />
      <div className="column agrandarse50">
        <div className="item grouno">
          <a href="https://nicolasarevalo.notion.site/Notas-de-Nico-d1b083b740b94c558292783c9f5e16c3"> <a.h1 style={stylesRightLeft}>BLOG</a.h1> </a>
        </div>
        <div className="item grouno" >
          <Link to="/sobremi"><a.h1 style={stylesLeftRight}>SOBRE MÍ</a.h1></Link>
        </div>
      </div>
      <div className="column agrandarse50">
        <div className="item grouno">
          <Link to="/diseno"><a.h1 style={stylesLeftRight}>DISEÑO</a.h1></Link>
        </div>
        <div className="item grodos">
          <Link to="/programacion"><a.h1 className="masChiqui" style={stylesRightLeft}>PROGRAMACIÓN</a.h1></Link>
        </div>
        <div className="item grouno">
          <Link to="/voz"><a.h1 style={stylesLeftRight}>VOZ</a.h1></Link>
        </div>
      </div>
      <div className="column palpiso">
        <div className="item grouno">
          <Link to="/contacto"><a.h1 style={stylesLeftRight}>CONTACTO</a.h1></Link>
        </div>
        <div className="item grouno adelante">
          <Link to="./"> <a.h1 className="masChiqui" style={stylesRightLeft} onClick={() => window.open(`${hv}`, '_blank')}>DESCARGA MI <br /> HOJA DE VIDA</a.h1> </Link>
        </div>
      </div>
    </a.main>
  );
};

export default Home;