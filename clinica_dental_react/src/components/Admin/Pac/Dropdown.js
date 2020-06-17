import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => {
      setOpen(!dropdownOpen);
  }

  const pulsado = () => {
      console.log("has pulsado");
  }



  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret outline color="primary">
        Filas
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem id="num">3</DropdownItem>
        <DropdownItem>4</DropdownItem>
        <DropdownItem>5</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Dropdown;