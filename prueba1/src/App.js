import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './img/LogoUnido.png';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Panel from './pages/PanelPage';
import PanelAdmin from './pages/PanelAdminPage';
import AccesoDenegado from './pages/AccesoDenegadoPage';
import PanelInicio from './pages/PanelInicio';

export default class App extends React.Component {
  constructor() {
    super();
    if(!sessionStorage.log)
      sessionStorage.log = "rol: ninguno";
    this.state = {
      rol: sessionStorage.log.split(",")[0].split(" ")[1]
    };
  }

  revisarTipo() {
    switch(this.state.rol)
    {
      case 'directivo':
        return <PanelAdmin />;
      case 'auxiliar':
        return <Panel />;
      case 'ninguno':
        return <AccesoDenegado />;
    }
  }

  render() {

    return (

      <Router>
      <main>
      
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      
      
      
      <Route
          path="/panel"
          render={() => {
              return (
                  this.revisarTipo()
              )
          }}
      />
      
      </main>
      </Router>
      
      
        );

  }
 
}

