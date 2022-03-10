import React, { Component } from 'react';
import carshop from '../img/carshop2.png';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <input type="text" />
        <img src={ carshop } alt="img-carshop" />
      </header>
    );
  }
}

export default Header;
