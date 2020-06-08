import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormInicio = (props) => {
  return (
    <Form inline className="formInicio">
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="email" className="mr-sm-2">Correo electrónico</Label>
        <Input type="email" name="email" id="email" placeholder="ejemplo@gmail.com" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Contraseña</Label>
        <Input type="password" name="password" id="password" placeholder="Contraseña" />
      </FormGroup>
      <Button>Iniciar Sesión</Button>
    </Form>
  );
}

export default FormInicio;