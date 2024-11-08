import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Iframe from './components/Iframe';
import All from './components/All';
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-TR9J7V862N"; // Remplacez par votre propre ID GA4
ReactGA.initialize(TRACKING_ID);

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send("pageview", location.pathname + location.search);
  }, [location]);
  
  return null;
}

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.unibuddy.co/unibuddy-iframe.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); // Nettoyage si nécessaire
    };
  }, []);

  return (
    <Routes>
      <Route path='/:lang/:id/' element={<Iframe />}/> 
      <Route path='/:lang' element={<All/>}/> 
    </Routes>
  );
}

export default function MainApp() {
  return (
    <Router>
      <AnalyticsTracker />
      <App />
    </Router>
  );
}
