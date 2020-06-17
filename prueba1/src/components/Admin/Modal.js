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
    axios.delete('http://localhost/public/api/pacientes/' + dni)
    .then(response => { console.log("Eliminado");
        })
        .catch(err => console.log(err.response));

    toggleAll();
  }
  
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
    setTimeout(function() { window.location = "/panel/pacientes";},1500);
  }

  const toggle = async event => {
      console.log(dni);
      await axios.get('http://localhost/public/api/pacientes/' + dni)
        .then(response => { paciente = response.data[0]; 
            console.log(response);
            console.log(response.data);
        })
        .catch(err => console.log(err.response));
    
      setModal(!modal);      
  }


  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal id="modalito" isOpen={modal} toggle={toggle} style={{ maxWidth: '50vw'}}>
        <ModalHeader id="nombre" toggle={toggle}>Editar datos</ModalHeader>
        <ModalBody>
          
        <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>DNI</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.dni} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Nombre</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.nombre} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Apellidos</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.apellidos} />

            <InputGroupAddon addonType="prepend">
            <InputGroupText>Fecha de nacimiento</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.fechaNacimiento} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Dirección</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.direccion} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>Teléfono</InputGroupText>
            </InputGroupAddon>
            <Input defaultValue={paciente.telefono} />
        </InputGroup>
        <br />
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="email" defaultValue={paciente.email} />
        </InputGroup>
        <br />  
        <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>
                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
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
          <Button color="primary" onClick={toggle}>Guardar</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;