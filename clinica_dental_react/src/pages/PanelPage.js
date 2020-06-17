import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Panel.css';
import './Home.css';
import Sidebar from '../components/Admin/Sidebar.js';

function PanelPage() {
  return (
    <div>

        <Sidebar />


        <footer className="footer" id="fot" style={{ position: 'absolute', top: '94vh', marginLeft: '13em', width: '84vw', borderTop: '1px solid black', padding: '0.4em 0'}}>
        <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2020. Todos los derechos reservados.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Diseñado & creado con <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/heart-icon.png" height="20" style={{paddingBottom: '0.2em'}} />
            </span>
        </div>
        </footer>


    </div>
  );
}

export default PanelPage;
