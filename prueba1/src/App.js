import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './img/LogoUnido.png';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Panel from './pages/PanelPage';

export default function App() {
  return (
    
    // <div className="App">
      
    //   <HomePage />

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

<Router>
<main>

<Route path="/" exact component={HomePage} />
<Route path="/login" component={Login} />
<Route path="/panel" component={Panel} />
</main>
</Router>


  );
}

