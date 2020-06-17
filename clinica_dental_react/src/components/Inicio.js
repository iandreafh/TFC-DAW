import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import fondoLogo from '../img/f2.png';
import logo from '../img/pack/logo1.png';



const Inicio = (props) => {
  return (
    <div>
      <Jumbotron style={{padding: '2vw', backgroundColor: '#F5FDFF', color: 'rgb(28, 181, 231)', marginBottom: '0'}}>
        <Container fluid>
          <Row>
            <Col xs="2" className="d-none d-lg-block">
              <img src={fondoLogo} className="fondoLogo" />
              <img src={logo} className="logo" />
            </Col>
            <Col xs="10" className="letras">
              <h1 className="titulo">Clínica Dental Vhita</h1>
              <p className="lead">Acceso al panel interno de administración de la clínica</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    </div>
  );
};

export default Inicio;