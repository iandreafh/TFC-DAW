import React, { Component } from 'react';
import {Row, Col, ButtonDropdown} from 'reactstrap';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import axios from 'axios';

var data = [];

class Perfil extends Component {
constructor(props) {
    super(props);

    this.state = {
    data: []
    };
}
componentWillMount(){
    axios.get('http://localhost/public/api/perfil/' + sessionStorage.log.split(",")[1].split(" ")[2]) //email
    .then(response => { data = response.data[0];
    })
    .catch(err => console.log(err.response));
}
componentDidMount() {
    
    setTimeout(function() {
        document.getElementById("dni").value = data.dni;
        document.getElementById("nombre").value = data.nombre;
        document.getElementById("apellidos").value = data.apellidos;
        document.getElementById("fechaNac").value = data.fechaNacimiento;
        document.getElementById("telefono").value = data.telefono;
        document.getElementById("direccion").value = data.direccion;
        document.getElementById("email").value = data.email;
        document.getElementById("contraseña").value = data.contraseña;
        document.getElementById("directivo").checked = data.directivo;
        document.getElementById("doctor").checked = data.doctor;
        document.getElementById("activo").checked = data.activo;
    },1000);
}
guardar() {
    var empleadoEdit = {
      dni: document.getElementById("dni").value,
      nombre: document.getElementById("nombre").value,
      apellidos: document.getElementById("apellidos").value,
      fechaNacimiento: document.getElementById("fechaNac").value,
      telefono: document.getElementById("telefono").value,
      direccion: document.getElementById("direccion").value,
      email: document.getElementById("email").value,
      contraseña: document.getElementById("contraseña").value,
      directivo: document.getElementById("directivo").checked,
      doctor: document.getElementById("doctor").checked,
      activo: document.getElementById("activo").checked,
    }

    axios({
      method: "put",
      url: "http://localhost/public/api/actualizarEmp",
      data: empleadoEdit,
      config: { headers: { "Content-Type": "multipart/form-data" } }
      })
      .then(response => {
      console.log("Empleado actualizado");
      })
      .catch(function(error) {
      console.log("Hay error en el catch de axios");
      });


     setTimeout(function() { window.location = "/panel/perfil";},1500);
  }
  //cuando haces focus muestra durante 3 seg la contraseña
  mostrarContraseña() {
    document.getElementById("contraseña").type = ""; 
    setTimeout(function() { document.getElementById("contraseña").type = "password"; }, 3000);
  }
  
  render() {
     
    return (


<div>
    <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>DNI</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={data.dni} id="dni" disabled={true} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={data.nombre} id="nombre"  required/>

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellidos</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={data.apellidos} id="apellidos"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Fecha de nacimiento</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={data.fechaNacimiento} id="fechaNac"  required/>

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Teléfono</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={data.telefono} id="telefono"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Dirección</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={data.direccion} id="direccion"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="email" defaultValue={data.email} id="email"  required/>
        </InputGroup>
        <br />  
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Contraseña</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="contraseña" type="password" defaultValue={data.contraseña} id="contraseña" onFocus={this.mostrarContraseña} required/>
        </InputGroup>
        <br />  
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input"  defaultChecked={data.directivo} id="directivo" required/>
          </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Directivo" />

          <InputGroupAddon addonType="prepend">
          <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" defaultChecked={data.doctor} id="doctor" required/>
          </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Doctor" />

          <InputGroupAddon addonType="prepend">
          <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" id="activo" defaultChecked={data.activo} required/>
          </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Activo" />
        </InputGroup>

        <br /><br />
        <Row><Col><Button color="primary" onClick={this.guardar}>Actualizar</Button></Col></Row>

        </div>

);
}
}

export default Perfil;