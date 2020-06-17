import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import axios from 'axios';


const ModalEmpleado = (props) => {
  const {
    buttonLabel = '+ Dar de alta',
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = async event => {
      
      setModal(!modal);      
      
  }

  const alta = () => {
    var empleadoNuevo = {
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
      method: "post",
      url: "http://localhost/public/api/altaEmp",
      data: empleadoNuevo,
      config: { headers: { "Content-Type": "multipart/form-data" } }
      })
      .then(response => {
      console.log("Empleado dado de alta ok");
      })
      .catch(function(error) { 
      console.log("Hay error en el catch de axios");
      });


     toggle();
     setTimeout(function() { window.location = "/panel/empleados";},1500);
  }
  


  return (
    <div>
      <Button outline color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal id="modalito" isOpen={modal} toggle={toggle} style={{ maxWidth: '55vw'}}>
        <ModalHeader toggle={toggle}>Dar de alta nuevo empleado</ModalHeader>
        <ModalBody>
          
        <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>DNI</InputGroupText>
            </InputGroupAddon>
            <Input id="dni" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre</InputGroupText>
            </InputGroupAddon>
            <Input  id="nombre"  required/>

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellidos</InputGroupText>
            </InputGroupAddon>
            <Input id="apellidos"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Fecha de nacimiento</InputGroupText>
            </InputGroupAddon>
            <Input id="fechaNac"  required/>

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Teléfono</InputGroupText>
            </InputGroupAddon>
            <Input id="telefono"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Dirección</InputGroupText>
            </InputGroupAddon>
            <Input id="direccion"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="email" id="email"  required/>
        </InputGroup>
        <br />  
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Contraseña</InputGroupText>
            </InputGroupAddon>
            <Input type="password" placeholder="contraseña" id="contraseña"  required/>
        </InputGroup>
        <br /> 
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" id="directivo" required/>
          </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Directivo" />

          <InputGroupAddon addonType="prepend">
          <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" id="doctor" required/>
          </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Doctor" />

          <InputGroupAddon addonType="prepend">
          <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" id="activo" defaultChecked="true" required/>
          </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Activo" />
        </InputGroup>

        </div>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={alta}>Guardar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEmpleado;