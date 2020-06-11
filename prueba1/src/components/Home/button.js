import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    var items = document.getElementsByClassName("divC");
    setTimeout(function(){
      items.item(0).children.item(0).classList.add("animate");
      items.item(1).children.item(0).classList.add("animate2");
      items.item(2).children.item(0).classList.add("animate3");
    }, 1000);

    setTimeout(function(){
      items.item(0).children.item(0).classList.remove("animate");
      items.item(1).children.item(0).classList.remove("animate2");
      items.item(2).children.item(0).classList.remove("animate3");
    }, 3000);
  }

  render() {
    return (
      <a href="#counter" className="btn btn-light botoncito d-none d-md-block" style={{backgroundColor: 'white', border: 'none'}} onClick={this.handleClick}>EXPLORA</a>
    );
  }
}
