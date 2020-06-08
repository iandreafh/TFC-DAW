import React from 'react';
import { Row, Col } from 'reactstrap';

var FontAwesome = require('react-fontawesome');


const Footer = (props) => {
  return (
    <div>
        <Row className="fut">
            <Col xs="12" md="2" className="fcol">
                <a href="#!"><FontAwesome name='facebook' size='2x' style={{backgroundColor: '#00BFFF', color: 'white', width: '1.5em', height: '1.5em', borderRadius: '100%', lineHeight: '1.6em'}} /></a>
                <a href="#!"><FontAwesome name='twitter' size='2x' style={{backgroundColor: '#00BFFF', color: 'white', width: '1.5em', height: '1.5em', borderRadius: '100%', lineHeight: '1.6em'}}/></a>
            </Col>
            <Col xs="12" md="5" className="fcol">
                <nav class="nav footer-bottom-nav mb-2 ml-5">
                    <a href="#!">Política de Privacidad</a>
                    <pre>  -  </pre>
                    <a href="#!">Términos y Condiciones</a>
                </nav>
            </Col>
            <Col xs="12" md="5" className="fcol">
                <p className="mb-2 ml-4">© Andrea Fernández 2020. Todos los derechos reservados.</p>
            </Col>
        </Row>

    </div>
  );
};

export default Footer;