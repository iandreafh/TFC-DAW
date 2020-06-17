import React, { Component } from 'react';
import {Row, Col, Button, ButtonDropdown} from 'reactstrap';
import axios from 'axios';
import Modal from './ModalPaciente.js';
import ModalAlta from './ModalNuevoPaciente.js';

class DatosPacientes extends Component {
constructor(props) {
    super(props);

    this.state = {
    data: [],
    dataTable: [],
    paginaActual: 1,
    ultimaPag: 1,
    numPorPagina: 5,
    orden: "dni"
    };
}
componentDidMount() {
    this.cargarDatos();

  }
  cargarDatos() {
    // Get request for laravel api call
    axios.get('http://localhost/public/api/pacientes')
    .then(response => { const data = response.data; 
      this.setState({ data : response.data , dataTable : response.data.slice(0,this.state.numPorPagina), ultimaPag: Math.ceil(parseInt(response.data.length/this.state.numPorPagina)) });
    })
    .catch(err => console.log(err.response));
  }
  pulsaDNI() {
    console.log("pulsa dni");
  }
  antiguedad(creado) {
    let añoActual = new Date().getFullYear();
    let creadoEl = new Date(creado).getFullYear();
    return añoActual - creadoEl;
  }
  nextPage(numPage) {
    let inicio = (numPage * this.state.numPorPagina) - this.state.numPorPagina;
    let fin = numPage * this.state.numPorPagina;
    if(inicio >= 0 && (fin- (this.state.numPorPagina-1)) <= this.state.data.length)
    {
      this.setState({ paginaActual : numPage });
      this.setState({ dataTable: this.state.data.slice(inicio,fin) });
    }
      
  }
  render() {
     
    return (
      <div className="datos">
        <table id="example" cellPadding="1" border="1" style={{margin: '1em 0.3em'}} className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Antigüedad</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTable.map(item => (
              <tr key={item.dni}>
                  <td>{item.dni}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellidos}</td>
                  <td>{item.telefono}</td>
                  <td>{item.email}</td>
                  <td>{this.antiguedad(item.created_at)} años</td>
                  <td><Modal dni={item.dni} /></td>
              </tr>
              ))}
          </tbody>
        </table>

        <Row style={{position: 'absolute', bottom: '5vh', marginLeft: '0.2em', width: '80vw'}}>
          <Col style={{ width: '80vw'}}>
                <ul className="pagination justify-content-center">
                  {/* <li style={{margin: '0 2em 0 0'}}><Dropdown pulsaDNI={this.pulsaDNI} /></li> */}
                  

                  <li style={{margin: '0 2em 0 0'}}>
                    <ModalAlta />
                  </li>


                  <li className="page-item"><a className="page-link" href="#" onClick={e => this.nextPage(this.state.paginaActual - 1)} >Previous</a></li>
                  
                  <li className="page-item"><a className="page-link" href="#" onClick={e => this.nextPage(1)} >1</a></li>
                  
                  <li className="page-item"><a className="page-link" href="#" >...</a></li>

                  <li className="page-item"><a className="page-link" href="#" onClick={e => this.nextPage(this.state.ultimaPag)} >{this.state.ultimaPag}</a></li>

                  <li className="page-item"><a className="page-link" href="#" onClick={e => this.nextPage(this.state.paginaActual + 1)} >Next</a></li>
                  
                </ul>
          </Col>
        </Row>
        


      </div>
    );
  }
}

export default DatosPacientes;