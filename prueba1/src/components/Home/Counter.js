import React from "react";
import {Container, Row, Col} from 'reactstrap';
import './Counter.css';
import star from '../../img/star.png';

const Counter = () => {

  return(
    <div>
      <Container fluid id="counter">
        <Row style={{padding: '2em 2em 1em'}}>
          <Col xs="4">
          <span className="simbolo">+</span>

          <div className="divC">
            <span className="" id='digit1'>325 0 50 100 200 250 300 325</span>
          </div>

          <div className="texto">
            <p>pacientes satisfechos</p>
          </div>
          </Col>

          <Col xs="4">
          <img src={star} className="star" />

          <div className="divC">
            <span className="" id='digit2'>8.7 0.0 2.0 4.0 6.0 7.0 8.0 8.7</span>
          </div>
          <div className="texto">
            <p>puntuación</p>
          </div>
          </Col>

          <Col xs="4">
          <span className="simbolo">+</span>

          <div className="divC num1">
            <span className="" id='digit3'>6 0 1 2 3 4 5 6</span>
          </div>

          <div className="texto">
            <p>años de experiencia</p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
}

export default Counter;


