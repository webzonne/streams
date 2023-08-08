import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro'
// import { Switch, Route } from 'react-router-dom';
// import Nav from '../src/components/Nav';
// import Contenido from '../src/components/Contenido';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
    {/* <Switch>
      <Route exact path="/home/" component={Home} />
      <Route exact path="/" component={Login} />
    </Switch> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;

