import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import Inicio from '../components/Home/Inicio';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import FormInicio from '../components/Home/FormInicio';
import Counter from '../components/Home/Counter';
import '../components/Home/Home.css';
import Button from '../components/Home/button';
import CarouselPage from '../components/Home/Carousel';
import Video from '../components/Home/Video';

function HomePage() {
  return (
    
    <div className="HomePage">
      <Menu />
      <Video />
      <Button />
      <Counter />
      <CarouselPage />
      <Footer />
    </div>
  );
}

export default HomePage;
