import React from 'react';
 
import Menu from './Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Slider from './Slider';
import Servicios from './Servicios';
import Footer from './Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 
 
 
class Home extends React.Component {
 
 render() {
 
 return(
 
 <>
 
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