import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro'
import Password from './components/Password'
// import { Switch, Route } from 'react-router-dom';
// import Nav from '../src/components/Nav';
// import Contenido from '../src/components/Contenido';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {
    
  // funciones

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/pass" element={<Password />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;

