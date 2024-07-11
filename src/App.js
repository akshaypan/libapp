import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Addbook from './Components/Addbook';
import Viewallbook from './Components/Viewallbook';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addb' element={<Addbook/>}/>
      <Route path='/viewb' element={<Viewallbook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
