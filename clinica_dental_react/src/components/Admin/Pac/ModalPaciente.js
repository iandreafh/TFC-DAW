import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import axios from 'axios';

var paciente = [];

const ModalExample = (props) => {
  const {
    buttonLabel = 'Editar',
    className,
    dni,
  } = props;

  const [modal, setModal] = useState(false);
  
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  } 

  const eliminar = () => {
    axios.delete('http://localhost/public/api/borrar/' + dni)
    .then(response => { console.log("Paciente eliminado o dado de baja ok");
        })
        .catch(err => console.log(err.response) );

    toggleAll();
  }
  const guardar = () => {
    var pacienteEdit = {
      dni: document.getElementById("dni").value,
      nombre: document.getElementById("nombre").value,
      apellidos: document.getElementById("apellidos").value,
      fechaNacimiento: document.getElementById("fechaNac").value,
      telefono: document.getElementById("telefono").value,
      direccion: document.getElementById("direccion").value,
      email: document.getElementById("email").value,
      activo: document.getElementById("activo").checked,
    }

    axios({
      method: "put",
      url: "http://localhost/public/api/actualizar",
      data: pacienteEdit,
      config: { headers: { "Content-Type": "multipart/form-data" } }
      })
      .then(response => {
      console.log("Paciente actualizado");
      })
      .catch(function(error) {
      console.log("Hay error en el catch de axios");
      });


     toggle();
     setTimeout(function() { window.location = "/panel/pacientes";},1600);
  }
  
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
    setTimeout(function() { window.location = "/panel/pacientes";},1600);
  }

  const toggle = async event => {
      await axios.get('http://localhost/public/api/pacientes/' + dni)
        .then(response => { paciente = response.data[0]; 
        })
        .catch(err => console.log(err.response));
    
      setModal(!modal);      
      
  }


  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal id="modalito" isOpen={modal} toggle={toggle} style={{ maxWidth: '55vw'}}>
        <ModalHeader toggle={toggle}>Editar datos</ModalHeader>
        <ModalBody>
          
        <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>DNI</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.dni} id="dni" disabled={true} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.nombre} id="nombre"  required/>

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellidos</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.apellidos} id="apellidos"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Fecha de nacimiento</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.fechaNacimiento} id="fechaNac"  required/>

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Teléfono</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.telefono} id="telefono"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Dirección</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.direccion} id="direccion"  required/>
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="email" defaultValue={paciente.email} id="email"  required/>
        </InputGroup>
        <br />  
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" id="activo" defaultChecked={paciente.activo} required/>
            </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Activo" />
        </InputGroup>

        </div>

        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleNested}>Eliminar</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Eliminar paciente</ModalHeader>
            <ModalBody>¿Estás seguro que deseas eliminar el perfil del paciente {paciente.nombre} {paciente.apellidos} con DNI {paciente.dni}?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={eliminar}>Confirmar</Button>{' '}
              <Button color="secondary" onClick={toggleNested}>Cancelar</Button>
            </ModalFooter>
          </Modal>
          <Button color="primary" onClick={guardar}>Guardar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;