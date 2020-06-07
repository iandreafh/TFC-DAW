import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
 
import Menu from './Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Slider from './Slider';
import Servicios from './Servicios';
import Footer from './Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 
 
 
class Home extends React.Component {
 
 render() {
 
 return(
 
 <>
 
 <Jumbotron fluid>
   <Container>
      <h1>Dental Vhita</h1>
      <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
      </p>
   </Container>
</Jumbotron>

 <Menu /> 
 
 <main role="main" className="flex-shrink-0 mt-5">
 
             <div className="container">
   	   
   	        <Slider /> 
   	        <Servicios /> 
 
   	        <hr className="featurette-divider" />
 
             </div>
 
    </main>
 
    <Footer />
 
    </>
 
 )
 
 }
 
}
 
export default Home;