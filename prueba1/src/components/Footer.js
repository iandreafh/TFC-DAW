import React from 'react';
import { Container, Row, Col } from 'reactstrap';

var FontAwesome = require('react-fontawesome');


const Footer = (props) => {
  return (
    <Container fluid>
        <Row className="fut">
            <Col md="4" lg="2" className="fcol d-none d-md-block mt-3" style={{margin: '0.45em 0'}}>
                <a href="#!" style={{paddingRight: '0.7em'}}><FontAwesome name='facebook' style={{fontSize: '28px', backgroundColor: '#000', color: 'white', width: '1.1em', height: '1.1em', borderRadius: '25%', lineHeight: '1.1em'}} /></a>
                <a href="#!"><FontAwesome name='twitter' style={{fontSize: '28px', backgroundColor: '#000', color: 'white', width: '1.1em', height: '1.1em', borderRadius: '25%', lineHeight: '1.1em'}}/></a>
            </Col>
            <Col xs="12" md="8" lg="5" className="fcol  mt-3" style={{marginTop: '0.8em'}}>
                <nav className="nav footer-bottom-nav ml-1 ml-md-5 ml-lg-3" style={{justifyContent: 'center'}}>
                    <a href="#!">Política de Privacidad</a>
                    <pre> - </pre>
                    <a href="#!">Términos y Condiciones</a>
                </nav>
            </Col>
            <Col xs="12" md="12" lg="5" className="fcol  mt-3" style={{marginTop: '0.8em'}}>
                <p className=" ml-1 ml-lg-3">© Andrea Fernández 2020. Todos los derechos reservados.</p>
            </Col>
        </Row>

    </Container>
  );
};

export default Footer;