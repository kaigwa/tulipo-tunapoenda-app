import './App.css';
import Kesho from './components/Kesho';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='Kesho' element={<Kesho />} />

      {/* <Kesho /> */}
  
    </Routes>
  );
}

export default App;
