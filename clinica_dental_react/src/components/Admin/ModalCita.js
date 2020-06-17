import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import axios from 'axios';

var cita = [];

const ModalExample = (props) => {
  const {
    buttonLabel = 'Editar',
    className,
    id,
  } = props;

  const [modal, setModal] = useState(false);

  const guardar = () => {
    var citaEdit = {
        id: id,
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
      asistencia: document.getElementById("asistencia").checked,
    }

    axios({
      method: "put",
      url: "http://localhost/public/api/actualizarCita",
      data: citaEdit,
      config: { headers: { "Content-Type": "multipart/form-data" } }
      })
      .then(response => {
      console.log("Cita actualizada");
      })
      .catch(function(error) {
      console.log("Hay error en el catch de axios");
      });


     toggle();
     setTimeout(function() { window.location = "/panel/agenda";},1600);
  }
  

  const toggle = async event => {
      await axios.get('http://localhost/public/api/agenda/' + id)
        .then(response => { cita = response.data[0]; 
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
            <InputGroupText>ID Cita</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.id} id="id" disabled={true} />
            
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Fecha</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.fecha} id="fecha" />
            
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Hora</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.hora} id="hora" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>DNI Paciente</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.idPaciente} id="idPaciente" />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre Paciente</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.nombre} id="nombre"    />

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellidos</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.apellidos} id="apellidos"    />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Fecha de nacimiento</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.fechaNacimiento} id="fechaNac"    />

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Teléfono paciente</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.telefono} id="telefono"    />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Email paciente</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.email} id="email"    />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>DNI Doctor</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.idEmpleado} id="doctor"    />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre Doctor</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.nombreDoctor} id="doctor"  />
            
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellido Doctor</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={cita.apellidosDoctor} id="doctor"    />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" id="asistencia" defaultChecked={cita.asistencia} required/>
            </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Asistencia" />
        </InputGroup>

        </div>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardar}>Guardar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;