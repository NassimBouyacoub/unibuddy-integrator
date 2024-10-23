import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Iframe from './components/Iframe';
import All from './components/All';

function App() {
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
