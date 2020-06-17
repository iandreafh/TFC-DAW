import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import fondoLogo from '../../img/f2.png';
import logo from '../../img/pack/logo1.png';



const Principal = (props) => {
  return (
    <div>
      <Jumbotron style={{padding: '25vh 1vw', backgroundColor: '#F5FDFF', color: 'rgb(28, 181, 231)', margin: '1em', height: '80vh'}}>
        <Container fluid>
          <Row>
            <Col xs="2" className="d-none d-lg-block">
              <img src={fondoLogo} className="fondoLogo" style={{marginLeft: '5em'}}  />
              <img src={logo} className="logo" style={{marginLeft: '-5.5em'}} />
            </Col>
            <Col xs="10" className="letras">
              <h1 className="titulo" style={{fontSize: '5vw'}}>Clínica Dental Vhita</h1>
              <h4 style={{fontSize: '2vw', width: '40vw', textAlign: 'right',marginLeft: '13vw'}}>Bienvenido al panel de administración de la Clínica Dental Vhita</h4>
            </Col>
          </Row>
          
        </Container>
      </Jumbotron>

    </div>
  );
};

export default Principal;