import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
 
class Jumbotron extends React.Component {
 
  render() {
 
    return (
 

        <Jumbotron fluid>
        <Container>
            <h1>Fluid jumbotron</h1>
            <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
            </p>
        </Container>
        </Jumbotron>

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Nosotros </h1>
                <p>
                    Somos una comunidad en donde fomentamos el conocimiento colectivo.
                    <br/>
                    Solo de esta manera se formarán profesionales que cambien sus vidas y tengan un mejor futuro.
                </p>
                <p><a className="btn btn-primary btn-lg" href="https://nubecolectiva.com" target="_blank" role="button">Visitar Web</a></p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Jumbotron;