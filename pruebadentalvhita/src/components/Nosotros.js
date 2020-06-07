import React from 'react';
 
import Menu from './Menu';
import Jumbotron from './Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './Detalles'; // Este Componente lo crearé a continuación 
import Footer from './Footer';
 
 
class Nosotros extends React.Component {
 
 render() {
 
 return(
 
 <>
 
 <Menu />
 
 <main role="main" className="flex-shrink-0 mt-5">
         
 <Jumbotron /> // Este Componente lo crearé a continuación 
 <Detalles /> // Este Componente lo crearé a continuación 
 
    </main>
 
    <Footer />
 
    </>
 
 )
 
 }
 
}
 
export default Nosotros;