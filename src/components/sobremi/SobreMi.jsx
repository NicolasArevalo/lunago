import React from "react";
import Back from "../layout/Back";
import Frases from "./Frases";

import "./SobreMi.scss";

import yo from "../../assets/fondoblancoyo-01.png";
import loguito from "../../assets/NAicon-01.svg"
import loguitoBlanco from "../../assets/NAiconWhite.svg"

/* Import Animaciones */
import { useSpring, a } from 'react-spring'

const SobreMi = () => {
  const body = document.getElementById('body')
  const darkClassExist = body.classList[1]
  /* Animaciones */
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  const imgStyle = useSpring({
    from: {
      transform: 'scale(0)'
    },
    to: {
      transform: 'scale(1)'
    },
    config: { duration: 300 },
  })
  return (
    <a.div className="sobremi_wrapper" style={props}>
      <Back name="SOBRE MÍ" />
      <aside>
        <div className="imagenes">
          <a.img style={imgStyle} src={yo} alt="Selfie de Nico" className="img_sobremi" />
          {
            darkClassExist !== undefined
              ? <img src={loguitoBlanco} alt="logo" className="logo" />
              : <img src={loguito} alt="logo" className="logo" />
          }
        </div>
        <Frases />
      </aside>
      <div className="bloque">

      </div>
      <div className="sobremi_info">
        <div className="info-part cards">
          <div className='card'>
            <h2>Hobbies</h2>
            <ul>
              <li>Cantar (sobre todo rapcitos)</li>
              <li>Ver películas</li>
              <li>Realmente me gusta aprender</li>
            </ul>
          </div>
          <div className="card">
            <h2>Top películas</h2>
            <ol>
              <li>El origen (la primera que me hizo 🤯)</li>
              <li>La isla siniestra (Leo es el mejor)</li>
              <li>Memento es otra frutal pero se pelea con Interestellar</li>
            </ol>
          </div>
        </div>
        <div className="info-part">
          <h1>¿Cómo llegué hasta aquí?</h1>
          <p>
            Nací en la ciudad de Bogotá. Viví en Suba (una localidad) hasta 6° de
            bachillerato. Ahí pasé a vivir a Bosa por otros 3 años, y luego vine
            al Huila. Desde siempre me ha gustado la tecnología. Mi familia me
            apoyaba diciendo que yo sabía, inlcuso cosas que no sabía: "Preguntele
            a Nico que él es el duro.", a pesar de tener 8 años y probablemente no
            saber sino reiniciar las cosas :v. Sin embargo, esa sensación me
            motivó a seguir profundizando de forma empírica durante mi vida, hasta
            que llegué a grado 10°, dónde realicé un técnico en sistemas en el
            SENA (convenio con la institución educativa en donde estudié). En 11
            terminé el técnico, y también conocí platzi, donde empecé a ir más
            profundo con el curso de fundamentos de ingeniería de software. El año
            siguiente (2018) ingresé a la Universidad Surcolombiana a ingeniería
            de software.
          </p>
        </div>
        <div className="info-part">
          <h1>Actualmente</h1>
          <p>
            Tengo 20 años, sigo en el Huila, pero lo estoy logrando. He estado
            profundizando e invirtiendo mi dinero en mejorar mis habilidades como
            ingeniero de software. Ahora estoy más enfocado al desarrollo web en
            la parte Front-end. Me gusta mucho el diseño, así que primero quise
            empezar por aquí. Sin embargo, me gustaría también Back-end, Docker,
            Solidity (creo que ese es el futuro), me gusta mucho Python, y la
            ciencia de los datos, pero no sé si sea lo que quiero. De todas
            maneras me gustaría aprenderlo.
          </p>
        </div>
        <div className="info-part">
          <h1>¿Y el futuro?</h1>
          <p>
            En unos años me gustaría tener la experiencia suficiente como para
            aplicar a un trabajo en el extranjero y al fin salir del país.
            Colombia es espectacular, no me malentiendan, pero odio la
            inseguridad, odio no estar en paz, odio ver las noticias y ver tanta
            corrupción. Estoy cansado de eso, y a penas tengo 20 años. Siento que
            no tengo porqué aguantarme eso de por vida, así que quisiera salir del
            país, y traer la mayoría de familia posible conmigo. Profesionalmente,
            quisiera dominar mis tecnologías. Hoy uso React, así que quisiera ser
            un duro en un par de años, jajaja.
          </p>
        </div>
      </div>
    </a.div>
  );
};

export default SobreMi;
