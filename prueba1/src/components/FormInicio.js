import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormInicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Container className="formulario">
        <Row id="tituloForm">
          <Col><h3>Inicio de sesión</h3></Col>
        </Row>
  
        <Row>
          <Col>
            <Form inline action="/panel" style={{justifyContent: 'center'}} >
              <Col xs="12" md="5">
                <FormGroup className="mb-5 mr-sm-0 mb-md-0">
                  <Label for="exampleEmail" className="mr-sm-3">Correo electrónico</Label>
                  <Input type="email" name="email" id="email" placeholder="ejemplo@email.com" size="30" />
                </FormGroup>
              </Col>
              <Col xs="12" md="5">
                <FormGroup className="mb-5 ml-md-4 mr-sm-0 mb-md-0">
                  <Label for="contraseña" className="mr-sm-5">Contraseña</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="********" pattern="(?=.*\d)(?=.*[a-z]).{8,}" />
                  <FormText>Debe tener mínimo 8 caracteres alfanuméricos</FormText>
                </FormGroup>
              </Col>
              <Col xs="12" md="2">
                <Button className="mb-5 ml-4 ml-md-0 mb-md-0">Iniciar</Button>
              </Col>
              
            </Form>
          </Col>
          
  
        </Row>
        
  
        
      </Container>
      
    );

  }
  
}