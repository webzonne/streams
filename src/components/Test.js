import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; // Cambio: Importamos Switch en lugar de Route
import Mhead from './partscomp/Mhamb'; // Cambio: Importamos Switch en lugar de Route
import Interdesc from './navegations/Interdesc';
import About from './navegations/About';
import Blog from './navegations/Blog';
import Contacto from './navegations/Contacto';
import Inlogins from './navegations/Inlogins'; // Importa el componente Background aquí
import Background from './partscomp/Background'; // Importa el componente Background aquí

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="traslatmhead" component={Mhead} />
        <Route exact path="/" component={Background} />
        <Route exact path="/about-us/" component={About} />
        <Route exact path="/blog/" component={Blog} />
        <Route exact path="/contacto/" component={Contacto} />
        <Route exact path="/login/" component={Inlogins} />
        <Route exact path="/servicios/:itemsId/:catId/:catdesc" component={Interdesc} />
      </Switch>
    </div>
  );
}

export default App;