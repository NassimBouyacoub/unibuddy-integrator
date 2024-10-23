import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Iframe from './components/Iframe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:lang/:id/' element={<Iframe />}/> 
        <Route path='/' element={<h1>hi</h1>}/> 

      </Routes>
    </Router>
  );
}

export default App;
