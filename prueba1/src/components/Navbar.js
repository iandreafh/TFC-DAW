import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import logoAdmin from '../img/pack/logo10.png';
import logo from '../img/LogoUnido.png';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="nav">
        
      <Navbar light expand="md" style={{backgroundColor: '#F5FDFF', boxShadow: '0px -2px 10px #888888', position: 'relative', width: '100%', zIndex: '5'}}>
        <NavbarBrand href="/">
          <img src={logo} id="fonditoNav" style={{height: '10vh', display: 'inline-block'}} />
          <h4 style={{fontWeight: 'bold', paddingLeft: '2vw', display: 'inline-block'}}>Dental Vhita</h4>
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/components/">Components</NavLink> */}
            </NavItem>
          </Nav>
          <NavbarText><NavLink href="/login" style={{display: "inline-block"}}>Acceso</NavLink><img src={logoAdmin} width="38vh" style={{display: 'inline-block'}} /></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;