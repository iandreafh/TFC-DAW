import React from 'react';
import Date from './DatePicker.js';
import flechaOpen from '../../img/flechaSidebarOpen.png';
import flechaClose from '../../img/flechaSidebarClose.png';
import Datos from './Datos.js';

export default class Sidebar extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    if(document.getElementById("sidebar-wrapper").style.display == "none")
    {
        document.getElementById("fot").style.width ="84vw";
        document.getElementById("fot").style.left ="15vw";
        document.getElementById("flecha").src = flechaClose;
        document.getElementById("sidebar-wrapper").style.display = "block";
    }
    else
    {
        document.getElementById("fot").style.width ="95vw";
        document.getElementById("fot").style.left ="2vw";
        document.getElementById("flecha").src = flechaOpen;
        document.getElementById("sidebar-wrapper").style.display = "none";
    }
  }

  render() {
    return (
        <div className="d-flex" id="wrapper">

        <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Dental Vhita </div>
        <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
            <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
            <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
            <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
            <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
        </div>
        </div>
        <div id="page-content-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ height: '3em'}}>
            <button className="btn btn-dark" id="menu-toggle" onClick={this.handleClick} style={{ width: '2em', height: '2em', padding: '0', paddingBottom: '4px'}}><img id="flecha" src={flechaClose} width="20" /></button>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="/">Cerrar sesión</a>
                </li>
            </ul>
            </div>
        </nav>

        <div className="container-fluid">
            
            <Datos />
            <Date />
            </div>
        </div>
        </div>
    );
}
}