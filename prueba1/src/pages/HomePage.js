import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Inicio from '../components/Inicio';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import FormInicio from '../components/Home/FormInicio';

function HomePage() {
  return (
    
    <div className="HomePage">
      <Menu />
      <Inicio />
      <Container>
          <Row><Col><FormInicio /></Col></Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
