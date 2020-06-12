import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { Container, Row, Col } from 'reactstrap';
import Inicio from '../components/Inicio';
import Footer from '../components/Footer';
import FormInicio from '../components/FormInicio';

function HomePage() {
  return (
    
    <div className="HomePage">
      <Inicio />
      <FormInicio />
      <Footer />

      {/* <Container>
          <Row><Col><FormInicio /></Col></Row>
      </Container>
      <Inicio /> */}
    </div>
  );
}

export default HomePage;
