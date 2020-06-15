import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => {
      setOpen(!dropdownOpen);
  }

  const load= () => {
      console.log("entra load");
      console.log("has pulsado");
    console.log("sale load");

  }
  const pulsado = () => {
      console.log("has pulsado");
  }



  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} onload={load}>
      <DropdownToggle caret outline color="primary">
        Ordenar por...
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem id="opcionDNI" onClick={load}>DNI</DropdownItem>
        <DropdownItem>Apellidos</DropdownItem>
        <DropdownItem>Antigüedad</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Dropdown;