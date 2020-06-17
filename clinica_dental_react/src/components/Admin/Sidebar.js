import React from 'react';
import flechaOpen from '../../img/flechaSidebarOpen.png';
import flechaClose from '../../img/flechaSidebarClose.png';
import DatosEmpleados from './Emp/DatosEmpleados.js';
import DatosPacientes from './Pac/DatosPacientes.js';
import Principal from './Principal.js';
import Perfil from './Perfil.js';
import Agenda from './Agenda.js';
import Pagos from './Pagos.js';
import Date from './DatePicker.js';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          seccion: window.location.href.split("/panel/")[1]
        };
    
      }
  
  handleClick = () => {
    if(document.getElementById("sidebar-wrapper").style.display == "none")
    {
        document.getElementById("fot").style.width ="84vw";
        document.getElementById("fot").style.marginLeft ="13em";
        document.getElementById("flecha").src = flechaClose;
        document.getElementById("sidebar-wrapper").style.display = "block";
    }
    else
    {
        document.getElementById("fot").style.width ="95vw";
        document.getElementById("fot").style.marginLeft ="2vw";
        document.getElementById("flecha").src = flechaOpen;
        document.getElementById("sidebar-wrapper").style.display = "none";
    }
  }
  cerrarSesion = () => {
    sessionStorage.log = "rol: ninguno";
  }
  admin1 = () => {
      if(sessionStorage.log.split(",")[0].split(" ")[1] == "directivo")
      {
          return (
          <a href="/panel/empleados" className="list-group-item list-group-item-action bg-light" >Empleados</a>);
      }
  }
  admin2 = () => {
        if(sessionStorage.log.split(",")[0].split(" ")[1] == "directivo")
        {
            return (
            <a href="/panel/pagos" className="list-group-item list-group-item-action bg-light">Pagos</a>);
        }
    }

    cargaDatos = () => {
        if(this.state.seccion == "empleados")
            return <DatosEmpleados />;
        else if(this.state.seccion == "inicio")
            return <Principal />;
        else if(this.state.seccion == "pacientes")
            return <DatosPacientes />;
        else if(this.state.seccion == "perfil")
            return <Perfil />;
        else if(this.state.seccion == "agenda")
            return <Agenda />;
        else if(this.state.seccion == "pagos")
            return <Pagos />;
        else
            return <Principal />;
    }
    

  render() {
    return (
        <div className="d-flex" id="wrapper">

        <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Dental Vhita </div>
        <div className="list-group list-group-flush">
            <a href="/panel/inicio" className="list-group-item list-group-item-action bg-light">Inicio</a>
            <a href="/panel/agenda" className="list-group-item list-group-item-action bg-light">Agenda</a>
            <a href="/panel/pacientes" className="list-group-item list-group-item-action bg-light">Pacientes</a>
            {this.admin1()}
            <a href="/panel/tratamientos" className="list-group-item list-group-item-action bg-light">Tratamientos</a>
            {this.admin2()}
            <a href="/panel/perfil" className="list-group-item list-group-item-action bg-light">Mi perfil</a>
        </div>
        </div>
        <div id="page-content-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ height: '3em'}}>
            <button className="btn btn-dark mt-0 mr-3" id="menu-toggle" onClick={this.handleClick} style={{ width: '2em', height: '2em', padding: '0', paddingBottom: '4px'}}><img id="flecha" src={flechaClose} width="20" /></button>

            <h4>{this.state.seccion}</h4>
            <ul className="navbar-nav ml-auto mt-0">
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={this.cerrarSesion} >Cerrar sesión</a>
                </li>
            </ul>
        </nav>

        <div className="container-fluid" id="contenido">
            {this.cargaDatos()}
            </div>
        </div>
        </div>
    );
}
}