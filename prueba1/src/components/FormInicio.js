import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Panel from '../pages/PanelPage';
import PanelAdmin from '../pages/PanelAdminPage';

export default class FormInicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      contraseña: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      contraseña: this.state.contraseña
    };


    axios.post('http://localhost/public/api/login',user)
    .then(res => {
      sessionStorage.log = "rol: ninguno";
      if(res.data == "incorrecto")
        alert("Usuario incorrecto");
      else if(res.data == "inactivo")
        alert("Usuario inactivo");
      else if(res.data == "directivo" || res.data == "auxiliar")
      {
        sessionStorage.log = "rol: " + res.data + ", email: " + user.email;
        window.location = "/panel";
      }

    
  })
    .catch(err => console.log(err.response));
  }
    

  render() {
    return (
      <Container className="formulario">
        <Row id="tituloForm">
          <Col><h3>Inicio de sesión</h3></Col>
        </Row>
  
        <Row>
          <Col>
            <Form inline onSubmit={this.handleSubmit} method="post" style={{justifyContent: 'center'}} >
              <Col xs="12" md="5">
                <FormGroup className="mb-5 mr-sm-0 mb-md-0">
                  <Label for="exampleEmail" className="mr-sm-3">Correo electrónico</Label>
                  <Input type="email" name="email" id="email" placeholder="ejemplo@email.com" size="30"
                  value={this.state.numberOfGuests} onChange={this.handleInputChange} required />
                </FormGroup>
              </Col>
              <Col xs="12" md="5">
                <FormGroup className="mb-5 ml-md-4 mr-sm-0 mb-md-0">
                  <Label for="contraseña" className="mr-sm-3">Contraseña</Label>
                  <Input type="password" name="contraseña" id="examplePassword" placeholder="******" size="30"
                  pattern="[A-Za-z0-9_]{6}" value={this.state.numberOfGuests} onChange={this.handleInputChange} required />
                </FormGroup>
              </Col>
              <Col xs="12" md="2">
                <Button className="mb-5 ml-5 ml-md-0 mb-md-0">Iniciar</Button>
              </Col>
              
            </Form>
          </Col>
          
  
        </Row>
        
  
        
      </Container>
      
    );

  }
}
  