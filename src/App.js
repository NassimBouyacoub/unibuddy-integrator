import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Iframe from './components/Iframe';
import All from './components/All';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-TR9J7V862N";

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    const script = document.createElement('script');
    script.src = 'https://cdn.unibuddy.co/unibuddy-iframe.js';
    // script.async = true; // optionnel : pour un chargement asynchrone
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Nettoyage si nécessaire
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/:lang/:id/' element={<Iframe />}/> 
        <Route path='/:lang' element={<All/>}/> 

      </Routes>
    </Router>
  );
}

export default App;
