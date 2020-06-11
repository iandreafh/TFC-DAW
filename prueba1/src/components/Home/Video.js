import React, {Component} from 'react';
import clip from '../../img/Intro.mp4'; 


export default class Video extends React.Component {

  pause = () => {
    console.log("pausa");
    document.getElementById("vid").load();
    console.log("cargado");
  }


  render() {
    return (
<div id="vidbg">
  <div className="overlay"></div>
  <video id="vid" autoPlay="autoplay" muted="muted" loop={true} loop onPause={this.pause} >
    <source src={clip} type="video/mp4" />
  </video>
  <div className="container h-100">
    <div className="d-flex h-100 text-center align-items-center">
      <div className="w-100 text-white">
        <h1 className="display-3">Dental Vhita</h1>
        <p className="lead mb-0">Una buena sonrisa tiene el poder de</p><p className="lead mb-0">cambiar el mundo que te rodea</p><br/>
        <p className="lead mb-0">Lo mejor que puedes ponerte es una sonrisa,</p><p className="lead mb-0">déjanos ayudarte a lucirla bien</p>
      </div>
    </div>
  </div>
</div>
);
}
}
