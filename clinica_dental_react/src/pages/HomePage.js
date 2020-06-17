import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Counter from '../components/Home/Counter';
import './Home.css';
import Button from '../components/Home/button';
import CarouselPage from '../components/Home/Carousel';
import Video from '../components/Home/Video';

function HomePage() {
  return (
    
    <div className="HomePage">
      <Navbar />
      <Video />
      <Button />
      <Counter />
      <CarouselPage />
      <Footer />

      {/* <Container>
          <Row><Col><FormInicio /></Col></Row>
      </Container>
      <Inicio /> */}
    </div>
  );
}

export default HomePage;
