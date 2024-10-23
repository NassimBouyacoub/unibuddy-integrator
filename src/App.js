import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Iframe from './components/Iframe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:lang/:id/' element={<Iframe />}/> 
      </Routes>
    </Router>
  );
}

export default App;
