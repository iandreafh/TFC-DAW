import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import fondoLogo from '../img/f3.png';
import logo from '../img/pack/logo1.png';


const Inicio = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{backgroundColor: '#F5FDFF', color: '#00BFFF', margin: '4em 0em 0em'}}>
        <Container fluid>
          <Row>
            <Col xs="3">
              <img src={fondoLogo} className="fondoLogo" />
              <img src={logo} className="logo" />
            </Col>
            <Col xs="9" className="letras">
              <h1 className="display-3 titulo">Clínica Dental Vhita</h1>
              <p className="lead">¡Bienvenido a nuestra web, explora todos nuestros servicios!</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Inicio;