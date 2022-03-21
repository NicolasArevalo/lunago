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
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/sobremi" element={<Sobremi />}/>
          <Route path="/diseno" element={<Diseno />}/>
          <Route path="/programacion" element={<Programacion />}/>
          <Route path="/voz" element={<Voz />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
        
    </Router>
  );
}

export default App;
