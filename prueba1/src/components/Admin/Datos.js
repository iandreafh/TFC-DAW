import React, { Component } from 'react';
import axios from 'axios';

class Datos extends Component {
constructor(props) {
    super(props);

    this.state = {
    data: [],
    dataTable: [],
    paginaActual: 1
    };
}
componentDidMount() {
    // Get request for laravel api call
    axios.get('http://localhost/public/api/empleados')
      .then(response => { const data = response.data; 
        this.setState({ data : response.data , dataTable : response.data.slice(0,3) });
      });


  }
  nextPage(numPage) {
    let inicio = (numPage * 3) - 3;
    let fin = numPage * 3;
    if(inicio >= 0 && (fin-3) <= this.state.data.length)
    {
      this.setState({ paginaActual : numPage });
      this.setState({ dataTable: this.state.data.slice(inicio,fin) });
    }
      
  }
  render() {
     
    return (
      <div className="datos">
        <table id="example" cellPadding="1" border="1" style={{margin: '1em 0.3em'}} class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Fecha de nacimiento</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTable.map(item => (
              <tr>
                  <td>{item.dni}</td>
                  <td>{item.nombre}</td>
                  <td>{item.apellidos}</td>
                  <td>{item.fechaNacimiento}</td>
                  <td>{item.direccion}</td>
                  <td>{item.telefono}</td>
                  <td>{item.email}</td>
              </tr>
              ))}
          </tbody>
        </table>

        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#" onClick={e => this.nextPage(this.state.paginaActual - 1)} >Previous</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={e => this.nextPage(1)} >1</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={e => this.nextPage(2)} >2</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={e => this.nextPage(3)} >3</a></li>
          <li class="page-item"><a class="page-link" href="#" onClick={e => this.nextPage(this.state.paginaActual + 1)} >Next</a></li>
        </ul>


      </div>
    );
  }
}

export default Datos;