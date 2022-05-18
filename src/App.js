import { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Home from './components/home/Home'
import Sobremi from './components/sobremi/SobreMi'
import Contacto from './components/contacto/Contacto'
import Diseno from './components/diseno/Diseno'
import Programacion from './components/programacion/Programacion'
import Voz from './components/voz/Voz'
import Loading from './components/loading/Loading'
import NoMatch from './components/nomatch/NoMatch'

function App() {
  console.log('%c No manches, no mires la consola wtf. No hay nada que ver aquí.',
    'font-size: 20px; color: #FFF; background: red; padding: 10px;');
  console.log('%c..', 'font-size: 300px; height: 150px; width: 100px; background: url(https://media.giphy.com/media/AAsj7jdrHjtp6/giphy.gif) no-repeat; background-size: cover;');
  
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/diseno" element={<Diseno />} />
          <Route path="/programacion" element={<Programacion />} />
          <Route path="/voz" element={<Voz />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>

    </Router>
  );
}

export default App;
