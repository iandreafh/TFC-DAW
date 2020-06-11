import React from 'react';
import { Row, Col } from 'reactstrap';

var FontAwesome = require('react-fontawesome');


const Footer = (props) => {
  return (
    <div>
        <Row className="fut">
            <Col xs="12" md="2" className="fcol" style={{margin: '0.45em 0'}}>
                <a href="#!" style={{paddingRight: '0.7em'}}><FontAwesome name='facebook' style={{fontSize: '25px', backgroundColor: '#000', color: 'white', width: '1.1em', height: '1.1em', borderRadius: '25%', lineHeight: '1.1em'}} /></a>
                <a href="#!" style={{paddingRight: '3em'}}><FontAwesome name='twitter' style={{fontSize: '25px', backgroundColor: '#000', color: 'white', width: '1.1em', height: '1.1em', borderRadius: '25%', lineHeight: '1.1em'}}/></a>
            </Col>
            <Col xs="12" md="5" className="fcol" style={{marginTop: '0.5em'}}>
                <nav className="nav footer-bottom-nav mb-2 ml-5">
                    <a href="#!">Política de Privacidad</a>
                    <pre>  -  </pre>
                    <a href="#!">Términos y Condiciones</a>
                </nav>
            </Col>
            <Col xs="12" md="5" className="fcol" style={{marginTop: '0.5em'}}>
                <p className="mb-2 ml-4">© Andrea Fernández 2020. Todos los derechos reservados.</p>
            </Col>
        </Row>

    </div>
  );
};

export default Footer;