import React from 'react';
import Date from './DatePicker.js';
import flechaOpen from '../../img/flechaSidebarOpen.png';
import flechaClose from '../../img/flechaSidebarClose.png';

export default class Sidebar extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    if(document.getElementById("sidebar-wrapper").style.display == "none")
    {
        document.getElementById("fot").style.width ="81vw";
        document.getElementById("fot").style.left ="18vw";
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
        <div class="d-flex" id="wrapper">

        <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Dental Vhita </div>
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
            <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
        </div>
        </div>
        <div id="page-content-wrapper">

        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" style={{ height: '3em'}}>
            <button class="btn btn-dark" id="menu-toggle" onClick={this.handleClick} style={{ width: '2em', height: '2em', padding: '0', paddingBottom: '4px'}}><img id="flecha" src={flechaClose} width="20" /></button>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="#">Cerrar sesión</a>
                </li>
            </ul>
            </div>
        </nav>

        <div class="container-fluid">
            <h1 class="mt-4">Simple Sidebar</h1>
            <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
            <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
        
            <Date />
            </div>
        </div>
        </div>
    );
}
}